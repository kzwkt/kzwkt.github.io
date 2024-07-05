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

xbps-install bash-completion neofetch mdocml iwd nano  foot-terminfo wireless-regdb  htop sway foot wofi grim slurp jq   zathura zathura-pdf-mupdf  seatd dumb_runtime_dir pipewire nnn slurp mpv  e2fsprogs dosfstools ntfs-3g mesa-dri opendoas wl-clipboard wlsunset 
xbps-install linux-lts
notice linux version
xbps-install eudev linux6.1 dracut

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
sudo touch /etc/vlogger  
sudo chmod +x  /etc/vlogger  
  

 cat  /etc/runit/core-services/08-sysctl.sh 
         sysctl -p "$i"  >> /dev/null




