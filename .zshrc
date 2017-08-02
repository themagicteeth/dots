# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=5000
SAVEHIST=1000
bindkey -e
# End of lines configured by zsh-newuser-install
# The following lines were added by compinstall
zstyle :compinstall filename '/home/pleb/.zshrc'

autoload -Uz compinit promptinit
compinit
promptinit
# End of lines added by compinstall

# Autocomplete for aliases
setopt COMPLETE_ALIASES

# Prompt theme
prompt walters

# Pywal
(wal -r &)

# Python virtual environment wrapper
WORKON_HOME=~/.virtualenv
source /usr/bin/virtualenvwrapper.sh

# ZSH Syntax highlighting
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# Color console output
[[ -s "/etc/grc.zsh" ]] && source /etc/grc.zsh

# Color grep
alias grep="grep --color=auto"

# Color cat
alias cat="ccat"

# Even-better-ls
LS_COLORS=$(ls_colors_generator)
run_ls() { ls-i --color=auto -w $(tput cols) "$@" }
run_dir() { dir-i --color=auto -w $(tput cols) "$@" }
run_vdir() { vdir-i --color=auto -w $(tput cols) "$@" }
alias ls="run_ls"
alias dir="run_dir"
alias vdir="run_vdir"

alias lsa="ls -a"
alias vim="nvim"
alias tarx="tar -xvf"
alias cd..="cd .."
alias cd.="cd .."
alias ..="cd .."

alias config='/usr/bin/git --git-dir=$HOME/.dots/ --work-tree=$HOME'
