export const hasExactKey = (query: object, key: string) => {
  return Object.hasOwn(query, key);
};
