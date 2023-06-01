export const removeStringsByLength = (list: string[], length: number) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].length >= length) {
      const index = list.indexOf(list[i]);
      list.splice(index, 1);
    }
  }

  return list;
};
