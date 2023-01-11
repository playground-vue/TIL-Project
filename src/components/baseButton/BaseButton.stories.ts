import { action } from '@storybook/addon-actions';
import type { Props } from '@/components/baseButton/uses';
import BaseButton from './BaseButton.vue';

export default {
  title: 'Common/BaseButton',
  component: BaseButton,
  argTypes: {
    nativeType: {
      control: { type: 'select' },
      options: ['button', 'reset', 'submit'],
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error'],
    },
  },
};

const Template = (args: Props) => ({
  components: {
    BaseButton,
  },
  setup() {
    const actionsData = {
      onClick: action('click'),
    };

    return {
      args,
      ...actionsData,
    };
  },
  template: `
    <base-button
      v-bind="args"
      @click="onClick"
    >
      {{ args.type.toUpperCase() }}
    </base-button>`,
});

export const DefaultButton: any = Template.bind({});
DefaultButton.args = {
  nativeType: 'button',
  type: 'primary',
};
