# NppExec Scripts

Eval a JavaScript code using node.js and insert the output:
```
NPE_CONSOLE v+
set z ~ $(z) + 0.04
set s = console.log($(z)+'</pos>');
node -e "$(s)"
SEL_SETTEXT $(OUTPUT)
```

Copy active buffer and replace text:
```
sci_sendmsg 2006 // SCI_GETLENGTH
sci_sendmsg 2419 0 $(MSG_RESULT) @"" // SCI_COPYRANGE
set str ~ $(CLIPBOARD_TEXT) "'" '"'
// npp_run svgo -s '$(CLIPBOARD_TEXT)' -o -
// echo $(OUTPUT)
echo $(str)
```

Run external command, copy output, clear active buffer and paste from clipboard:
```
npp_console 0
npp_run svgo -i "$(FULL_CURRENT_PATH)" -o - | clip
sleep 1500 // Wait until svgo is done
sci_sendmsg 2004 // SCI_CLEARALL
sci_sendmsg 2179 // SCI_PASTE
npp_menucommand "Macro\Clean SVG"
```

## Documentation
+ Scintilla docs: https://www.scintilla.org/ScintillaDoc.html
+ NPP's Scintilla message codes: https://github.com/notepad-plus-plus/notepad-plus-plus/blob/master/scintilla/include/Scintilla.h
