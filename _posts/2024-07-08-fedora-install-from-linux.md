https://mirrormanager.fedoraproject.org/  

https://mirrors.tuna.tsinghua.edu.cn/fedora/releases/41/  

https://mirrors.tuna.tsinghua.edu.cn/fedora/releases/41/Container/x86_64/images/Fedora-Container-Base-Generic-Minimal-41-1.4.x86_64.oci.tar.xz


tar xf Fedora-Container-Base-Generic-Minimal-41-1.4.x86_64.oci.tar.xz
```
 tar tvf Fedora-Container-Base-Generic-Minimal-41-1.4.x86_64.oci.tar.xz
drwxr-xr-x 0/0               0 2024-10-24 20:31 blobs/
drwxr-xr-x 0/0               0 2024-10-24 20:31 blobs/sha256/
-rw-r--r-- 0/0             504 2024-10-24 20:31 blobs/sha256/28e20d822db81517f4fbb67292bf23e1b17131d8b51605c262a02b9b898b24a4
-rw-r--r-- 0/0        50701616 2024-10-24 20:31 blobs/sha256/32b07b9a22d03d120489b279e0d0764e2945a00b566e1de536fb232e718c4dc4
-rw-r--r-- 0/0             858 2024-10-24 20:31 blobs/sha256/856c6718e99185c1e9d7d1ff9eac557283e0e49ecbfe362adfc5efa958550368
-rw-r--r-- 0/0             258 2024-10-24 20:31 index.json
-rw-r--r-- 0/0              30 2024-10-24 20:31 oci-layout
```
sudo tar xvpf blobs/sha256/32b07b9a22d03d120489b279e0d0764e2945a00b566e1de536fb232e718c4dc4 -C /mnt/  

# echo nameserver 1.1.1.1  >  /mnt/etc/resolv.conf  
$ echo nameserver 1.1.1.1  | sudo tee /mnt/etc/resolv.conf  

sudo bash chroot.sh  

dnf5 update  
```
Transaction Summary:
 Installing:        2 packages
 Upgrading:        42 packages
 Replacing:        42 packages

Total size of inbound packages is 17 MiB. Need to download 17 MiB.
After this operation 3 MiB will be used (install 52 MiB, remove 50 MiB).
```
dnf5 leaves
- dnf5-0:5.1.17-1.fc40.x86_64
- libreport-filesystem-0:2.17.15-1.fc40.noarch
```
dnf5 install nano
Package                                                                            Arch              Version                                                                             Repository                                           Size
Installing:                                                                                                                                                                                                                                       
 nano                                                                              x86_64            7.2-7.fc40                                                                          updates                                           2.9 MiB
Installing dependencies:                                                                                                                                                                                                                          
 file-libs           
```
nano /etc/dnf/dnf.conf  
install_weak_deps=False
```
dnf5 install bash-completion
Updating and loading repositories:
Repositories loaded.
Package                                                                            Arch              Version                                                                             Repository                                           Size
Installing:                                                                                                                                                                                                                                       
 bash-completion                                                                   noarch            1:2.11-14.fc40                                                                      fedora                                            1.0 MiB
Installing dependencies:                                                                                                                                                                                                                          
 libpkgconf                                                                        x86_64            2.1.1-1.fc40                                                                        updates                                          74.2 KiB
 pkgconf                                                                           x86_64            2.1.1-1.fc40                                                                        updates                                          82.8 KiB
 pkgconf-m4                                                                        noarch            2.1.1-1.fc40                                                                        updates                                          13.9 KiB
 pkgconf-pkg-config                                                                x86_64            2.1.1-1.fc40                                                                        updates                                         989.0   B
```

clean locale
 sudo rm /usr/share/locale/!(en*|*alias)

cat /etc/rpm/macros.image-language-conf 
%_install_langs en_US



glibc-langpack-en

 . /etc/profile.d/bash_completion.sh 

   ```
 dnf5      
install                         (Install software)                                                            module                          (Manage modules)
upgrade                         (Upgrade software)                                                            history                         (Manage transaction history)
remove                          (Remove (uninstall) software)                                                 repo                            (Manage repositories)
distro-sync                     (Upgrade or downgrade installed software to the latest available versions)    advisory                        (Manage advisories)
downgrade                       (Downgrade software)                                                          clean                           (Remove or expire cached data)
reinstall                       (Reinstall software)                                                          download                        (Download software to the current directory)
swap                            (Remove software and install another in one transaction)                      makecache                       (Generate the metadata cache)
mark                            (Change the reason of an installed package)                                   versionlock                     (Manage versionlock configuration)
autoremove                      (Remove all unneeded packages originally installed as dependencies.)          system-upgrade                  (Prepare system for upgrade to a new release)
provides                        (Find what package provides the given value)                                  offline-distrosync              (Store a distro-sync transaction to be performed offline)
leaves                          (List groups of installed packages not required by other installed packages)  offline-upgrade                 (Store an upgrade transaction to be performed offline)
repoquery                       (Search for packages matching various criteria)                               offline                         (Manage offline transactions)
search                          (Search for software matching all specified strings)                          check-update                    (Alias for 'check-upgrade')
list                            (Lists packages depending on the packages' relation to the system)            grp                             (Alias for 'group')
info                            (Lists packages depending on the packages' relation to the system)            repoinfo                        (Alias for 'repo info')
check-upgrade                   (Check for available package upgrades)                                        repolist                        (Alias for 'repo list')
check                           (Check for problems in the packagedb)                                         updateinfo                      (Alias for 'advisory')
group                           (Manage comps groups)                                                         upgrade-minimal                 (Alias for 'upgrade --minimal')
environment                     (Manage comps environments)                                                   
```

```
 dnf5 list --installed 
Installed packages
alternatives.x86_64                      1.27-1.fc40                updates
audit-libs.x86_64                        4.0.1-1.fc40               <unknown>
basesystem.noarch                        11-20.fc40                 <unknown>
bash.x86_64                              5.2.26-3.fc40              <unknown>
bash-completion.noarch                   1:2.11-14.fc40             fedora
bzip2-libs.x86_64                        1.0.8-18.fc40              <unknown>
ca-certificates.noarch                   2023.2.62_v7.0.401-6.fc40  <unknown>
coreutils.x86_64                         9.4-6.fc40                 <unknown>
coreutils-common.x86_64                  9.4-6.fc40                 <unknown>
crypto-policies.noarch                   20240510-1.gitd287a42.fc40 updates
curl.x86_64                              8.6.0-8.fc40               updates
cyrus-sasl-lib.x86_64                    2.1.28-19.fc40             <unknown>
dnf-data.noarch                          4.21.0-1.fc40              updates
dnf5.x86_64                              5.1.17-1.fc40              updates
fedora-gpg-keys.noarch                   40-2                       updates
fedora-release-common.noarch             40-39                      updates
fedora-release-container.noarch          40-39                      updates
fedora-release-identity-container.noarch 40-39                      updates
fedora-repos.noarch                      40-2                       updates
file-libs.x86_64                         5.45-4.fc40                fedora
filesystem.x86_64                        3.18-8.fc40                <unknown>
findutils.x86_64                         1:4.9.0-9.fc40             updates
fmt.x86_64                               10.2.1-4.fc40              <unknown>
gawk.x86_64                              5.3.0-3.fc40               <unknown>
gdbm-libs.x86_64                         1:1.23-6.fc40              <unknown>
glib2.x86_64                             2.80.3-1.fc40              updates
glibc.x86_64                             2.39-17.fc40               updates
glibc-common.x86_64                      2.39-17.fc40               updates
glibc-minimal-langpack.x86_64            2.39-17.fc40               updates
gmp.x86_64                               1:6.2.1-8.fc40             <unknown>
gnutls.x86_64                            3.8.6-1.fc40               updates
grep.x86_64                              3.11-7.fc40                <unknown>
json-c.x86_64                            0.17-3.fc40                <unknown>
keyutils-libs.x86_64                     1.6.3-3.fc40               <unknown>
krb5-libs.x86_64                         1.21.2-5.fc40              <unknown>
libacl.x86_64                            2.3.2-1.fc40               <unknown>
libarchive.x86_64                        3.7.2-4.fc40               updates
libattr.x86_64                           2.5.2-3.fc40               <unknown>
libblkid.x86_64                          2.40.1-1.fc40              updates
libbrotli.x86_64                         1.1.0-3.fc40               <unknown>
libcap.x86_64                            2.69-8.fc40                updates
libcap-ng.x86_64                         0.8.4-4.fc40               <unknown>
libcom_err.x86_64                        1.47.0-5.fc40              <unknown>
libcurl.x86_64                           8.6.0-8.fc40               updates
libdnf5.x86_64                           5.1.17-1.fc40              updates
libdnf5-cli.x86_64                       5.1.17-1.fc40              updates
libeconf.x86_64                          0.6.2-2.fc40               updates
libevent.x86_64                          2.1.12-12.fc40             <unknown>
libffi.x86_64                            3.4.4-7.fc40               <unknown>
libgcc.x86_64                            14.1.1-7.fc40              updates
libidn2.x86_64                           2.3.7-1.fc40               <unknown>
libmodulemd.x86_64                       2.15.0-12.fc40             updates
libmount.x86_64                          2.40.1-1.fc40              updates
libnghttp2.x86_64                        1.59.0-3.fc40              updates
libpkgconf.x86_64                        2.1.1-1.fc40               updates
libpsl.x86_64                            0.21.5-3.fc40              <unknown>
librepo.x86_64                           1.18.0-1.fc40              updates
libreport-filesystem.noarch              2.17.15-1.fc40             <unknown>
libselinux.x86_64                        3.6-4.fc40                 <unknown>
libsepol.x86_64                          3.6-3.fc40                 <unknown>
libsmartcols.x86_64                      2.40.1-1.fc40              updates
libsolv.x86_64                           0.7.29-1.fc40              updates
libssh.x86_64                            0.10.6-5.fc40              <unknown>
libssh-config.noarch                     0.10.6-5.fc40              <unknown>
libstdc++.x86_64                         14.1.1-7.fc40              updates
libtasn1.x86_64                          4.19.0-6.fc40              <unknown>
libtool-ltdl.x86_64                      2.4.7-10.fc40              <unknown>
libunistring.x86_64                      1.1-7.fc40                 <unknown>
libuuid.x86_64                           2.40.1-1.fc40              updates
libverto.x86_64                          0.3.2-8.fc40               <unknown>
libxcrypt.x86_64                         4.4.36-5.fc40              <unknown>
libxml2.x86_64                           2.12.8-1.fc40              updates
libyaml.x86_64                           0.2.5-14.fc40              <unknown>
libzstd.x86_64                           1.5.6-1.fc40               updates
lua-libs.x86_64                          5.4.6-5.fc40               <unknown>
lz4-libs.x86_64                          1.9.4-6.fc40               <unknown>
mpfr.x86_64                              4.2.1-4.fc40               updates
nano.x86_64                              7.2-7.fc40                 updates
ncurses-base.noarch                      6.4-12.20240127.fc40       <unknown>
ncurses-libs.x86_64                      6.4-12.20240127.fc40       <unknown>
nettle.x86_64                            3.9.1-6.fc40               <unknown>
openldap.x86_64                          2.6.7-1.fc40               <unknown>
openssl-libs.x86_64                      1:3.2.1-2.fc40             <unknown>
p11-kit.x86_64                           0.25.5-1.fc40              updates
p11-kit-trust.x86_64                     0.25.5-1.fc40              updates
pam-libs.x86_64                          1.6.1-3.fc40               updates
pcre2.x86_64                             10.44-1.fc40               updates
pcre2-syntax.noarch                      10.44-1.fc40               updates
pkgconf.x86_64                           2.1.1-1.fc40               updates
pkgconf-m4.noarch                        2.1.1-1.fc40               updates
pkgconf-pkg-config.x86_64                2.1.1-1.fc40               updates
popt.x86_64                              1.19-6.fc40                <unknown>
publicsuffix-list-dafsa.noarch           20240107-3.fc40            <unknown>
readline.x86_64                          8.2-8.fc40                 <unknown>
rpm.x86_64                               4.19.1.1-1.fc40            <unknown>
rpm-libs.x86_64                          4.19.1.1-1.fc40            <unknown>
rpm-sequoia.x86_64                       1.6.0-3.fc40               updates
sdbus-cpp.x86_64                         1.4.0-2.fc40               fedora
sed.x86_64                               4.9-1.fc40                 <unknown>
setup.noarch                             2.14.5-2.fc40              <unknown>
sqlite-libs.x86_64                       3.45.1-2.fc40              <unknown>
systemd-libs.x86_64                      255.8-1.fc40               updates
xz-libs.x86_64                           1:5.4.6-3.fc40             <unknown>
zchunk-libs.x86_64                       1.4.0-2.fc40               <unknown>
zlib-ng-compat.x86_64                    2.1.7-1.fc40               updates
```

```
 dnf5 group list 
Updating and loading repositories:
Repositories loaded.
ID                          Name                                        Installed
3d-printing                 3D Printing                                        no
admin-tools                 Administration Tools                               no
audio                       Audio Production                                   no
authoring-and-publishing    Authoring and Publishing                           no
budgie-desktop              Budgie                                             no
budgie-desktop-apps         Budgie Desktop Applications                        no
c-development               C Development Tools and Libraries                  no
cloud-infrastructure        Cloud Infrastructure                               no
cloud-management            Cloud Management Tools                             no
compiz                      Compiz                                             no
container-management        Container Management                               no
d-development               D Development Tools and Libraries                  no
design-suite                Design Suite                                       no
desktop-accessibility       Desktop accessibility                              no
development-tools           Development Tools                                  no
domain-client               Domain Membership                                  no
editors                     Editors                                            no
education                   Educational Software                               no
electronic-lab              Electronic Lab                                     no
engineering-and-scientific  Engineering and Scientific                         no
freeipa-server              FreeIPA Server                                     no
games                       Games and Entertainment                            no
headless-management         Headless Management                                no
kf6-software-development    KDE Frameworks 6 Software Development              no
libreoffice                 LibreOffice                                        no
mate-applications           MATE Applications                                  no
milkymist                   Milkymist                                          no
network-server              Network Servers                                    no
neuron-modelling-simulators Neuron Modelling Simulators                        no
office                      Office/Productivity                                no
python-classroom            Python Classroom                                   no
python-science              Python Science                                     no
robotics-suite              Robotics                                           no
rpm-development-tools       RPM Development Tools                              no
security-lab                Security Lab                                       no
sound-and-video             Sound and Video                                    no
swaywm-extended             Sway Window Manager (supplemental packages)        no
system-tools                System Tools                                       no
text-internet               Text-based Internet                                no
vlc                         VideoLAN Client                                    no
window-managers             Window Managers                                    no
```

```
dnf5 environment list
Updating and loading repositories:
Repositories loaded.
ID                                Name                                 Installed
basic-desktop-environment         Basic Desktop                               no
budgie-desktop-environment        Budgie Desktop                              no
cinnamon-desktop-environment      Cinnamon Desktop                            no
cloud-server-environment          Fedora Cloud Server                         no
custom-environment                Fedora Custom Operating System              no
deepin-desktop-environment        Deepin Desktop                              no
developer-workstation-environment Development and Creative Workstation        no
i3-desktop-environment            i3 desktop                                  no
infrastructure-server-environment Infrastructure Server                       no
kde-desktop-environment           KDE Plasma Workspaces                       no
lxde-desktop-environment          LXDE Desktop                                no
lxqt-desktop-environment          LXQt Desktop                                no
mate-desktop-environment          MATE Desktop                                no
minimal-environment               Minimal Install                             no
phosh-desktop-environment         Phosh Desktop                               no
server-product-environment        Fedora Server Edition                       no
sugar-desktop-environment         Sugar Desktop Environment                   no
sway-desktop-environment          Sway Desktop                                no
web-server-environment            Web Server                                  no
workstation-product-environment   Fedora Workstation                          no
xfce-desktop-environment          Xfce Desktop                                no
```

```
dnf --config /builddir/result/image/build/image-root/kiwi_dnf4.conf -y --installroot /builddir/result/image/build/image-root --releasever=40 --setopt=install_weak_deps=False --exclude=*-firmware --exclude=dosfstools --exclude=e2fsprogs --exclude=fuse-libs --exclude=geolite2-city --exclude=geolite2-country --exclude=glibc-langpack-en --exclude=gnupg2-smime --exclude=grubby --exclude=kernel --exclude=langpacks-en --exclude=langpacks-en_GB --exclude=libss --exclude=pinentry --exclude=pinentry --exclude=shared-mime-info --exclude=sssd-client --exclude=trousers --exclude=tzdata --exclude=util-linux --exclude=xkeyboard-config install basesystem bash coreutils fedora-release-container filesystem glibc-minimal-langpack microdnf rpm 
```

```

nano /etc/dnf/dnf.conf
install_weak_deps=False
clean_requirements_on_remove=True
exclude=dhcp-client,dracut-config-rescue,man-db,openssh-server,sudo,firewalld
override_install_langs=en_US.utf8



kernel-install list
VERSION                 HAS KERNEL PATH                                    
6.10.11-200.fc40.x86_64          ✓ /usr/lib/modules/6.10.11-200.fc40.x86_64

mount /dev/nvme0n1p1 /boot/efi



boot loader
kernel-install add 6.10.11-200.fc40.x86_64  /boot/vmlinuz-6.10.11-200.fc40.x86_64.img  /boot/initramfs-6.10.11-200.fc40.x86_64.img 

sudo dnf5 install NetworkManager-wifi mesa-dri-drivers kde-settings-pulseaudio  xorg-x11-server-Xorg xorg-x11-drv-libinput plasma-nm  selinux-policy wireless-regdb 
dnf5 swap fedora-release-identity-container fedora-release-identity-kde
dnf5 install kernel kernel-core kernel-modules
dnf5 install plasma-desktop-wayland kwin-wayland sddm dolphin konsole PackageKit-command-not-found colord-kde kde-gtk-config kdialog  bash-completion bluedevil kdeplasma-addons plasma-discover plasma-discover-packagekit
dnf5 install fastfetch okular gwenview pipewire plasma-pa kinfocenter pciutils usbutils kscreen  zram-generator  systemd-oomd-defaults  fwupd fwupd-efi fwupd-plugin-uefi-capsule-data  polkit-kde  firewall-config kate
dnf5 install ark kcalc kcharselect spectacle kcm_systemd nss sddm-kcm sddm-wayland-plasma lifeograph htop nnn sddm-breeze plasma-systemmonitor upower powerdevil  dosfstools power-profiles-daemon  libva-utils
dnf5 install intel-media-driver zram-generator-defaults rpmfusion-free-appstream-data rpmfusion-nonfree-appstream-data

sudo dnf5 install @multimedia @sound-and-video ffmpeg-libs gstreamer1-plugins-{bad-*,good-*,base} gstreamer1-plugin-openh264 gstreamer1-libav --allowerasing
 dnf5 install ffmpeg-libs  --allowerasing
dnf5 install @sound-and-video 
dnf install libselinux-utils selinux-policy selinux-policy-targeted policycoreutils audit sssd-kcm 



dnf5 install @kde-desktop
dnf5 install @kde-desktop-environment
sudo dnf5 install group install Core


. /usr/share/bash-completion/bash_completion

systemctl set-default graphical.target


touch /.autorelabel
or fixfiles -F onboot
disalbe selinux enforcig on /etc/selinux/config or kernel parameter enforcing=0 before relabel
```

hidden groups

```

sudo dnf group list --hidden 
Updating and loading repositories:
Repositories loaded.
ID                           Name                                        Installed
3d-printing                  3D Printing                                        no
admin-tools                  Administration Tools                               no
anaconda-tools               Anaconda tools                                     no
audio                        Audio Production                                   no
authoring-and-publishing     Authoring and Publishing                           no
base-graphical               base-graphical                                     no
base-x                       base-x                                             no
basic-desktop                Basic Desktop                                      no
budgie-desktop               Budgie                                             no
budgie-desktop-apps          Budgie Desktop Applications                        no
buildsys-build               Buildsystem building group                         no
c-development                C Development Tools and Libraries                  no
cinnamon-desktop             Cinnamon                                           no
cloud-bootloader-tools       Bootloader tools for Cloud images                  no
cloud-infrastructure         Cloud Infrastructure                               no
cloud-management             Cloud Management Tools                             no
cloud-server                 Cloud Server Tools                                 no
compiz                       Compiz                                             no
container-management         Container Management                               no
core                         Core                                              yes
cosmic-desktop               COSMIC Desktop                                     no
cosmic-desktop-apps          COSMIC Desktop Supplementary Applications          no
critical-path-anaconda       Critical Path (anaconda)                           no
critical-path-apps           Critical Path (Applications)                       no
critical-path-base           Critical Path (Base)                               no
critical-path-build          Critical Path (Build)                              no
critical-path-compose        Critical Path (Compose)                            no
critical-path-deepin-desktop Critical Path (Deepin desktop)                     no
critical-path-gnome          Critical Path (GNOME)                              no
critical-path-kde            Critical Path (KDE)                                no
critical-path-lxde           Critical Path (LXDE)                               no
critical-path-lxqt           Critical Path (LXQt)                               no
critical-path-server         Critical Path (Server)                             no
critical-path-standard       Critical Path (standard)                           no
critical-path-xfce           Critical Path (Xfce)                               no
d-development                D Development Tools and Libraries                  no
deepin-desktop               Deepin Desktop Environment                         no
deepin-desktop-apps          Deepin Desktop Applications                        no
deepin-desktop-media         Media packages for Deepin Desktop                  no
deepin-desktop-office        Deepin Desktop Office                              no
design-suite                 Design Suite                                       no
desktop-accessibility        Desktop accessibility                              no
development-libs             Development Libraries                              no
development-tools            Development Tools                                  no
dial-up                      Dial-up Networking Support                         no
directory-server             Directory Server                                   no
dns-server                   DNS Name Server                                    no
dogtag                       Dogtag Certificate System                          no
domain-client                Domain Membership                                  no
editors                      Editors                                            no
education                    Educational Software                               no
electronic-lab               Electronic Lab                                     no
engineering-and-scientific   Engineering and Scientific                         no
enlightenment-desktop        Enlightenment                                      no
fedora-packager              Fedora Packager                                    no
firefox                      Firefox Web Browser                                no
font-design                  Font design and packaging                          no
fonts                        Fonts                                              no
freeipa-server               FreeIPA Server                                     no
ftp-server                   FTP Server                                         no
games                        Games and Entertainment                            no
gnome-desktop                GNOME                                              no
gnome-games                  Extra games for the GNOME Desktop                  no
gnome-software-development   GNOME Software Development                         no
graphical-internet           Graphical Internet                                 no
graphics                     Graphics                                           no
guest-agents                 Guest Agents                                       no
guest-desktop-agents         Guest Desktop Agents                               no
ha                           High Availability                                  no
haproxy                      HAProxy                                            no
hardware-support             Hardware Support                                   no
haskell                      Haskell                                            no
headless-management          Headless Management                                no
i3                           i3 window manager                                  no
i3-extended                  i3 window manager (supplemental packages)          no
input-methods                Input Methods                                      no
java                         Java                                               no
java-development             Java Development                                   no
javaenterprise               Java Application Server                            no
kde-apps                     KDE Applications                                   no
kde-desktop                  KDE                                                no
kde-education                KDE Educational applications                       no
kde-media                    KDE Multimedia support                             no
kde-mobile                   KDE Mobile                                         no
kde-mobile-apps              KDE Mobile Apps                                    no
kde-office                   KDE Office                                         no
kde-pim                      KDE PIM                                            no
kde-software-development     KDE Software Development                           no
kde-spin-initial-setup       KDE Spin Initial Setup                             no
kf6-software-development     KDE Frameworks 6 Software Development              no
legacy-fonts                 Legacy Fonts                                       no
legacy-network-server        Legacy Network Server                              no
libreoffice                  LibreOffice                                        no
libreoffice-development      LibreOffice Development                            no
load-balancer                Load Balancer                                      no
lxde-apps                    Applications for the LXDE Desktop                  no
lxde-desktop                 LXDE                                               no
lxde-media                   Multimedia support for LXDE                        no
lxde-office                  LXDE Office                                        no
lxqt-apps                    Applications for the LXQt Desktop                  no
lxqt-desktop                 LXQt                                               no
lxqt-l10n                    Translations of LXQt                               no
lxqt-media                   Multimedia support for LXQt                        no
lxqt-office                  LXQt Office                                        no
mail-server                  Mail Server                                        no
mate-applications            MATE Applications                                  no
mate-desktop                 MATE                                               no
milkymist                    Milkymist                                          no
mingw32                      MinGW cross-compiler                               no
miraclewm-desktop            Miracle Window Manager Desktop                     no
multimedia                   Multimedia                                         no
mysql                        MariaDB (MySQL) Database                           no
network-server               Network Servers                                    no
networkmanager-submodules    Common NetworkManager Submodules                   no
neuron-modelling-simulators  Neuron Modelling Simulators                        no
news-server                  News Server                                        no
ocaml                        OCaml                                              no
office                       Office/Productivity                                no
perl                         Perl Development                                   no
perl-web                     Perl for Web                                       no
phosh-desktop                A phone/tablet UX environment                      no
php                          PHP                                                no
platform-vmware              VMware Platform Support                            no
printing                     Printing Support                                   no
python-classroom             Python Classroom                                   no
python-science               Python Science                                     no
robotics-suite               Robotics                                           no
rpm-development-tools        RPM Development Tools                              no
ruby                         Ruby                                               no
rubyonrails                  Ruby on Rails                                      no
security-lab                 Security Lab                                       no
server-cfg                   Server Configuration Tools                         no
server-hardware-support      Hardware Support for Server Systems                no
server-product               Fedora Server product core                         no
smb-server                   Windows File Server                                no
sound-and-video              Sound and Video                                    no
sql-server                   PostgreSQL Database                                no
standard                     Standard                                           no
sugar-apps                   Additional Sugar Activities                        no
sugar-desktop                Sugar Desktop Environment                          no
swaywm                       Sway Window Manager                                no
swaywm-extended              Sway Window Manager (supplemental packages)        no
system-tools                 System Tools                                       no
text-internet                Text-based Internet                                no
tomcat                       Tomcat                                             no
vagrant                      Vagrant with libvirt support                       no
virtualization               Virtualization                                     no
virtualization-headless      Headless Virtualization                            no
vlc                          VideoLAN Client                                    no
web-server                   Basic Web Server                                   no
window-managers              Window Managers                                    no
workstation-ostree-support   Fedora Workstation ostree support                  no
workstation-product          Fedora Workstation product core                    no
x-software-development       X Software Development                             no
xfce-apps                    Applications for the Xfce Desktop                  no
xfce-desktop                 Xfce                                               no
xfce-extra-plugins           Extra plugins for the Xfce panel                   no
xfce-media                   Multimedia support for Xfce                        no
xfce-office                  Xfce Office                                        no
xfce-software-development    Xfce Software Development                          no
xmonad                       XMonad                                             no
xmonad-mate                  XMonad for MATE                                    no
```

dnf.conf
```
exclude=dhcp-client,dracut-config-rescue,man-db,openssh-server,sssd-common,plymouth,parted,NetworkManager,firewalld,sssd-kcm
```
sudo dnf group list --hidden --contains-pkgs basesystem


avoid metatadata fetch for non root user 
cat .config/dnf/dnf.conf 
[main]
metadata_timer_sync=0
skip_if_unavailable=True


user_cache_dir=/var/cache/libdnf5



https://github.com/Zer0CoolX/Fedora-KDE-Minimal-Install-Guide   






