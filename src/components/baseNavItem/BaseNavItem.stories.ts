import BaseNavItem from './BaseNavItem.vue';

export default {
  title: 'Common/BaseNavItem',
  component: BaseNavItem,
};

const Template = () => ({
  components: {
    BaseNavItem,
  },
  template: `
    <base-nav-item
      text="아이템의 텍스트"
    >
      [ICON]
    </base-nav-item>
  `,
});

export const DefaultNavItem: any = Template.bind({});
DefaultNavItem.args = {
};
