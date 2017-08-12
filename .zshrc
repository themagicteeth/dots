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
PATH="${PATH}:${HOME}/.local/bin"

#-----------------------------
# Directories
#-----------------------------
setopt auto_cd
setopt auto_pushd
setopt pushd_ignore_dups
setopt pushd_silent
setopt pushd_to_home

setopt noflowcontrol
setopt nobeep

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
zstyle ':completion:*' list-colors "${(@s.:.)LS_COLORS}"
# Use cache
zstyle ':completion:*' use-cache on
zstyle ':completion:*' cache-path ~/.zsh/cache
# Fuzzy matching for mistyped completions
zstyle ':completion:*' completer _complete _match _approximate
zstyle ':completion:*:match:*' original only
zstyle ':completion:*:approximate:*' max-errors 1 numeric
fpath=(~/.zshfuncs $fpath)
autoload -Uz compinit
compinit
zstyle :compinstall filename '/home/pleb/.zshrc'
setopt nonomatch
setopt completeinword
setopt hash_list_all
setopt rc_quotes

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
alias vim="nvim"
alias tarx="tar -xvf"
alias cd..="cd .."
alias cd.="cd .."
alias ..="cd .."
alias config='/usr/bin/git --git-dir=$HOME/.dots/ --work-tree=$HOME'
alias mkpkg='makepkg -sri'
alias top='htop'
alias s='sudo'
alias ...='../..'
alias ....='../../..'
alias .....='../../../..'

#------------------------------
# Functions 
#------------------------------

# Makes a directory and changes to it.
function mkdcd {
  [[ -n "$1" ]] && mkdir -p "$1" && builtin cd "$1"
}

# Changes to a directory and lists its contents.
function cdls {
  builtin cd "$argv[-1]" && ls "${(@)argv[1,-2]}"
}

# Finds files and executes a command on them.
function find-exec {
  find . -type f -iname "*${1:-}*" -exec "${2:-file}" '{}' \;
}



