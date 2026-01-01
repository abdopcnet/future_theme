# API Tree

## Client-Side Only

This app has no server-side API methods. All functionality is client-side JavaScript.

## Print Style Form Enhancements

### Blue Theme Button
- File: `blue_print_style.js`
- Action: Injects blue theme CSS, sets `custom_theme_color='blue'`
- Updates: Print Settings, clears cache, reloads page

### Yellow Theme Button
- File: `yellow_print_style.js`
- Action: Injects yellow theme CSS, sets `custom_theme_color='yellow'`
- Updates: Print Settings, clears cache, reloads page

### Dark Blue Theme Button
- File: `dark_blue.js`
- Action: Injects dark blue theme CSS, sets `custom_theme_color='dark_blue'`
- Updates: Print Settings, clears cache, reloads page

## Custom Field

- `custom_theme_color` - Color picker field on Print Style DocType
- Field Type: Color
- Inserted after: `standard` field
- Module: Future Theme

