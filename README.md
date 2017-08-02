# Dotfiles
These dotfiles use a technique found [here](https://developer.atlassian.com/blog/2016/02/best-way-to-store-dotfiles-git-bare-repo/).

It is best practice to backup any pre-existing config files:
`mkdir -p .config-backup`

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

## ccat

## grc


