# Dotfiles
These dotfiles use a technique found [here](https://developer.atlassian.com/blog/2016/02/best-way-to-store-dotfiles-git-bare-repo/).

## Getting started
To get started clone the repositiory (into your home directory):    
`git clone --bare https://github.com/themagicteeth/dots $HOME/.dots`

Define the config alias in the current shell scope:    
`alias config='/usr/bin/git --git-dir=$HOME/.dots --work-tree=$HOME'`

Checkout the repository:    
`config checkout`
 
If there are errors it is because there are already files which need to be overwritte.
Best practice is to back them up:    
`mkdir -p config-backup && \
config checkout 2>&1 | egrep "\s+\." | awk {'print $1'} | \
xargs -l{} mv {} .config-backup/{}`

Once backed up rerun the checkout:    
`config checkout`

Set the flag showUntrackedFiles to no:    
`config config --local status.showUntrackedFiles no`

You may also use this script to do this automatically:    
`curl -Lks https://raw.githubusercontent.com/themagicteeth/dots/master/dots-install | /bin/bash`

## Papirus icons
Just run the following to install the icons globally:    
`wget -qO- https://raw.githubusercontent.com/PapirusDevelopmentTeam/papirus-icon-theme/master/install-papirus-root.sh | sh`
    
There is also a LibreOffice icon set:   
`wget -qO- https://raw.githubusercontent.com/PapirusDevelopmentTeam/papirus-libreoffice-theme/master/install-papirus-root.sh | sh`

## i3    
i3 will need to be installed (install all packages):    
`pacman -S i3`

## Rofi
Rofi is used to launch applications, install it:
`pacman -S rofi`

## Dunst
Dunst needs to be installed for notifications:    
`pacman -S dunst`

## Compton
Compton will need to be installed for compositing:    
`pacman -S compton`

## ccat
Coming soon   

## grc
Grc must be installed in order to get the colored terminal output:    
`pacman -S grc`

## Neovim
Neovim needs to be installed:   
`pacman -S neovim python2-neovim python-neovim xclip`

Also for the Python autocomplete to work:   
`pacman -S python-jedi`

## Polybar
Coming soon   

## Even-better-ls
Install using the script found on the gihub:    
`sh -c "$(curl -fsSL https://raw.githubusercontent.com/illinoisjackson/even-better-ls/master/install.sh)"`

Also needs patched fonts to work properly:    
`pacman -S awesome-terminal-fonts`

## Termite
I use termite terminal, install it:   
`pacman -S termite`

## Pywal
Before Pywal can be installed pip must be installed:    
`pacman -S python-pip`

In addition it needs a few other dependencies:
`pacman -S nitrogen feh`

Pywal must be installed with pip and the proper directories must be made:   
`mkdir -p ~/Pictures/Wallpapers &&  pip install pywal`
