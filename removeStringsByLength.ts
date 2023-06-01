export const removeStringsByLength = (list: string[], length: number) => {
  const newList = list.filter((item) => item.length <= length);

  return newList;
};
