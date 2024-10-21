winpe boot
https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/winpe-install-on-a-hard-drive--flat-boot-or-non-ram?view=windows-11

download winpe
https://www.osdcloud.com/sandbox/winpe-downloads

extract sources
7zz x WinPE_Win11_22H2_WinRE_KB5026372.iso  sources/boot.wim

no windows/dism
sudo apt install wimtools


sudo mkfs.ntfs /dev/sda5 -Q

wimlib-imagex info Downloads/sources/boot.wim 
WIM Information:
----------------
Path:           Downloads/sources/boot.wim
GUID:           0x33ab2332b84c9243af5a1ed3f6351e00
Version:        68864
Image Count:    1
Compression:    LZX
Chunk Size:     32768 bytes
Part Number:    1/1
Boot Index:     1
Size:           714629785 bytes
Attributes:     Relative path junction

Available Images:
-----------------
Index:                  1
Name:                   Microsoft Windows PE (x64)
Description:            Microsoft Windows Recover Environment (amd64)
Directory Count:        6678
File Count:             24969
Total Bytes:            3627727209
Hard Link Bytes:        1809449085
Creation Time:          Sat May 07 05:53:32 2022 UTC
Last Modification Time: Thu May 18 05:40:41 2023 UTC
Architecture:           x86_64
Product Name:           Microsoft® Windows® Operating System
Edition ID:             WindowsPE
Installation Type:      WindowsPE
Product Type:           WinNT
Languages:              en-US 
Default Language:       en-US
System Root:            WINDOWS
Major Version:          10
Minor Version:          0
Build:                  22621
Service Pack Build:     1702
Service Pack Level:     0
WIMBoot compatible:     no



wimapply  Downloads/sources/boot.wim 1 /mnt
[WARNING] Ignoring FILE_ATTRIBUTE_READONLY of 43 files
[WARNING] Ignoring FILE_ATTRIBUTE_HIDDEN of 82 files
[WARNING] Ignoring FILE_ATTRIBUTE_SYSTEM of 94 files
[WARNING] Ignoring FILE_ATTRIBUTE_COMPRESSED of 73 files
[WARNING] Ignoring FILE_ATTRIBUTE_NOT_CONTENT_INDEXED of 61 files
[WARNING] Ignoring Windows NT security descriptors of 23587 files
[WARNING] Ignoring DOS names of 16803 files

BCDboot P:\Windows /s P: /f ALL


Windows\System32\winpeshl.ini loads recovery env




https://explorerplusplus.com/





