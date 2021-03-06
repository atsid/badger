function getImageEnd(text, start) {
  let bracketLevel = 1;
  for (let i = start + 1; i <= text.length; i += 1) {
    if (bracketLevel > 0) {
      if (text[i] === ']') {
        bracketLevel -= 1;
      } else if (text[i] === '[') {
        bracketLevel += 1;
      }
    } else if (text[i] === ')') {
      return i;
    }
  }
  return -1;
}

export default function scrape(text) {
  const result = [];
  let i = 0;
  while (i < text.length) {
    const imageStart = text.indexOf('[!', i);
     // quit when no more images are present
    if (imageStart === -1) {
      break;
    } else {
      const imageEnd = getImageEnd(text, imageStart);
      if (imageEnd === -1) {
        break;
      } else {
        result.push(text.substring(imageStart, imageEnd + 1));
        i = imageEnd + 1;
      }
    }
  }
  return result;
}
