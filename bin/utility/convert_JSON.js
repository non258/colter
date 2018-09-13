function convert_JSON (dircolors_setting_json){
  let header = (function () {/*TERM Eterm
TERM ansi
TERM color-xterm
TERM con[0-9]*x[0-9]*
TERM cons25
TERM console
TERM cygwin
TERM dtterm
TERM eterm-color
TERM gnome
TERM gnome-256color
TERM hurd
TERM jfbterm
TERM konsole
TERM kterm
TERM linux
TERM linux-c
TERM mach-color
TERM mach-gnu-color
TERM mlterm
TERM putty
TERM putty-256color
TERM rxvt*
TERM screen*
TERM st
TERM st-256color
TERM terminator
TERM tmux*
TERM vt100
TERM xterm*
*/}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "")

  for (let i of Object.keys(dircolors_setting_json)) {
    header += i + ' ' + dircolors_setting_json[i] + '\n'
  }

  return header

}
module.exports = convert_JSON
