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
    <BaseNavItem
      text="아이템의 텍스트"
    >
      [ICON]
    </BaseNavItem>
  `,
});

export const DefaultNavItem: any = Template.bind({});
DefaultNavItem.args = {
};
