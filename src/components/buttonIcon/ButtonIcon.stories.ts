import { action } from '@storybook/addon-actions';
import type { Props } from '@/components/baseButton/uses';
import ButtonIcon from './ButtonIcon.vue';

export default {
  title: 'Common/ButtonIcon',
  component: ButtonIcon,
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
    ButtonIcon,
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
    <button-icon
      v-bind="args"
      @click="onClick"
    >
      {{ args.type.toUpperCase() }}
    </button-icon>`,
});

export const DefaultButtonIcon: any = Template.bind({});
DefaultButtonIcon.args = {
  nativeType: 'button',
  type: 'primary',
};
