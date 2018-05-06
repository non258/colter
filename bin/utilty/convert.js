function chalk_convert(ch)
{
  let lest = ch._styles[0];

  return lest.open.slice(2, -1);
}

module.exports = chalk_convert;
