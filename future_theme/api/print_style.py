# Copyright (c) 2025, Future Theme and contributors
# License: MIT. See LICENSE

import frappe
import os


def update_css_file(doc, method=None):
	"""Update CSS file based on custom_theme_color field"""
	# Check if custom_theme_color is set
	if not doc.get("custom_theme_color"):
		return
	
	# Map color to CSS file
	color_map = {
		"blue": "blue.css",
		"yellow": "yellow.css"
	}
	
	css_file = color_map.get(doc.custom_theme_color.lower())
	if not css_file:
		return
	
	# Get CSS file path
	css_path = frappe.get_app_path("future_theme", "public", "css", css_file)
	
	if not os.path.exists(css_path):
		frappe.throw(f"CSS file not found: {css_path}")
	
	# Write CSS content to file
	try:
		with open(css_path, "w", encoding="utf-8") as f:
			f.write(doc.css or "")
		frappe.msgprint(f"CSS file {css_file} updated successfully")
	except Exception as e:
		frappe.throw(f"Error updating CSS file: {str(e)}")

