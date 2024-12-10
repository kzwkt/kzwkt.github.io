
# normal install from iso

https://nixos.org/manual/nixos/stable/index.html#sec-installation

https://nixos.wiki/wiki/Installing_from_Linux

https://nixos.org/manual/nixos/stable/#sec-installing-from-other-distro


# get nix 
```
sudo  mkdir /nix
sudo  chown k /nix
bash <(curl -L https://nixos.org/nix/install) 
```


nixos.org/manual/nix/stable/installation/installing-binary.html#multi-user-installation

https://releases.nixos.org/?prefix=nix/


https://nix-community.github.io/nix-installers/


  . /home/k/.nix-profile/etc/profile.d/nix.sh


nix-channel --list
nixpkgs https://nixos.org/channels/nixpkgs-unstable

https://channels.nixos.org/

nix-channel --add https://nixos.org/channels/nixos-<version> nixpkgs
nix-channel --add https://channels.nixos.org/nixos-24.11 nixos

nix-channel --update

nix-channel --remove nixpkgs


 nix-env -f '<nixos>' -iA nixos-install-tools


 make fs and mount target root to /mnt

  sudo `which nixos-generate-config` --root /mnt

ls /mnt/etc/nixos
configuration.nix  hardware-configuration.nix



https://nixos.org/manual/nixos/stable/options#opt-boot.loader.systemd-boot.enable


sudo groupadd -g 30000 nixbld

sudo useradd -u 30000 -g nixbld -G nixbld nixbld

cant run install reintall nix as root 

# bash <(curl -L https://nixos.org/nix/install) --daemon

nixos-install --root /mnt



  

