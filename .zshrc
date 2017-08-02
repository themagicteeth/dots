#-----------------------------
# Source some stuff
#-----------------------------
if [[ -f /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh ]]; then
  . /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
fi

(wal -r &)

source /usr/bin/virtualenvwrapper.sh

[[ -s "/etc/grc.zsh" ]] && source /etc/grc.zsh

#------------------------------
# Even better ls
#------------------------------
LS_COLORS=$(ls_colors_generator)
run_ls() { ls-i --color=auto -w $(tput cols) "$@" }
run_dir() { dir-i --color=auto -w $(tput cols) "$@" }
run_vdir() { vdir-i --color=auto -w $(tput cols) "$@" }

#------------------------------
# History stuff
#------------------------------
HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=1000

#------------------------------
# Variables
#------------------------------
export BROWSER="firefox-nightly"
export EDITOR="nvim"
WORKON_HOME=~/.virtualenv

#-----------------------------
# Dircolors
#-----------------------------
export LS_COLORS

#------------------------------
# Keybindings
#------------------------------
bindkey -e

#------------------------------
# Comp stuff
#------------------------------
autoload -Uz compinit
compinit
zstyle :compinstall filename '/home/pleb/.zshrc'

#------------------------------
# Prompt
#------------------------------
autoload -U colors zsh/terminfo
colors

autoload -Uz vcs_info
zstyle ':vcs_info:*' enable git hg
zstyle ':vcs_info:*' check-for-changes true

setprompt() {
  setopt prompt_subst

  if [[ -n "$SSH_CLIENT"  ||  -n "$SSH2_CLIENT" ]]; then 
    p_host='%F{yellow}%M%f'
  else
    p_host='%F{green}%M%f'
  fi

  PS1=${(j::Q)${(Z:Cn:):-$'
    %F{cyan}[%f
    %(!.%F{red}%n%f.%F{green}%n%f)
    %F{cyan}@%f
    ${p_host}
    %F{cyan}][%f
    %F{blue}%~%f
    %F{cyan}]%f
    %(!.%F{red}%#%f.%F{green}%#%f)
    " "
  '}}

  PS2=$'%_>'
  RPROMPT=$'${vcs_info_msg_0_}'
}
setprompt

#------------------------------
# Alias stuff
#------------------------------
alias grep="grep --color=auto"
alias cat="ccat"
alias ls="run_ls"
alias dir="run_dir"
alias vdir="run_vdir"
alias ll="ls -lh"
alias lsa="ls -a"
alias spm="sudo pacman"
alias vim="nvim"
alias tarx="tar -xvf"
alias cd..="cd .."
alias cd.="cd .."
alias ..="cd .."
alias config='/usr/bin/git --git-dir=$HOME/.dots/ --work-tree=$HOME'
