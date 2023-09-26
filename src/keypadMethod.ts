export function floatCase(input: string) {
  const regex_inverse = /\d+[\.]?\d*$/g;
  const regex_no_check = /[-+]\d+[\.]?\d*$/g;
  if (!regex_inverse.test(input)) {
    return;
  }
  let match_value = input.match(regex_inverse) as any[0];
  if (regex_no_check.test(input)) {
    match_value = input.match(regex_no_check) as any[0];
    match_value = "-" + match_value.slice(1);
  } else {
    match_value = "-" + match_value;
  }
  let prefix = input.slice(
    0,
    input.length - match_value.length <= 0
      ? 0
      : input.length - match_value.length
  );
  return prefix + match_value;
}
export function percentCase(input: string) {
  const regex_float = /\d*$/g;
  const regex_float_no_check = /\.+\d*$/g;
  if (!regex_float.test(input)) {
    return;
  }
  if (regex_float_no_check.test(input)) {
    return;
  }
  let match_float_value = input.match(regex_float) as any[0];

  match_float_value = "0." + match_float_value;

  let prefix_float = input.slice(
    0,
    input.length >= match_float_value.length
      ? input.length - match_float_value.length
      : 0
  );
  return prefix_float + match_float_value;
}
