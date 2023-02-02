import { ref } from 'vue';

interface Props {
  style?: string;
}

const useBestSellerOfMonthBox = (props?: Props) => {
  const state = ref();
  const style = ref(props?.style || 'width:300px; height:150px;');

  return {
    state,
    style,
  };
};

export {
  useBestSellerOfMonthBox,
};
