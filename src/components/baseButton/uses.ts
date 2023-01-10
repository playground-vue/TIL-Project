interface Emit {
  (e: 'click'): void;
}

const useButton = (emit: Emit) => {
  const onClick = () => emit('click');

  return {
    onClick,
  };
};

export {
  useButton,
};
