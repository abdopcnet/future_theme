frappe.ui.form.on("Print Style", {
	refresh(frm) {
		// Remove existing buttons if any
		$('.btn-yellow-theme').remove();
		$('.btn-blue-theme').remove();
		
		// Yellow theme button
		frm.page.add_inner_button(
			__('yellow_theme'),
			function() {
				frm.set_value('custom_theme_color', 'yellow');
				frappe.show_alert(__('Theme color set to yellow. Click Save to update CSS file.'), 3);
			},
			null,
			'warning'
		).addClass("btn-yellow-theme").css({'background-color': '#ffc04d', 'color': '#000', 'border-color': '#ffc04d'});
		
		// Blue theme button
		frm.page.add_inner_button(
			__('blue_theme'),
			function() {
				frm.set_value('custom_theme_color', 'blue');
				frappe.show_alert(__('Theme color set to blue. Click Save to update CSS file.'), 3);
			},
			null,
			'primary'
		).addClass("btn-blue-theme").css({'background-color': '#7293b0', 'color': '#fff', 'border-color': '#7293b0'});
	}
});

