let fs = require('fs');

fs.readFile("./dircolors.txt", "utf8", function (err, text) {
  let convert = {}
  if (text.endsWith("\n")) {
    text = text.slice(0, -1)
  }
  let colors_settings = text.split("\n")
  for (let i = 0; i < colors_settings.length; i++) {
    if (colors_settings[i].trim().match(/^(#|TERM)/) == null) {
      let tmp = colors_settings[i].split(" ")
      convert[tmp[0]] = tmp[1] 
    }
  }
  console.log(convert)
});
