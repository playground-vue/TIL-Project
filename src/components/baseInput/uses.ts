export interface Props {
  nativeType: string;
  modelValue: string | number;
  label?: string;
  autocomplete?: string;
  disabled?: boolean;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  value?: string;
}
interface Emit {
  (e: 'update:modelValue', value: Props['modelValue']): void;
  (e: 'input', value: Props['modelValue']): void;
  (e: 'focus', value: Event): void;
  (e: 'blur', value: Event): void;
  (e: 'change', value: Props['modelValue']): void;
}

const useInput = (props: Props, emit: Emit) => {
  const handleInput = (e: { target: HTMLInputElement }) => {
    emit('update:modelValue', e.target.value);
    emit('input', e.target.value);
  };
  const handleFocus = (e: Event) => {
    emit('focus', e);
  };
  const handleBlur = (e: Event) => {
    emit('blur', e);
  };
  const onChange = (e: { target: HTMLInputElement }) => {
    emit('change', e.target.value);
  };

  return {
    handleInput,
    handleFocus,
    handleBlur,
    onChange,
  };
};

export {
  useInput,
};
