export default function ghRead(token, path) {
  const headers = {
    Authorization: `token ${token}`,
    Accept: 'application/json',
  };
  return fetch(`https://api.github.com${path}`, {
    headers,
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}: ${res.statusMessage}`);
    }
    return res;
  });
}
