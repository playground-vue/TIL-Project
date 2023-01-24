import BaseFooter from './BaseFooter.vue';

export default {
  title: 'Common/BaseFooter',
  component: BaseFooter,
};

const Template = () => ({
  components: {
    BaseFooter,
  },
  template: `
    <BaseFooter />`,
});

export const DefaultFooter: any = Template.bind({});
DefaultFooter.args = {
};
