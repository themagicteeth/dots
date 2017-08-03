#!/bin/zsh

function _calc() {
  bc -q <<<"$1"
}

local __block_size=20
while getopts "p" __opt; do
  case "$__opt" in
    (p)
      __block_size="${OPTARG}"
      exit 0;;
  esac
done

shift $(_calc "${OPTIND}-1")

read __screen_x __screen_y <<<$(xrandr -q | awk '
$1 == "Screen" {
  for(i = 1; i <= NF && $i != "current"; i++)
    ;
  if($i != "current")
    exit 1;
  print $(i+1), $(i+3);
exit;
}' | tr -d ,)

local __reduced_x=$(_calc "${__screen_x}/${__block_size}")
local __reduced_y=$(_calc "${__screen_y}/${__block_size}")

i3lock $* -i \
<(import -screen -window root -silent png:- | \
  convert png:- \
          -scale '!'"${__reduced_x}x${__reduced_y}" \
          -scale '!'"${__screen_x}x${__screen_y}" \
          png:-)
