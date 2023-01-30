import type { Props } from '@/components/baseSelect/types';
import type { SelectItem } from '@/components/baseDropdown/uses';
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
      onChangeItem: action('change-item'),
    };

    return {
      args,
      ...actionsData,
    };
  },
  template: '<base-select v-bind="args" @changeItem="onChangeItem" @update:modelValue="onUpdateModelValue"/>',
});

export const DefaultSelect: any = Template.bind({});
const modelValue: SelectItem = { name: 'Downloaded', value: 'downloaded' };
const placeholder = 'Select';
const items: SelectItem[] = [
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
