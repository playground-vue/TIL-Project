import BaseHeader from './BaseHeader.vue';

export default {
  title: 'Common/BaseHeader',
  component: BaseHeader,
};

const Template = () => ({
  components: {
    BaseHeader,
  },
  template: `
    <BaseHeader />`,
});

export const DefaultHeader: any = Template.bind({});
DefaultHeader.args = {
};
