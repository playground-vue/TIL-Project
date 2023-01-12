import BaseTitle from './BaseTitle.vue';

export default {
  title: 'Common/BaseTitle',
  component: BaseTitle,
};

const Template = () => ({
  components: {
    BaseTitle,
  },
  template: `
    <base-title>
      Generated Leads
      <template #subTitle>
        Monthly Report
      </template>
    </base-title>`,
});

export const DefaultTitle: any = Template.bind({});
DefaultTitle.args = {
};
