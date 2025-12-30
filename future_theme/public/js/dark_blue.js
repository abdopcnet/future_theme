// Clear cache and reload function
(function () {
	if (window.clearCacheAndReload) return;
	window.clearCacheAndReload = function () {
		try {
			localStorage.clear();
		} catch (_) {
			try {
				Object.keys(localStorage).forEach((k) => localStorage.removeItem(k));
			} catch (_) {}
		}
		try {
			sessionStorage.clear();
		} catch (_) {}
		try {
			location.reload(true);
		} catch (_) {
			location.reload();
		}
	};
})();

frappe.ui.form.on('Print Style', {
	refresh(frm) {
		// Only work on Print Style with print_style_name = "future"
		if (frm.doc.print_style_name !== 'future') {
			return;
		}

		// Remove existing button if any
		$('.btn-dark-blue-theme').remove();

		// Dark Blue theme button
		frm.page
			.add_inner_button(
				__('dark_blue_theme'),
				function () {
					// CSS content embedded
					const css_content = `
/* top head */
header.navbar.navbar-expand {
	background-color: #1a3c61;
	border-radius: 0.7em;
}

/*Page Head*/
div.page-head.flex {
	background-color: #1a3c614d;
}

/* page body */
.page-container {
	background-color: #1a3c614d;
}

/* spacer */
sidebar .spacer {
	background-color: #1a3c614d;
	transition: background 0.3s;
	border-radius: 0.7em;
}

.spacer:hover {
	background-color: #1a3c61b8;
}

/* sidebar */
.layout-side-section {
	background-color: #1a3c614d;
	transition: background 0.3s;
	border-radius: 0.7em;
}

.layout-side-section:hover {
	background-color: #dddddd;
}

/*logo*/
.app-logo {
	transition: transform 0.5s ease;
}

.app-logo:hover {
	transform: scale(1.5);
}

/*help word*/
.dropdown-help span {
	color: #4da8da;
	transition: color 0.5s ease;
}

.dropdown-help span:hover {
	color: rgb(255, 0, 0);
}

/*opened doc*/
.disabled {
	color: #4da8da;
	transition: color 0.5s ease;
}

.disabled:hover,
.disabled:focus {
	color: rgb(255, 0, 0);
}

.disabled * {
	color: inherit !important;
}

/* doctype tabs */
/*doctype form tabs*/
.form-tabs-list .form-tabs {
	background-color: #1a3c614f;
	transition: background 0.3s;
	border-radius: 0.7em;
}

.form-tabs-list .form-tabs .nav-item .nav-link {
	border-radius: 0.4em;
}

.form-tabs-list .form-tabs .nav-item .nav-link.active {
	background-color: #1a3c6194;
	transition: background 1s, color 1s;
}

/*details tap in customize form*/
div.tabs {
	background-color: #1a3c614f;
	transition: background 0.3s;
	border-radius: 0.7em;
}

div.tab.active {
	background-color: #1a3c6194;
	font-weight: bold;
	transition: background 0.3s, color 0.3s;
}

/* cards and shortcuts */
.shortcut-widget-box {
	position: relative;
	border: 2px solid #1a3c614d;
	border-radius: 8px;
	box-shadow: 0 0 4px 0 #1a3c614d;
}

.shortcut-widget-box:hover {
	border-color: #1a3c614d;
	box-shadow: 0 0 16px 4px #1a3c614d;
}

.links-widget-box {
	position: relative;
	border: 2px solid #1a3c614d;
	border-radius: 8px;
	box-shadow: 0 0 4px 0 #1a3c614d;
}

.links-widget-box:hover {
	border-color: #1a3c614d;
	box-shadow: 0 0 16px 4px #1a3c614d;
}

/* Action Button Styling */
.btn.btn-primary {
	border-radius: 1em !important;
	border: none;
	background: linear-gradient(120deg, #0d1b2a, #1b263b, #415a77, #0d1b2a);
	color: #fff;
	font-weight: bold;
	padding: 0.75em 2em;
	box-shadow: 0 2px 8px 0 #0d1b2a55;
}

.btn.btn-primary:hover,
.btn.btn-primary:focus {
	background: #1a3c61;
	color: #fff;
	box-shadow: 0 0 5px 2px #1a3c61;
	outline: none;
}

.btn.btn-primary > * {
	position: relative;
}

/* list view header */
.list-row-head {
	background-color: #1a3c614f;
	transition: background 0.3s;
	border-radius: 0.7em;
}

.list-row-head:hover {
	background-color: #1a3c6194;
}

/* tables header */
.grid-heading-row .row {
	background-color: #1a3c614f;
	transition: background 0.3s;
	border-radius: 0.7em;
}

.grid-heading-row .row:hover {
	background-color: #1a3c6194;
}

/* ====Report Css ========== */
.print-format-gutter {
	text-align: center;
}

.table-bordered {
	text-align: center;
}

.table-bordered th {
	background: #dddddd;
	text-align: center;
}

.filters-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}

table.table-bordered,
.table-bordered {
	border-collapse: collapse;
	width: 100%;
}

table.table-bordered th,
table.table-bordered td {
	border: 3px solid #111;
}

table.table-bordered {
	border: 3px solid #111;
}

/* Style for .custom-block-widget-box */
.custom-block-widget-box {
	position: relative;
	border: 2px solid #1a3c614d;
	border-radius: 8px;
	box-shadow: 0 0 4px 0 #1a3c614d;
}

.custom-block-widget-box:hover {
	border-color: #1a3c614d;
	box-shadow: 0 0 16px 4px #1a3c614d;
}

/* Style for .dashboard-widget-box */
.widget.dashboard-widget-box {
	position: relative;
	border: 2px solid #1a3c614d;
	border-radius: 8px;
	box-shadow: 0 0 4px 0 #1a3c614d;
}

.widget.dashboard-widget-box:hover {
	border-color: #1a3c614d;
	box-shadow: 0 0 16px 4px #1a3c614d;
}

/* Style for .number-widget-box */
.widget.number-widget-box {
	position: relative;
	border: 2px solid #1a3c614d;
	border-radius: 8px;
	box-shadow: 0 0 4px 0 #1a3c614d;
}

.widget.number-widget-box:hover {
	border-color: #1a3c614d;
	box-shadow: 0 0 16px 4px #1a3c614d;
}

/* Input fields */
.visible-section .control-input > input {
	border: 1px solid #1a3c614d;
	border-radius: 4px;
}

/* Autocomplete fields */
.awesomplete > input {
	border: 1px solid #4da8da;
	border-radius: 4px;
}

/* Select fields */
select.form-control {
	border: 1px solid #1a3c61;
	border-radius: 4px;
	cursor: pointer;
}

body .container {
	width: 100% !important;
	max-width: 100% !important;
}

.nav a {
	color: rgba(255, 255, 255, 0.73);
}

.nav a:hover {
	color: #c19797;
}

`;

					frm.set_value('css', css_content);
					frm.set_value('custom_theme_color', 'dark_blue');
					frm.save().then(() => {
						// Update Print Settings
						frappe.call({
							method: 'frappe.client.set_value',
							args: {
								doctype: 'Print Settings',
								name: 'Print Settings',
								fieldname: 'print_style',
								value: 'future',
							},
							callback: function (r) {
								if (!r.exc) {
									// Clear cache and reload
									clearCacheAndReload();
								}
							},
						});
					});
				},
				null,
				'primary',
			)
			.addClass('btn-dark-blue-theme')
			.css({ 'background-color': '#1a3c61', color: '#fff', 'border-color': '#1a3c61' });
	},
});
