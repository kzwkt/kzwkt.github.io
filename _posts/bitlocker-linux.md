sudo cryptsetup open --type=bitlk /dev/DEVNAME MAPPERNAME  

sudo cryptsetup open --type=bitlk /dev/sda3 win
 sudo mount /dev/mapper/win  mnt/win/


 https://man.archlinux.org/man/core/cryptsetup/cryptsetup.8.en#BITLK_(WINDOWS_BITLOCKER_COMPATIBLE)_EXTENSION  
 
