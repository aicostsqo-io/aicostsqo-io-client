export const hasExactKey = (query: object, key: string) => {
  return Object.hasOwn(query, key);
};

// TODO: i believe @sugrado finds a better name for this function
export const hincalRouter = (
  router: any,
  currentQueryParams: any,
  path: string
) => {
  const filteredQueryParams = Object.keys(currentQueryParams).reduce(
    (acc: any, key: any) => {
      if (key !== "_id") {
        acc[key] = currentQueryParams[key];
      }
      return acc;
    },
    {}
  );
  const queryString = new URLSearchParams(filteredQueryParams).toString();

  if (queryString) {
    router.push(`${path}?${queryString}`);
  } else {
    router.push(path);
  }
};
