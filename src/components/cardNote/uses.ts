import { ref } from 'vue';

interface Props {
  id: number;
  title?: string;
  content: string;
  date: string;
}

const useOption = () => {
  const target = ref();
  const optionItems = [
    { name: 'Delete', value: 'delete' },
  ];
  const isShowOption = ref(false);

  const setOptionWindow = (isShow?: boolean) => {
    isShowOption.value = isShow ?? !isShowOption.value;
  };

  return {
    target,
    optionItems,
    isShowOption,
    setOptionWindow,
  };
};

export type { Props };
export {
  useOption,
};
