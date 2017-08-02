if [[ "$TERM" != dumb ]] && (( $+commands[grc] )) ; then
  # Prevent grc aliases from overriding zsh completions.
  setopt COMPLETE_ALIASES

  # Supported commands
  cmds=(
    blkid \
    cc \
    configure \
    cvs \
    df \
    diff \
    dig \
    du \
    env \
    findmnt \
    fdisk \
    free \
    gcc \
    gmake \
    id \
    ifconfig \
    iostat \
    ip \
    ipaddr \
    iproute \
    iptables \
    irlog \
    journalctl \
    last \
    ldap \
    log \
    lspci \
    lsblk \
    lsmod \
    lsof \
    make \
    mount \
    mtr \
    netstat \
    nmap \
    ping \
    ping6 \
    ps \
    ss \
    showmount \
    stat \
    systctl \
    systemctl \
    tcpdump \
    traceroute \
    traceroute6 \
    uptime \
    vmstat \
    wdiff \
  );

  # Set alias for available commands.
  for cmd in $cmds ; do
    if (( $+commands[$cmd] )) ; then
      alias $cmd="grc --colour=auto $cmd"
    fi
  done

  # Clean up variables
  unset cmds cmd
fi
