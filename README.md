# Future Theme

![Version](https://img.shields.io/badge/version-30.12.2025-blue)

Custom print style themes for Frappe/ERPNext with color customization.

## Features

-   **Custom Print Styles**: Extends Print Style DocType with theme color picker
-   **Blue Theme**: Professional blue color scheme for print formats
-   **Yellow Theme**: Bright yellow color scheme for print formats
-   **Color Customization**: Custom theme color field for personalized styling
-   **Dynamic CSS Injection**: Real-time theme preview and application

## Quick Start

```bash
bench get-app future_theme --branch develop
bench --site [site_name] install-app future_theme
```

## Usage

1. Navigate to **Print Style** DocType
2. Create or edit a Print Style with `print_style_name = "future"`
3. Select your preferred theme color using the **Theme Color** field
4. Use **Blue Theme** or **Yellow Theme** buttons to apply preset styles
5. Customize CSS in the CSS field for advanced styling

## Features Preview

-   Custom theme color picker integration
-   Blue and yellow preset themes
-   Dynamic CSS injection for print previews
-   Print style customization interface

## Contributing

This app uses `pre-commit` for code formatting and linting:

```bash
cd apps/future_theme
pre-commit install
```

Tools: ruff, eslint, prettier, pyupgrade

## License

MIT
