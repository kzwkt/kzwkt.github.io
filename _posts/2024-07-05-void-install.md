https://docs.voidlinux.org/  
# xbps-static method 
https://docs.voidlinux.org/xbps/troubleshooting/static.html  
https://repo-default.voidlinux.org/static/  
https://repo-default.voidlinux.org/static/xbps-static-latest.x86_64-musl.tar.xz  

```
tar xf xbps-static-latest.x86_64-musl.tar.xz  
sudo su  
mount /dev/nvme0n1p4 /mnt
mkdir -p /mnt/var/db/xbps/keys
cp var/db/xbps/keys/* /mnt/var/db/xbps/keys/

# https://xmirror.voidlinux.org/

export XBPS_ARCH=x86_64          # without this void will try to install musl , repo is /current/musl for musl

without ca-certiticates letsencrypt cert error
export SSL_NO_VERIFY_PEER=true   
 ./usr/bin/xbps-install -S -r /mnt -R "https://repo-default.voidlinux.org/current" base-minimal

[*] Updating repository `https://repo-default.voidlinux.org/current/x86_64-repodata' ...
x86_64-repodata: 1906KB [avg rate: 1036KB/s]

Name              Action    Version           New version            Download size
xbps-triggers     install   -                 0.128_1                11KB 
base-files        install   -                 0.144_1                61KB 
libxcrypt-compat  install   -                 4.4.36_3               88KB 
glibc             install   -                 2.39_4                 8866KB 
acl               install   -                 2.3.2_1                16KB 
attr              install   -                 2.5.2_1                9163B 
gmp               install   -                 6.3.0_1                256KB 
libcap            install   -                 2.70_1                 25KB 
coreutils         install   -                 9.4_1                  3200KB 
findutils         install   -                 4.9.0_1                467KB 
diffutils         install   -                 3.10_1                 372KB 
dash              install   -                 0.5.12_2               85KB 
libpcre2          install   -                 10.42_1                501KB 
grep              install   -                 3.11_2                 254KB 
gzip              install   -                 1.13_1                 83KB 
sed               install   -                 4.9_1                  228KB 
ncurses-libs      install   -                 6.5_1                  328KB 
libreadline8      install   -                 8.2.010_1              147KB 
gawk              install   -                 5.3.0_2                1261KB 
util-linux-common install   -                 2.40.2_1               2008KB 
libuuid           install   -                 2.40.2_1               17KB 
libblkid          install   -                 2.40.2_1               170KB 
libfdisk          install   -                 2.40.2_1               220KB 
libmount          install   -                 2.40.2_1               200KB 
libsmartcols      install   -                 2.40.2_1               138KB 
libedit           install   -                 20240808.3.1_1         105KB 
zlib              install   -                 1.3.1_1                54KB 
sqlite            install   -                 3.45.3_2               1265KB 
liblastlog2       install   -                 2.40.2_1               7044B 
pam-libs          install   -                 1.5.3_4                35KB 
eudev-libudev     install   -                 3.2.14_1               74KB 
libxcrypt         install   -                 4.4.36_3               87KB 
libcap-ng         install   -                 0.8.5_1                12KB 
util-linux        install   -                 2.40.2_1               1548KB 
which             install   -                 2.21_4                 16KB 
tar               install   -                 1.35_1                 816KB 
pam-base          install   -                 0.4_3                  1823B 
pam               install   -                 1.5.3_4                327KB 
shadow            install   -                 4.8.1_3                279KB 
procps-ng         install   -                 4.0.4_2                777KB 
iana-etc          install   -                 20240117_1             65KB 
libcrypto3        install   -                 3.3.2_1                1918KB 
libssl3           install   -                 3.3.2_1                407KB 
openssl           install   -                 3.3.2_1                589KB 
run-parts         install   -                 4.11.2_2               11KB 
ca-certificates   install   -                 20240203+3.104_1       164KB 
liblzma           install   -                 5.6.2_1                101KB 
libzstd           install   -                 1.5.6_1                326KB 
liblz4            install   -                 1.9.4_1                66KB 
bzip2             install   -                 1.0.8_2                60KB 
libarchive        install   -                 3.7.7_1                360KB 
libxbps           install   -                 0.59.2_3               137KB 
xbps              install   -                 0.59.2_3               109KB 
libdb             install   -                 5.3.28_8               782KB 
nvi               install   -                 1.81.6_19              248KB 
tzdata            install   -                 2024a_1                232KB 
runit             install   -                 2.1.2_15               402KB 
runit-void        install   -                 20231124_5             31KB 
removed-packages  install   -                 0.1.20241028_1         7777B 
glibc-locales     install   -                 2.39_4                 5530KB 
base-container    install   -                 0.3_3                  683B 
base-minimal      install   -                 0.3_3                  575B 

Size to download:               35MB
Size required on disk:         134MB
Space available on disk:        29GB

Do you want to continue? [Y/n] y

chroot into /mnt
echo "nameserver 1.1.1.1"  > /etc/resolv.conf
echo "x" > /etc/hostname
```


# rootfs method 
https://voidlinux.org/download/#download-installable-base-live-images-and-rootfs-tarballs    
```

tar xvf void-<...>-ROOTFS.tar.xz -C /mnt   
```

# chroot
```

xbps-install bash-completion neofetch mdocml iwd nano wireless-regdb htop
e2fsprogs dosfstools ntfs-3g
  foot-terminfo    sway foot wofi grim slurp jq     seatd dumb_runtime_dir pipewire nnn slurp    wl-clipboard wlsunset
zathura zathura-pdf-mupdf mpv  mesa-dri opendoas
xbps-install linux-lts

if you dont want dracut install booster or mkinitcpio  initramfs generator
notice linux version
xbps-install eudev linux6.1 dracut


cat /etc/xbps.d/ignore.conf 
ignorepkg=linux-firmware-amd
ignorepkg=linux-firmware-nvidia
ignorepkg=linux-firmware-broadcom
ignorepkg=linux-firmware-network
ignorepkg=linux-firmware-intel
ignorepkg=dracut

cat /etc/xbps.d/noextract.conf 
noextract=/usr/share/locale/*
noextract=!/usr/share/locale/en/*
noextract=!/usr/share/locale/en@quot/*
noextract=!/usr/share/locale/en@boldquot/*
noextract=!/usr/share/locale/en@shaw/*
noextract=!/usr/share/locale/en_US/*


noextract=/usr/share/man/*
noextract=!/usr/share/man/man[1-9]/*
noextract=!/usr/share/man/en*/*




noextract=/usr/libexec/at-spi-bus-launcher
noextract=/usr/libexec/at-spi2-registryd
#noextract=/usr/share/dbus-1/*


nano /etc/dracut.conf
hostonly="yes"


ls /lib/modules/
6.1.94_1

dracut -fv  --kver 6.1.94_1



. /etc/bash/bashrc.d/bash_completion.sh 

ln -sf /usr/share/zoneinfo/Asia/Kathmandu  /etc/localtime

ln -s /etc/sv/seatd /etc/runit/runsvdir/default/
ln -s /etc/sv/dbus /etc/runit/runsvdir/default/
ln -s /etc/sv/iwd  /etc/runit/runsvdir/default/


export TERM=linux

nano /etc/default/libc-locales 
 uncomment needed locales  
xbps-reconfigure -f glibc-locales 


passwd 

cat /etc/fstab
/dev/sdax /home ext4 defaults 0 1 

/etc/iwd/main.conf
[General]
UseDefaultInterface=true

mkdir -p /etc/pipewire/pipewire.conf.d
ln -s /usr/share/examples/wireplumber/10-wireplumber.conf /etc/pipewire/pipewire.conf.d/
ln -s /usr/share/examples/pipewire/20-pipewire-pulse.conf /etc/pipewire/pipewire.conf.d/

xbps-reconfigure -fa

copy ath10k,i915 firmware from 
https://git.kernel.org/pub/scm/linux/kernel/git/firmware/linux-firmware.git/tree/i915
https://git.kernel.org/pub/scm/linux/kernel/git/firmware/linux-firmware.git/log/?qt=grep&q=icl
last update 2019-09-23 josh boyer, anusha srivasta
https://git.kernel.org/pub/scm/linux/kernel/git/firmware/linux-firmware.git/tree/ath10k/QCA9377/hw1.0
https://git.kernel.org/pub/scm/linux/kernel/git/firmware/linux-firmware.git/log/?qt=grep&q=qca9377
last update 2020-10-23 christian hewitt , kalle vallo
to /lib/firmware/ 

```

  
disable logs  
```
sudo touch /etc/vlogger  
sudo chmod +x  /etc/vlogger  
  

 cat  /etc/runit/core-services/08-sysctl.sh 
         sysctl -p "$i"  >> /dev/null
```
silent booot 
```
loglevel=0 console=tty2 udev.log_level=0 vt.global_cursor_default==0
intel_iommu=igfx_off  nowatchdog 

sudo xbps-install gummiboot
sudo gummiboot install
sudo nano /boot/loader/void-options.conf
sudo ln -s /usr/share/fontconfig/conf.avail/70-no-bitmaps.conf /etc/fonts/conf.d/
sudo xbps-reconfigure -f fontconfig

```

