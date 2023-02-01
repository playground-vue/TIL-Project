import type { SelectItem } from '@/components/baseDropdown/uses';

interface Props {
  selectItem: SelectItem;
  items: SelectItem[];
  placeholder: string;
}
interface Emit {
  (e:'update:modelValue', value: SelectItem): void,
  (e:'on-change', value: SelectItem): void,
}

export type { Props, Emit };
