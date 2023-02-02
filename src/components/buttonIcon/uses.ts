import { useButton } from '@/components/baseButton/uses';

type ButtonNativeType = 'button' | 'reset' | 'submit';
type ButtonType = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';

interface Props {
  nativeType: ButtonNativeType;
  type: ButtonType;
}
interface Emit {
  (e: 'click'): void;
}

const useButtonIcon = (props: Props, emit: Emit) => {
  const { onClick } = useButton(props, emit);

  return {
    onClick,
  };
};

export {
  useButtonIcon,
};
export type {
  Props, Emit,
};
