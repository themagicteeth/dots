#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return
PS1='[\u@\h \W]\$ '

(wal -r &)

[[ -s "/etc/grc.zsh" ]] && source /etc/grc.zsh

PATH="${PATH}:${HOME}/.local/bin"

LS_COLORS=$(ls_colors_generator)
run_ls() { ls-i --color=auto -w $(tput cols) "$@" }
run_dir() { dir-i --color=auto -w $(tput cols) "$@" }
run_vdir() { vdir-i --color=auto -w $(tput cols) "$@" }
export LS_COLORS

