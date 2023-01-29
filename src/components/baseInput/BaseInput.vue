<template>
  <input
    type="text"
    :value="modelValue"
    :aria-label="props.label"
    :autocomplete="props.autocomplete"
    :disabled="props.disabled"
    :placeholder="props.placeholder"
    :readonly="props.readonly"
    :required="props.required"
    class="base-input"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="onChange"
  >
</template>

<script setup lang="ts">
import { useInput } from './uses';

export interface Props {
  nativeType?: string;
  modelValue: string | number;
  label: string;
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
const props = withDefaults(defineProps<Props>(), {
  nativeType: 'text',
  autocomplete: 'off',
  disabled: false,
  placeholder: '',
  readonly: false,
  required: false,
  value: '',
});
const emit = defineEmits<Emit>();

const {
  handleInput,
  handleFocus,
  handleBlur,
  onChange,
} = useInput(props, emit);
</script>

<style lang="scss">
.base-input {
  width: 200px;
  height: 40px;
  padding: 8px 8px 8px 16px;
  color: rgba(228, 230, 244, 0.68);
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #42475D;
  box-sizing: border-box;
  &::placeholder {
    color: rgba(228, 230, 244, 0.38);
  }
  &:hover {
    outline: none !important;
    border: 1px solid #494C61;
  }
  &:focus {
    outline: none !important;
    border: 2px solid #7367F0;
  }
}
</style>
