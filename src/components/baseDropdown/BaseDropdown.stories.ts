import type { Props } from '@/components/baseDropdown/uses';
import { action } from '@storybook/addon-actions';
import BaseDropdown from './BaseDropdown.vue';

export default {
  title: 'Common/BaseDropdown',
  component: BaseDropdown,
  argTypes: {
    selectItems: {
      description: '드랍다운 아이템 목록',
    },
  },
};

const Template = (args: Props) => ({
  components: {
    BaseDropdown,
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
    <base-dropdown v-bind="args" @click="onClick" />
  `,
});

export const DefaultDropdown: any = Template.bind({});
DefaultDropdown.args = {
  selectItems: [
    { name: 'Downloaded', value: 'downloaded' },
    { name: 'Draft', value: 'draft' },
    { name: 'Paid', value: 'paid' },
    { name: 'Partial Payment', value: 'partialPayment' },
    { name: 'Past Due', value: 'pastDue' },
  ],
};
