import BaseNav from './BaseNav.vue';

export default {
  title: 'Common/BaseNav',
  component: BaseNav,
};

const Template = () => ({
  components: {
    BaseNav,
  },
  template: `
    <BaseNav />`,
});

export const DefaultNav: any = Template.bind({});
DefaultNav.args = {
};
