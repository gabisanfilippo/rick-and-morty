export const transformObjectToParams = (obj: any) => {
  let objArr = Object.entries(obj);
  let url = objArr
    .map((item: any) => {
      return `${item[0]}=${item[1]}`;
    })
    .join("&");
  return url;
};
