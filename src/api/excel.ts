const apiURL = process.env.NEXT_PUBLIC_BASE_ENDPOINT;
export const getExcel = (path: string) =>
  window.open(`${apiURL}/${path}`, "_blank");
