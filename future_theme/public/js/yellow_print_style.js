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

frappe.ui.form.on("Print Style", {
	refresh(frm) {
		// Only work on Print Style with print_style_name = "future"
		if (frm.doc.print_style_name !== "future") {
			return;
		}
		
		// Remove existing button if any
		$('.btn-yellow-theme').remove();
		
		// Yellow theme button
		frm.page.add_inner_button(
			__('yellow_theme'),
			function() {
				// CSS content embedded
				const css_content = `/* الترويسة العلوية */
/* top head */
header.navbar.navbar-expand {
	background-color: #ffc04d;
	border-radius: 0.7em;
}

/* رأس الصفحة */
/* page head */
div.page-head.flex {
	background-color: #ffc04d4d;
}

/* page body */
.page-container {
	background-color: #ffc04d4d;
}

/* spacer */
.spacer {
	background-color: #ffc04d4d;
	transition: background 0.3s;
	border-radius: 0.7em;
}

.spacer:hover {
	background-color: #ffc04db8;
}

/* sidebar */
.layout-side-section {
	background-color: #ffc04d4d;
	transition: background 0.3s;
	border-radius: 0.7em;
}

.layout-side-section:hover {
	background-color: #ffc04db8;
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
	color: rgb(0, 39, 255);
	transition: color 0.5s ease;
}

.dropdown-help span:hover {
	color: rgb(255, 0, 0);
}


/*opened doc*/
.disabled {
	color: rgb(0, 39, 255);
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
	background-color: #ffc04d4f;
	transition: background 0.3s;
	border-radius: 0.7em;
}

.form-tabs-list .form-tabs .nav-item .nav-link {
	border-radius: 0.4em;
}

.form-tabs-list .form-tabs .nav-item .nav-link.active {
	background-color: #ffc04d94;
	transition: background 1s, color 1s;
}

/*details tap in customize form*/
div.tabs {
	background-color: #ffc04d4f;
	transition: background 0.3s;
	border-radius: 0.7em;
}

div.tab.active {
	background-color: #ffc04d94;
	font-weight: bold;
	transition: background 0.3s, color 0.3s;
}


/* cards and shortcuts */
.shortcut-widget-box {
	position: relative;
	border: 2px solid #ffc04d4d;
	border-radius: 8px;
	box-shadow: 0 0 4px 0 #ffc04d4d;
}

.shortcut-widget-box:hover {
	border-color: #ffc04d4d;
	box-shadow: 0 0 16px 4px #ffc04d4d;
	;
}

.links-widget-box {
	position: relative;
	border: 2px solid #ffc04d4d;
	border-radius: 8px;
	box-shadow: 0 0 4px 0 #ffc04d4d;
}

.links-widget-box:hover {
	border-color: #ffc04d4d;
	box-shadow: 0 0 16px 4px #ffc04d4d;
}

/* Action Button Styling */
.btn.btn-primary {
	border-radius: 1em !important;
	border: none;
	/* Default state background: Keep the dark, simple gradient */
	background: linear-gradient(120deg, #232946, #1a2233, #323e5c, #232946);
	color: #fff;
	font-weight: bold;
	padding: 0.75em 2em;
	box-shadow: 0 2px 8px 0 #23294655;
}

.btn.btn-primary:hover,
.btn.btn-primary:focus {
	/* Hover background: Solid color matching the header (#ffc04d) */
	background: #ffc04d;
	/* Font color: Changed to Black (#000) */
	color: #000;
	/* Simple, subtle shadow: Light glow in the same yellow color */
	box-shadow: 0 0 5px 2px #ffc04d;
	outline: none;
}

.btn.btn-primary>* {
	position: relative;
}

/* list view header */
.list-row-head {
	background-color: #ffc04d4f;
	transition: background 0.3s;
	border-radius: 0.7em;
}

.list-row-head:hover {
	background-color: #ffc04d94;
}


/* tables header */
.grid-heading-row .row {
	background-color: #ffc04d4f;
	transition: background 0.3s;
	border-radius: 0.7em;
}

.grid-heading-row .row:hover {
	background-color: #ffc04d94;
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
	border: 2px solid #ffc04d4d;
	border-radius: 8px;
	box-shadow: 0 0 4px 0 #ffc04d4d;
}

.custom-block-widget-box:hover {
	border-color: #ffc04d4d;
	box-shadow: 0 0 16px 4px #ffc04d4d;
}

/* Style for .dashboard-widget-box */
.widget.dashboard-widget-box {
	position: relative;
	border: 2px solid #ffc04d4d;
	border-radius: 8px;
	box-shadow: 0 0 4px 0 #ffc04d4d;
}

.widget.dashboard-widget-box:hover {
	border-color: #ffc04d4d;
	box-shadow: 0 0 16px 4px #ffc04d4d;
}

/* Style for .number-widget-box */
.widget.number-widget-box {
	position: relative;
	border: 2px solid #ffc04d4d;
	border-radius: 8px;
	box-shadow: 0 0 4px 0 #ffc04d4d;
}

.widget.number-widget-box:hover {
	border-color: #ffc04d4d;
	box-shadow: 0 0 16px 4px #ffc04d4d;
}


/* حقول الإدخال الأساسية */
.visible-section .control-input>input {
	border: 1px solid #ffc04d4d;
	border-radius: 4px;
}

/* حقول الإكمال التلقائي */
.awesomplete>input {
	border: 1px solid #4a90e2;
	border-radius: 4px;
}

/* حقول الاختيار */
select.form-control {
	border: 1px solid #9c27b0;
	border-radius: 4px;
	cursor: pointer;
}


/* hide help menu*/
.dropdown-help span {
	display: none;
}

/* Close sidebar by default on page load */
.layout-side-section {
	display: none;
}`;
				
				frm.set_value('css', css_content);
				frm.set_value('custom_theme_color', 'yellow');
				frm.save().then(() => {
					// Update Print Settings
					frappe.call({
						method: 'frappe.client.set_value',
						args: {
							doctype: 'Print Settings',
							name: 'Print Settings',
							fieldname: 'print_style',
							value: 'future'
						},
						callback: function(r) {
							if (!r.exc) {
								// Clear cache and reload
								clearCacheAndReload();
							}
						}
					});
				});
			},
			null,
			'warning'
		).addClass("btn-yellow-theme").css({'background-color': '#ffc04d', 'color': '#000', 'border-color': '#ffc04d'});
	}
});

