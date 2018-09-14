function chalk_convert(ch)
{
  let lest = ch._styles;
  let num = ch._styles.length;
  let list = "";

  for (let i = 0; i < num; i++)
  {
    if (i != 0)
      list += ";";
    list += lest[i].open.slice(2, -1);
  }

  return list;

}

module.exports = chalk_convert;
