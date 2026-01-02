# Workflow

## Print Style Theme Application

```
User Opens Print Style Form
    ↓
Check if print_style_name = "future"
    ↓
If Yes:
    ├─ Add Blue Theme Button
    ├─ Add Yellow Theme Button
    └─ Add Dark Blue Theme Button
    ↓
User Clicks Theme Button
    ↓
Inject Preset CSS Content
    ↓
Set custom_theme_color Field
    ↓
Save Print Style Document
    ↓
Update Print Settings (print_style = 'future')
    ↓
Clear Cache & Reload Page
```

## Theme Customization Flow

```
Create/Edit Print Style
    ↓
Set print_style_name = "future"
    ↓
Select Theme Color (Color Picker)
    OR
Click Theme Button (Blue/Yellow/Dark Blue)
    ↓
Customize CSS (Optional)
    ↓
Save & Apply
    ↓
CSS Applied to Print Formats
```

## Login Page Styling

```
App Installed
    ↓
login_bundle.css Loaded via web_include_css
    ↓
Login Page Rendered with Custom Styles
```

