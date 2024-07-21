https://pkgbuild.com/~morganamilo/pacman-static/x86_64/bin/   
https://pkgs.org/download/pacman-static  

wget https://pkgbuild.com/~morganamilo/pacman-static/x86_64/bin/pacman-static  

mirrorlist choose one  
https://raw.githubusercontent.com/archlinux/svntogit-packages/packages/pacman-mirrorlist/trunk/mirrorlist  

cat pacman.conf
```
[options]
HoldPkg = pacman glibc
Architecture = auto
CheckSpace
CleanMethod = KeepInstalled


[core]
SigLevel = Required DatabaseOptional
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/core/os/$arch

[extra]
SigLevel = Required DatabaseOptional
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/extra/os/$arch

[community]
SigLevel = Required DatabaseOptional
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/community/os/$arch
```

```
sudo mkdir /mnt/var/lib/pacman/ -p
```
```
sudo ./pacman-static -Syu --config ./pacman.conf  --root /mnt
```


cat artix.conf   
```
[options]
HoldPkg = pacman glibc
Architecture = auto
CheckSpace
CleanMethod = KeepInstalled


[system]
SigLevel = Required DatabaseOptional
Server = https://mirrors.tuna.tsinghua.edu.cn/artixlinux/system/os/$arch

[world]
SigLevel = Required DatabaseOptional
Server = https://mirrors.tuna.tsinghua.edu.cn/artixlinux/world/os/$arch

[galaxy]
SigLevel = Required DatabaseOptional
Server = https://mirrors.tuna.tsinghua.edu.cn/artixlinux/galaxy/os/$arch
```

sudo ./pacman-static -Syu --config ./artix.conf  --root /mnt  base


