import { computed } from 'vue';

type ButtonNativeType = 'button' | 'reset' | 'submit';
type ButtonType = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';

interface Props {
  nativeType: ButtonNativeType;
  type: ButtonType;
}
interface Emit {
  (e: 'click'): void;
}

const useButton = (props: Props, emit: Emit) => {
  const buttonTypeClass = computed(() => {
    if (props.type) {
      return `base-button--${props.type}`;
    }
    return '';
  });
  const onClick = () => emit('click');

  return {
    buttonTypeClass,
    onClick,
  };
};

export {
  useButton,
};
export type {
  ButtonNativeType,
  ButtonType,
  Props,
  Emit,
};
