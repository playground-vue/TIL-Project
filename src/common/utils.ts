const numToPx = (num: number) => {
  if (num !== 0) {
    return `${num}px`;
  }
  return 0;
};

export {
  numToPx,
};
