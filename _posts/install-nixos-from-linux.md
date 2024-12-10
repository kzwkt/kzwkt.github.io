
# normal install from iso
https://nixos.org/manual/nixos/stable/index.html#sec-installation
https://nixos.wiki/wiki/Installing_from_Linux
https://nixos.org/manual/nixos/stable/#sec-installing-from-other-distro


# get nix 
sudo  mkdir /nix
sudo  chown k /nix
bash <(curl -L https://nixos.org/nix/install) 



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


