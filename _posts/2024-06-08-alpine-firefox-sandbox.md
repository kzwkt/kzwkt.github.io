---
layout: post
title: "bubblewrap firefox"
permalink: alpine-firefox-sandbox
date: 2024-06-08
categories: [linux,sandbox]
author:
- Kailash
meta: "linux,alpine"
---
```
doas apk add bubblewrap
```
```
nano ~/.bin/firefox
```
```
#!/bin/sh
DBUS_SOCKET_DIR=$(echo "$DBUS_SESSION_BUS_ADDRESS" | sed 's/unix:path=//; s/,.*//')
/usr/bin/bwrap \
  --unshare-all --share-net --new-session --die-with-parent --cap-drop ALL  \
  --clearenv \
  --setenv XDG_RUNTIME_DIR "$XDG_RUNTIME_DIR" \
  --setenv WAYLAND_DISPLAY "$WAYLAND_DISPLAY" \
  --setenv DBUS_SESSION_BUS_ADDRESS "$DBUS_SESSION_BUS_ADDRESS" \
  --setenv NO_AT_SPI "1" \
  --setenv HOME "$HOME" \
  --hostname localhost \
  --dev /dev/ \
  --dev-bind /dev/dri /dev/dri \
  --dev-bind /dev/snd /dev/snd \
  --ro-bind /sys/dev/char /sys/dev/char \
  --ro-bind /sys/devices/pci0000:00 /sys/devices/pci0000:00 \
  --ro-bind /etc/fonts/ /etc/fonts/ \
  --ro-bind /etc/group /etc/group \
  --ro-bind /etc/passwd /etc/passwd \
  --ro-bind /etc/resolv.conf /etc/resolv.conf \
  --bind ~/.mozilla/ ~/.mozilla/ \
  --ro-bind ~/.fonts ~/.fonts \
  --bind-try ~/Downloads/ ~/Downloads/  \
  --ro-bind /lib/ld-musl-x86_64.so.1 /lib/ld-musl-x86_64.so.1 \
  --ro-bind /lib/libblkid.so.1 /lib/libblkid.so.1 \
  --ro-bind /lib/libcrypto.so.3 /lib/libcrypto.so.3 \
  --ro-bind /lib/libmount.so.1 /lib/libmount.so.1 \
  --ro-bind /lib/libz.so.1 /lib/libz.so.1 \
  --proc /proc/ \
  --tmpfs /tmp \
  --ro-bind $DBUS_SOCKET_DIR $DBUS_SOCKET_DIR \
  --ro-bind "${XDG_RUNTIME_DIR}/${WAYLAND_DISPLAY}" "${XDG_RUNTIME_DIR}/${WAYLAND_DISPLAY}" \
  --ro-bind /usr/lib/ /usr/lib/ \
  --ro-bind /usr/share/alsa/ /usr/share/alsa/ \
  --ro-bind /usr/share/drirc.d/ /usr/share/drirc.d/  \
 --ro-bind /usr/share/X11/xkb/ /usr/share/X11/xkb/ \
  --ro-bind /usr/share/fontconfig/ /usr/share/fontconfig/ \
  --ro-bind /usr/share/fonts/ /usr/share/fonts/ \
  --ro-bind /usr/share/glib-2.0/ /usr/share/glib-2.0/ \
  --ro-bind /usr/share/icons/ /usr/share/icons/ \
  --ro-bind /usr/share/themes /usr/share/themes \
 --ro-bind /usr/share/icu/ /usr/share/icu/ \
  --ro-bind /usr/share/mime/ /usr/share/mime/ \
  /usr/lib/firefox/firefox
```

for debian  
```
bwrap \
--unshare-all \
--share-net \
--die-with-parent \
--new-session \
--clearenv \
--setenv HOME /home/kai \
--setenv GTK_THEME Adwaita:dark \
--setenv MOZ_ENABLE_WAYLAND 1 \
--setenv WAYLAND_DISPLAY "$WAYLAND_DISPLAY" \
--setenv XDG_RUNTIME_DIR "$XDG_RUNTIME_DIR" \
--setenv PATH /usr/bin \
--hostname localhost \
--symlink usr/lib /lib \
--symlink usr/lib64 /lib64 \
--ro-bind /usr/lib /usr/lib \
--ro-bind /usr/lib64 /usr/lib64 \
--dev /dev \
--dev-bind /dev/dri /dev/dri \
--ro-bind /sys/dev/char /sys/dev/char \
--ro-bind /sys/devices/pci0000:00 /sys/devices/pci0000:00 \
--proc /proc \
--tmpfs /tmp \
--ro-bind /usr/share/applications /usr/share/applications \
--ro-bind /usr/share/gtk-3.0 /usr/share/gtk-3.0 \
--ro-bind /usr/share/fontconfig /usr/share/fontconfig \
--ro-bind-try /usr/share/icu /usr/share/icu \
--ro-bind /usr/share/drirc.d /usr/share/drirc.d \
--ro-bind /usr/share/fonts /usr/share/fonts \
--ro-bind /usr/share/glib-2.0 /usr/share/glib-2.0 \
--ro-bind /usr/share/glvnd /usr/share/glvnd \
--ro-bind /usr/share/icons /usr/share/icons \
--ro-bind /usr/share/libdrm /usr/share/libdrm \
--ro-bind /usr/share/mime /usr/share/mime \
--ro-bind /usr/share/X11/xkb /usr/share/X11/xkb \
--ro-bind /usr/share/icons /usr/share/icons \
--ro-bind /usr/share/mime /usr/share/mime \
--ro-bind /etc/fonts /etc/fonts \
--ro-bind /etc/resolv.conf /etc/resolv.conf \
--ro-bind /usr/share/ca-certificates /usr/share/ca-certificates \
--ro-bind /etc/ssl /etc/ssl \
--ro-bind /etc/ca-certificates /etc/ca-certificates \
--bind "$XDG_RUNTIME_DIR/pulse" "$XDG_RUNTIME_DIR/pulse" \
--ro-bind "$XDG_RUNTIME_DIR/wayland-1" "$XDG_RUNTIME_DIR/wayland-1" \
--ro-bind "$XDG_RUNTIME_DIR/bus" "$XDG_RUNTIME_DIR/bus" \
--bind-try ~/.mozilla ~/.mozilla \
--bind-try ~/Downloads ~/Downloads \
--bind ~/opt/firefox ~/opt/firefox \
--ro-bind-try ~/.local/share/fonts/ ~/.local/share/fonts/ \
~/opt/firefox/firefox
```

#Reference  
https://wiki.alpinelinux.org/wiki/Bubblewrap  
https://wiki.alpinelinux.org/wiki/Bubblewrap/Examples  
https://wiki.archlinux.org/title/Bubblewrap  
https://wiki.archlinux.org/title/Bubblewrap/Examples  
