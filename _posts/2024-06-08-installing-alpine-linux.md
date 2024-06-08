---
layout: post
title: "Installing alpine linux from another linux"
date: 2024-06-08
categories: linux
author:
- Kailash
meta: "linux,alpine"
---

download static apk from gitlab release for your architecture
https://gitlab.alpinelinux.org/alpine/apk-tools/-/releases
chmod +x apk.static

sudo cfdik /dev/sda
make new partition lets say its sda2

mkfs.ext4 /dev/sda2 
mount /dev/sda2 /mnt
sudo ./apk.static  -X "http://dl-cdn.alpinelinux.org/alpine/latest-stable/main" -U --allow-untrusted --root /mnt --initdb add alpine-base

cat chroot.sh  
mount --rbind /dev /mnt/dev && mount --make-rslave /mnt/dev
mount --rbind /dev/pts /mnt/dev/pts && mount --make-rslave /mnt/dev/pts
mount --rbind /proc /mnt/proc && mount --make-rslave /mnt/proc
mount --rbind /sys /mnt/sys && mount --make-rslave /mnt/sys
chroot  /mnt /bin/sh

sudo /bin/sh ./chroot.sh

cat /etc/apk/workd 
alpine-base
alsa-utils
brightnessctl
bubblewrap
cfdisk
doas
dosfstools
e2fsprogs
file
firefox
font-awesome
font-dejavu
font-dejavu-sans-mono-nerd
foot
grim
gsettings-desktop-schemas
htop
i3blocks
intel-media-driver
iwd
jq
libudev-zero
linux-firmware-ath10k
linux-firmware-i915
linux-firmware-none
linux-lts
mesa-dri-gallium
mingetty
mpv
nano
nnn
ntfs-3g
openresolv
seatd
slurp
socat
sway
wireless-regdb
wl-clipboard
wofi
wtype
zathura-pdf-mupdf

cat ./bin/firefox
---
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
  ---

cat .bin/s
if [ -z "$XDG_RUNTIME_DIR" ]; then
	XDG_RUNTIME_DIR="/tmp/$(id -u)-runtime-dir"
	mkdir -pm 0700 "$XDG_RUNTIME_DIR"
	export XDG_RUNTIME_DIR
fi

export NO_AT_BRIDGE=1
dbus-run-session sway

