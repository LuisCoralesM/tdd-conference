export const removeStringsByLength = (list: string[], length: number) => {
  const newList: string[] = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].length <= length) {
      newList.push(list[i]);
    }
  }

  return newList;
};
