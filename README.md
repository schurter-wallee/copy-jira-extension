# Jira Issue Number Copier

A Chrome extension that allows you to copy the Jira issue number of the currently viewed Jira page to your clipboard using a customizable keyboard shortcut.

## Features

- Copies the Jira issue number (e.g., `PROJECT-123`) from Jira pages, whether it's in the URL path (`/browse/` or `/issues/`) or a query parameter (`?selectedIssue=...`).
- Displays a visual message when copying is successful or if an error occurs.
- Customizable keyboard shortcut.

## Installation Guide

### 1. Download the Extension Files

1. Clone or download this repository to your computer:

```bash
git clone https://github.com/schurter-wallee/copy-jira-extension.git
```

2. Navigate to the folder where the files are stored.

### 2. Enable Developer Mode in Chrome

1. Open Chrome and go to `chrome://extensions/`.
2. In the top-right corner, enable **Developer Mode** by toggling the switch.

### 3. Load the Extension

1. Click the **Load unpacked** button in the top-left corner.
2. Select the folder containing the extension files (e.g., the folder with `manifest.json`).

### 4. Verify Installation

1. The extension should now appear in your list of installed extensions.
2. Pin the extension to your toolbar for easy access (optional).

## Using the Extension

### Default Shortcut:

The default shortcut is **Ctrl+Shift+I** (or **Command+Shift+I** on Mac).

### To Copy a Jira Issue Number:

1. Open a Jira page with an issue number (e.g., https://yourcompany.atlassian.net/browse/PROJECT-123).
2. Press the keyboard shortcut to copy the issue number to your clipboard.
3. A success message will appear in the bottom-right corner of the page.

## Customizing the Shortcut

1. Go to `chrome://extensions/shortcuts` in Chrome.
2. Find the extension (**Jira Issue Number Copier**) in the list.
3. Click the shortcut field and press the desired key combination to set your custom shortcut.

## Troubleshooting

- If no issue number is found, a message will notify you.
- If the clipboard action fails, ensure the page is focused and you are on a Jira domain (`*.atlassian.net` or `*.jira.com`).

## Uninstalling

1. Open `chrome://extensions/`.
2. Find the extension and click the **Remove** button.
