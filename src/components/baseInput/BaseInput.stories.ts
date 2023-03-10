import { action } from '@storybook/addon-actions';
import BaseInput from './BaseInput.vue';
import type { Props } from './uses';

export default {
  title: 'Common/BaseInput',
  component: BaseInput,
  argTypes: {
    modelValue: {
      control: { type: 'text' },
    },
  },
};

const Template = (args: Props) => ({
  components: {
    BaseInput,
  },
  setup() {
    const actionsData = {
      handleInput: action('handleInput'),
      handleFocus: action('handleFocus'),
      handleBlur: action('handleBlur'),
      onChange: action('onChange'),
    };

    return {
      args,
      ...actionsData,
    };
  },
  template: `
    <base-input
      v-bind="args"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="onChange"
    >
      contents
    </base-input>`,
});

export const DefaultInput: any = Template.bind({});
DefaultInput.args = {
  modelValue: '기본 값',
};
