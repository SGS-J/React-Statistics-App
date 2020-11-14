export default function createId(param) {
  const count = param + 1;
  const digits =
    count === 1 ? 1 : count === 10 ? 2 : Math.ceil(Math.log10(count));
  const zeroValue = Math.log10(10000 / 10 ** (digits - 1));
  const char = String.fromCharCode((count % 26) + 64);
  const newValue = `${'0'.repeat(zeroValue)}${count}${char}`;
  return newValue;
}
