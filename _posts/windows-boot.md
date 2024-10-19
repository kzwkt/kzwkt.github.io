##  Fallback bootloader
 /EFI/BOOT/BOOTX64.EFI


##  Windows Boot Manager
\EFI\Microsoft\Boot\bootmgfw.efi


## Boot Configuration Data 
\EFI\Microsoft\Boot\BCD


## Windows Boot Manager BCD
```
identifier              {bootmgr}
device                  partition=\Device\HarddiskVolume1
path                    \EFI\Microsoft\Boot\bootmgfw.efi
description             Windows Boot Manager

Bcdedit /set {bootmgr} device partition=s:     // system partition 
bcdedit /store bcd-template /enum all
Bcdedit /set {bootmgr} path \efi\microsoft\boot\bootmgfw.efi
Bcdedit /set {fwbootmgr} displayorder {bootmgr} /addfirst
```
## Windows Boot Loader BCD
```
identifier              {9f25ee7a-e7b7-11db-94b5-f7e662935912}
device                  partition=C:
path                    \Windows\system32\winload.efi
description             Microsoft Windows Server
locale                  en-US
inherit                 {bootloadersettings}
osdevice                partition=C:
systemroot              \Windows

Bcdedit /default {9f25ee7a-e7b7-11db-94b5-f7e662935912}
The device element specifies the partition that contains the boot application.     
The osdevice element specifies the partition that contains the system root. 

Bcdedit /set {default} path \windows\system32\winload.efi
```

## Windows Memory Tester BCD
```

identifier              {memdiag}
device                  partition=\Device\HarddiskVolume1
path                    \boot\memtest.exe
description             Windows Memory Diagnostic

Bcdedit /set {memdiag} path \efi\microsoft\boot\memtest.efi


```


##  Windows Boot Loader 
C:\Windows\System32\winload.efi

##  Windows kernel 
C:\Windows\System32\ntoskrnl.exe

##  Hardware Abstraction Layer (HAL) 
C:\Windows\System32\hal.dll

##  drivers
C:\Windows\System32\drivers\ 

##  Session Manager 
C:\Windows\System32\smss.exe

## Winlogon process 
C:\Windows\System32\winlogon.exe

## shell
C:\Windows\explorer.exe



```

bcdedit.exe /set {globalsettings} graphicsresolution 800x600
bcdedit.exe /set {globalsettings} graphicsresolution 1024x600
bcdedit.exe /set {globalsettings} graphicsresolution 1024x768
bcdedit.exe /set {globalsettings} highestmode on
```


