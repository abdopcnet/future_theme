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
				const css_content = 
				
`
/* top head */
header.navbar.navbar-expand {
	background-color: #ffc04d;
	border-radius: 0.7em;
}      

/* رأس الصفحة */
/* page head */
}

/* spacer */
}

/* sidebar */
.layout-side-section {
}

/*logo*/
.app-logo {
.app-logo:hover {
.dropdown-help span {


/*opened doc*/
}

.disabled * {
/*doctype form tabs*/
	border-radius: 0.7em;

.form-tabs-list .form-tabs .nav-item .nav-link.active {
	background-color: #ffc04d94;
/*details tap in customize form*/
	border-radius: 0.7em;
}
	transition: background 0.3s, color 0.3s;
}

	position: relative;
	border: 2px solid #ffc04d4d;
	border-radius: 8px;
	box-shadow: 0 0 16px 4px #ffc04d4d;
	;
}

	border-radius: 8px;
	box-shadow: 0 0 4px 0 #ffc04d4d;
}
	box-shadow: 0 0 16px 4px #ffc04d4d;
}

/* Action Button Styling */
	/* Default state background: Keep the dark, simple gradient */
	background: linear-gradient(120deg, #232946, #1a2233, #323e5c, #232946);
}

.btn.btn-primary:hover,
.btn.btn-primary:focus {
	/* Hover background: Solid color matching the header (#ffc04d) */
	background: #ffc04d;
	/* Font color: Changed to Black (#000) */
	color: #000;

.btn.btn-primary>* {
	position: relative;
}

/* list view header */
.list-row-head {
}


/* tables header */
	border-radius: 0.7em;



	text-align: center;
.table-bordered th {

	align-items: center;
	width: 100%;
.table-bordered {
	border-collapse: collapse;
	width: 100%;
}
}

/* Style for .custom-block-widget-box */
	border-radius: 8px;
	border-color: #ffc04d4d;
	box-shadow: 0 0 16px 4px #ffc04d4d;
}

	border: 2px solid #ffc04d4d;
	border-radius: 8px;
	border-color: #ffc04d4d;
	box-shadow: 0 0 16px 4px #ffc04d4d;
}

	border: 2px solid #ffc04d4d;
	border-radius: 8px;
	border-color: #ffc04d4d;
	box-shadow: 0 0 16px 4px #ffc04d4d;
}

	border: 1px solid #ffc04d4d;
	border-radius: 4px;
	border-radius: 4px;
}
	border-radius: 4px;
	cursor: pointer;
.dropdown-help span {
	display: none;
}
				
					frappe.call({

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

