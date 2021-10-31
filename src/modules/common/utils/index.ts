export const objToArray = (obj: any) => {
  const keys = Object.keys(obj);
  const array = keys.map((k) => obj[k]);
  return array;
};
