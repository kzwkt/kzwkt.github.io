---
layout: post
title: "Installing alpine linux from another linux"
permalink: alpine-linux-install
date: 2024-06-08
categories: linux
author:
- Kailash
meta: "linux,alpine"
---

download static apk from gitlab release for your architecture
https://gitlab.alpinelinux.org/alpine/apk-tools/-/releases

```
chmod +x apk.static
```
```
sudo cfdik /dev/sda
```
make new partition lets say its sda2  
```
mkfs.ext4 /dev/sda2
```
```
mount /dev/sda2 /mnt
```
```
sudo ./apk.static  -X "http://dl-cdn.alpinelinux.org/alpine/latest-stable/main" -U --allow-untrusted --root /mnt --initdb add alpine-base
```

```
nano chroot.sh
```
```
mount --rbind /dev /mnt/dev && mount --make-rslave /mnt/dev
mount --rbind /dev/pts /mnt/dev/pts && mount --make-rslave /mnt/dev/pts
mount --rbind /proc /mnt/proc && mount --make-rslave /mnt/proc
mount --rbind /sys /mnt/sys && mount --make-rslave /mnt/sys
chroot  /mnt /bin/sh
```


```
sudo /bin/sh ./chroot.sh
```

# install some apps
```
cat /etc/apk/workd
```
apk add
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

run setup-devd, choose mdev or udev dont install libudev-zero if you plan to use udev

nano ~/.bin/s
```
if [ -z "$XDG_RUNTIME_DIR" ]; then
	XDG_RUNTIME_DIR="/tmp/$(id -u)-runtime-dir"
	mkdir -pm 0700 "$XDG_RUNTIME_DIR"
	export XDG_RUNTIME_DIR
fi

export NO_AT_BRIDGE=1
dbus-run-session sway
```

