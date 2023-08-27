# Notepad

Loosely based upon [Taq Karim's TabNotes](https://mottaquikarim.github.io/dev/posts/a-technique-for-saving-content-from-a-datatext/html-uri/).

I've expanded it and it now uses localStorage instead of copy/paste, though with that it no longer runs through the `data:text/html,` URI. When installed as a chrome extension, it can take advantage of Google Chrome's sync service, so your data will be synced between devices and browsers.

## Commands

- `/reset` (or `/clear`): Clears the notepad and storage
- `/print`: Removes the `/print` from the notepad and opens the print dialog (doesn't work in Chrome extension mode)
- `/save`: Removes the `/save` from the notepad and saves the raw HTML document you've typed. (doesn't work in Chrome extension mode)
- `/settings`: Takes you to the settings page in a new tab

## Shortcuts

- `CTRL+b` toggles **bold** text
- `CTRL+i` toggles *italic* text
- `CTRL+u` toggles <underline>underlined<underline> text
- `CTRL+p` opens the print dialog so you can save it as a PDF or print to a physical printer
- `CTRL+s` saves the document to your hard drive (doesn't work in Chrome extension mode)
- `CTRL+z` undos the last action
- `CTRL+x` cuts text
- `CTRL+y` redos the last action
- `CTRL+a` selects all text
- `CTRL+f` finds text  
- `CTRL++` zooms in
- `CTRL+-` zooms out
- `CTRL+0` resets zoom

Thanks [mottaquikarim](https://github.com/mottaquikarim) for the inspiration and boilerplate.

*Hosted on [Netlify](https://netlify.com)*
  
[![Netlify Status](https://api.netlify.com/api/v1/badges/c4360102-d0c2-4a17-9f8a-d37f33fa668b/deploy-status)](https://app.netlify.com/sites/tabbywordeditor/deploys)

  [![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
  [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
  [![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)
  
  [![forthebadge](https://forthebadge.com/images/badges/works-on-my-machine.svg)](https://forthebadge.com)
