interface SelectItem {
  name: string;
  value: string;
}

interface Props {
  selectItems: SelectItem[]
}

export type { SelectItem, Props };
