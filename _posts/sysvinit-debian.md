https://wiki.debian.org/Init
http://www.yolinux.com/TUTORIALS/LinuxTutorialInitProcess.html


chroot mode / init=/bin/sh 
apt --download-only install sysvinit-core libpam-elogind

libelogind0 , libsystemd0 will pull systemd/elogind when necessary so you can swap one for other depending on need

sysvinit-core has init in /sbin/init 
/usr/sbin/init is symlinked to /lib/systemd/systemd by systemd-sysv package
also provides /usr/sbin/halt,init,poweroff,reboot,runlevel,shutdown,telinit
dracut has /init as systemd


init-system-helpers(essential)  
/usr/bin/deb-systemd-helper,deb-systemd-invoke
/usr/sbin/invoke-rc.d,service,update-rc.d
sudo apt install initscripts


sysvinit-core
/usr/sbin/halt,init,poweroff,reboot,runlevel,shutdown,telinit
/usr/share/sysvinit/inittab
	
sysvinit-utils(essential) 
/usr/bin/pidof
/usr/lib/init/init-d-script
/usr/lib/init/vars.sh
/usr/lib/lsb/init-functions
/usr/lib/lsb/init-functions.d/00-verbose
/usr/sbin/fstab-decode
/usr/sbin/killall5

reinstall udev without udev needs manually loading driver in /etc/modules , find /proc/modules 
depmod -a 
generates /lib/modules/kernel-version/modules.dep



https://packages.debian.org/stable/all/orphan-sysvinit-scripts/filelist



/etc/inittab loads



runit
sudo apt install runit-systemd  runit runit-run elogind libpam-elogind orphan-sysvinit-scripts systemctl procps


