

https://github.com/sindresorhus/open/blob/main/xdg-open    
https://github.com/BachoSeven/mimi/blob/master/xdg-open    



```
gio mime mimetype    
 gio info -a standard::content-type filename    
gio info -a standard::content-type fm
uri: file:///home/k/.bin/fm
local path: /home/k/.bin/fm
unix mount: /dev/sda1 /home ext4 rw,noatime
attributes:
  standard::content-type: application/x-shellscript


file --mime-type -b  fm
text/x-shellscript

cat  ~/.config/mimi/mimi.conf
TERM: foot
MENU: wofi
MENUARGS: --dmenu

audio/: mpv --player-operation-mode=pseudo-gui
video/: mpv --player-operation-mode=pseudo-gui
video/: firefox
image/: mvi
pdf: zathura

text/: $TERM  $EDITOR

text/html: firefox
text/xml: firefox
application/xhtml_xml: firefox
x-scheme-handler/http: firefox
x-scheme-handler/https: firefox
x-scheme-handler/ftp: firefox
x-scheme-handler/about = firefox
x-scheme-handler/unknown = firefox

```
