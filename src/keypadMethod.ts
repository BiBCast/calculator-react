function match(input: string, regex: RegExp) {
  const ret = input.match(regex);
  if (!ret) throw new Error("Regex failed");
  return ret[0];
}

export function floatCase(input: string) {
  const regexInverse = /\d+[.]?\d*$/g;
  const regexNocheck = /[-+]\d+[.]?\d*$/g;

  if (!regexInverse.test(input)) {
    return;
  }
  let matchValue = match(input, regexInverse);
  if (regexNocheck.test(input)) {
    matchValue = match(input, regexNocheck);
    matchValue = "-" + matchValue.slice(1);
  } else {
    matchValue = "-" + matchValue;
  }
  const prefix = input.slice(
    0,
    input.length - matchValue.length <= 0 ? 0 : input.length - matchValue.length
  );
  return prefix + matchValue;
}
export function percentCase(input: string) {
  const regexFloat = /\d*$/g;
  const regexFloatNoCheck = /\.+\d*$/g;
  if (!regexFloat.test(input)) {
    return;
  }
  if (regexFloatNoCheck.test(input)) {
    return;
  }
  let matchValue = match(input, regexFloat);
  matchValue = "0." + matchValue;

  const prefixFloat = input.slice(
    0,
    input.length >= matchValue.length ? input.length - matchValue.length : 0
  );
  return prefixFloat + matchValue;
}
