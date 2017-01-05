export default function flatten(projects) {
  if (!projects) {
    return [];
  }
  let result = [];
  Object.keys(projects).forEach((p) => {
    result = [
      ...result,
      ...projects[p],
    ];
  });
  return result;
}
