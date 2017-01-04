const P_START = '<p>';
const P_END = '</p>';

// Strips a p tag from a string
export default function strippy(tag) {
  let result = tag.trim();
  // strip front tag
  if (tag.indexOf(P_START) === 0) {
    result = result.substring(P_START.length);
  }
  // strip rear tag
  const lastIndex = result.indexOf('</p>');
  if (lastIndex === result.length - P_END.length && lastIndex !== -1) {
    result = result.substr(0, result.length - P_END.length);
  }
  return result;
}
