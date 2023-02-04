let uid = 0;
const getUid = () => uid++;

const numToPx = (num: number): string => {
  if (num !== 0) {
    return `${num}px`;
  }
  return '0';
};

export {
  getUid,
  numToPx,
};
