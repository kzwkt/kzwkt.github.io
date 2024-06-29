# install chrome os flex from linux without USB

sudo dnf install cgpt pv    

find latest brunch release branch at this time its r125  
https://github.com/sebanc/brunch/tree/r125   
grab https://github.com/sebanc/brunch/blob/r125/scripts/chromeos-install.sh   

get rid of these lines from install_singleboot()   

```
 
7)
			source_start=0
			image="$(dirname $0)/rootc.img"
			size=$(du --apparent-size -B 512 $image | sed 's/\t.*//g')
		;;
  12)
			source_start=0
			if [ -z legacy_boot ]; then image="$(dirname $0)/efi_secure.img"; else image="$(dirname $0)/efi_legacy.img"; fi
			size=$(du --apparent-size -B 512 $image | sed 's/\t.*//g')
		;;

```

for dualboot maybe similarly from install_dualboot() 7) and 12) options , haven't tested    

download chrome os flex image    
https://chromiumdash.appspot.com/serving-builds?deviceCategory=ChromeOS%20Flex    
or direct  link  via web or wget  
wget https://dl.google.com/chromeos-flex/images/latest.bin.zip    

unzip latest.bin.zip or  7z x latest.bin.zip  
Archive:  latest.bin.zip  
  inflating: chromeos_15393.58.0_reven_recovery_stable-channel_mp-v2.bin  

  ````
cgpt show chromeos_15393.58.0_reven_recovery_stable-channel_mp-v2.bin 
       start        size    part  contents
           0           1          PMBR (Boot GUID: DAD88F00-217F-6441-8C48-095ECA622ACE)
           1           1          Pri GPT header
           2          32          Pri GPT table
     5414912     8401033       1  Label: "STATE"
                                  Type: Linux data
                                  UUID: CE56A71F-0B0F-C342-877B-C4FE8720DB12
          69       32768       2  Label: "KERN-A"
                                  Type: ChromeOS kernel
                                  UUID: A6B7EC1F-CE23-B241-B454-6CD2AD3B1823
                                  Attr: priority=15 tries=15 successful=1 
      499712     4915200       3  Label: "ROOT-A"
                                  Type: ChromeOS rootfs
                                  UUID: B9528A64-2C50-C542-BE16-B63C5228E03B
       32837       32768       4  Label: "KERN-B"
                                  Type: ChromeOS kernel
                                  UUID: 679F7BBB-008C-5D49-8362-1404E1876130
                                  Attr: priority=0 tries=0 successful=0 
      495616        4096       5  Label: "ROOT-B"
                                  Type: ChromeOS rootfs
                                  UUID: 23F1763B-9354-D543-9C8B-52697CFB5C08
          65           1       6  Label: "KERN-C"
                                  Type: ChromeOS kernel
                                  UUID: E14D313E-66C2-5845-BE71-574CC04E8F89
                                  Attr: priority=0 tries=0 successful=0 
          66           1       7  Label: "ROOT-C"
                                  Type: ChromeOS rootfs
                                  UUID: 7BD6D4AE-5532-9A4A-8AE7-661625EA7A6E
      331776       32768       8  Label: "OEM"
                                  Type: Linux data
                                  UUID: 5D59ACC2-A889-CB44-AC3F-9E11FEEFB578
          67           1       9  Label: "reserved"
                                  Type: ChromeOS reserved
                                  UUID: 09F4F248-84F7-8644-8322-7A57639A140B
          68           1      10  Label: "reserved"
                                  Type: ChromeOS reserved
                                  UUID: D2FBFA6C-E9E8-8840-9F9B-A0C2D45D0BDE
          64           1      11  Label: "RWFW"
                                  Type: ChromeOS firmware
                                  UUID: 35BA77D5-E3FC-8E4D-97C3-642533D4BB5D
      364544      131072      12  Label: "EFI-SYSTEM"
                                  Type: EFI System Partition
                                  UUID: DAD88F00-217F-6441-8C48-095ECA622ACE
                                  Attr: legacy_boot=1 
    13815960          32          Sec GPT table
    13815992           1          Sec GPT header

```

size 
```
LABEL,	size_MB
"STATE"	 4005.5 = 4GB
"KERN-A"	 16 MB
"ROOT-A"	 2346.1 = 2.35GB
"KERN-B"	 16  MB
"ROOT-B"	 2  MB
"KERN-C"  	 0.0005
"ROOT-C"	 0.0005
"OEM"		 16  MB
"Reserved"	 0.0005
"Reserved"	 0.0005
"RWFW"	 0.0005
"EFI-SYSTEM" 62.5  MB
```


sudo chromeos-install.sh chrome.img /dev/nvme0n1    

# this will erase disk completly  
ROOT-A is copied to partition 3,5 and KERN-B to 2,4 ; KERN-B and KERN-A looks identical  


for postinstall fix we need to mount /dev/nvme0n1p12 and modify efi/boot/grub.cfg to match root=UUID=xxx of the cros partition wtih label root-A    

i did manually there is postinstall script we could adapt https://github.com/imperador/chromefy/blob/master/croissant.sh
sudo bash fixuuid.sh
```
# use your install disk name
DST=/dev/nvme0n1
# grab name of 12th EFI-SYSTEM partition 
EFIPART=`flock "${DST}" sfdisk -lq "${DST}" 2>/dev/null | grep "^""${DST}""[^:]" | awk '{print $1}' | grep [^0-9]12$`
mount "$EFIPART" /mnt   
OLD_UUID=`cat /mnt/efi/boot/grub.cfg | grep -m 1 "PARTUUID=" | awk -v FS="(PARTUUID=)" '{print $2}' | awk '{print $1}'`
# get PARTUUID of ROOT-A which is third partition 
PARTUUID=`flock "${DST}" sfdisk --part-uuid "${DST}" 3`; sed -i "s/$OLD_UUID/$PARTUUID/" /mnt/efi/boot/grub.cfg
sync; umount /mnt 2>/dev/null
echo "EFI: Partition UUID $OLD_UUID changed to $PARTUUID" 
```

