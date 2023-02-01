interface SelectItem {
  name: string;
  value: string;
}
interface Props {
  selectItems: SelectItem[]
  isShow: boolean;
}
interface Emit {
  (e: 'click', value: SelectItem): void,
}

export type { SelectItem, Props, Emit };
