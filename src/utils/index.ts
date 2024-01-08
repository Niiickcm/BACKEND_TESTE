export function generateRandomNumber() {
  const characters = "0123456789abcdefghijklmnopqrstuvwxyz";
  let result = "";
  let charSet = new Set();

  while (result.length < 10) {
    const randomChar =
      characters[Math.floor(Math.random() * characters.length)];

    if (!charSet.has(randomChar)) {
      result += randomChar;
      charSet.add(randomChar);
    }
  }

  return result;
}
