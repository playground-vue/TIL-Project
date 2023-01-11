import BaseCard from './BaseCard.vue';

export default {
  title: 'Common/BaseCard',
  component: BaseCard,
};

const Template = () => ({
  components: {
    BaseCard,
  },
  template: `
    <base-card>
      contents
    </base-card>`,
});

export const DefaultCard: any = Template.bind({});
DefaultCard.args = {
};
