export const removeStringsByLength = (list: string[], length: number) => {
  return list.filter((item) => item.length <= length);
};

// export const removeStringsByLength = (list: string[], length: number) => {
//   for (let i = 0; i < list.length; i++) {
//     if (list[i].length >= length) {
//       const index = list.indexOf(list[i]);
//       list.splice(index, 1);
//     }
//   }

//   return list;
// };

// export const removeStringsByLength = (list: string[], length: number) => {
//   const newList: string[] = [];

//   for (let i = 0; i < list.length; i++) {
//     if (list[i].length <= length) {
//       newList.push(list[i]);
//     }
//   }

//   return newList;
// };

// export const removeStringsByLength = (list: string[], length: number) => {
//   const newList = list.filter((item) => item.length <= length);

//   return newList;
// };
