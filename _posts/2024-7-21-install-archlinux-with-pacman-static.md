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
SigLevel = Never DatabaseOptional
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/core/os/$arch

[extra]
SigLevel = Never DatabaseOptional
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/extra/os/$arch

[community]
SigLevel = Never DatabaseOptional
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/community/os/$arch
```

```
sudo mkdir /mnt/var/lib/pacman/ -p
```
```
sudo ./pacman-static -Syu --config ./pacman.conf  --root /mnt
```

https://wiki.artixlinux.org/Main/Mirrors  
https://gitea.artixlinux.org/packages/artix-mirrorlist/raw/branch/master/mirrorlist  

cat artix.conf   
```
[options]
HoldPkg = pacman glibc
Architecture = auto
CheckSpace
CleanMethod = KeepInstalled


[system]
SigLevel = Never DatabaseOptional
Server = https://mirrors.tuna.tsinghua.edu.cn/artixlinux/system/os/$arch

[world]
SigLevel = Never DatabaseOptional
Server = https://mirrors.tuna.tsinghua.edu.cn/artixlinux/world/os/$arch

[galaxy]
SigLevel = Never DatabaseOptional
Server = https://mirrors.tuna.tsinghua.edu.cn/artixlinux/galaxy/os/$arch
```

sudo ./pacman-static -Syu --config ./artix.conf  --root /mnt  base


