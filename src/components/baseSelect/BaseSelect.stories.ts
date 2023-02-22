import type { Props } from '@/components/baseSelect/uses';
import { action } from '@storybook/addon-actions';
import BaseSelect from './BaseSelect.vue';

export default {
  title: 'Common/BaseSelect',
  component: BaseSelect,
};

const Template = (args: Props) => ({
  components: {
    BaseSelect,
  },
  setup() {
    const actionsData = {
      onUpdateModelValue: action('update:modelValue'),
      onChange: action('on-change'),
    };

    return {
      args,
      ...actionsData,
    };
  },
  template: '<base-select v-bind="args" @onChange="onChange" @update:modelValue="onUpdateModelValue"/>',
});

export const DefaultSelect: any = Template.bind({});
const modelValue = { name: 'Downloaded', value: 'downloaded' };
const placeholder = 'Select';
const items = [
  { name: 'Downloaded', value: 'downloaded' },
  { name: 'Draft', value: 'draft' },
  { name: 'Paid', value: 'paid' },
  { name: 'Partial Payment', value: 'partialPayment' },
  { name: 'Past Due', value: 'pastDue' },
];
DefaultSelect.args = {
  modelValue,
  placeholder,
  items,
};
