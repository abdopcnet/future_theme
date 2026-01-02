# File Structure

```
future_theme/
├── hooks.py
├── future_theme/
│   ├── custom/
│   │   └── print_style.json
│   ├── print_styles/
│   └── public/
│       ├── css/
│       │   └── login_bundle.css
│       └── js/
│           ├── blue_print_style.js
│           ├── yellow_print_style.js
│           └── dark_blue.js
└── modules.txt
```

## Key Files

- `hooks.py` - App hooks (doctype_js, web_include_css)
- `custom/print_style.json` - Custom field definition for Print Style DocType
  - `custom_theme_color` (Color field)
  - Field order property setter
- `public/js/blue_print_style.js` - Blue theme button and CSS
- `public/js/yellow_print_style.js` - Yellow theme button and CSS
- `public/js/dark_blue.js` - Dark blue theme button and CSS
- `public/css/login_bundle.css` - Login page styling

