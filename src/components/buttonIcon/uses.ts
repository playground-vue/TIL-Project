import { useButton } from '@/components/baseButton/uses';

export type ButtonNativeType = 'button' | 'reset' | 'submit';
export type ButtonType = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';

export interface Props {
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
