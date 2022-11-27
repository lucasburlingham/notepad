# Notepad

Loosely based upon [Taq Karim's TabNotes](https://mottaquikarim.github.io/dev/posts/a-technique-for-saving-content-from-a-datatext/html-uri/). 
I've expanded it and it now uses localStorage instead of copy/paste, though with that it no longer runs through the `data:text/html,` URI. 
It is still a single HTML page though, with no outside dependancies.


## Commands:

- `/reset` (or `/clear`): Clears the notepad and storage
- `/print`: Removes the `/print` from the notepad and opens the print dialog
- `/save`: Removes the `/save` from the notepad and saves the raw HTML document you've typed.


## Shortcuts: 

- `CTRL+i` toggles *italic* text
- `CTRL+b` toggles **bold** text
- `CTRL+u` toggles <underline>underlined<underline> text
- `CTRL+s` saves the document to your hard drive
- `CTRL+p` opens the print dialog so you can save it as a PDF or print to a physical printer
  
