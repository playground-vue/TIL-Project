import type { SelectItem } from '@/components/baseDropdown/uses';
import { ref } from 'vue';

interface Props {
  selectItem: SelectItem;
  items: SelectItem[];
  placeholder: string;
}
interface Emit {
  (e: 'update:modelValue', value: SelectItem): void,
  (e: 'on-change', value: SelectItem): void,
}

const useBaseSelect = (props: Props, emit: Emit) => {
  const target = ref(null);
  const isClick = ref(false);

  const toggleClick = (value: Event | boolean) => {
    isClick.value = typeof value === 'boolean' ? value : !isClick.value;
  };

  const changeItem = (newItem: SelectItem) => {
    // eslint-disable-next-line vue/require-explicit-emits
    emit('update:modelValue', newItem);
    emit('on-change', newItem);
    toggleClick(false);
  };

  return {
    target,
    isClick,
    toggleClick,
    changeItem,
  };
};

export type { Props, Emit };
export {
  useBaseSelect,
};
