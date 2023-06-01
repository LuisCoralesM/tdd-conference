export const removeStringsByLength = (list: string[], length: number) => {
  return list.filter((item) => item.length <= length);
};
