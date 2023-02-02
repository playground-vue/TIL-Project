import BaseTitle from './BaseTitle.vue';
import BaseTitleSkeleton from './BaseTitleSkeleton.vue';

export default {
  title: 'Common/BaseTitle',
  component: BaseTitle,
};

const Template = () => ({
  components: {
    BaseTitle,
    BaseTitleSkeleton,
  },
  template: `
    <base-title>
      Generated Leads
      <template #subtitle>
        Monthly Report
      </template>
    </base-title>
    
    <div style="width: 250px; height: 60px; margin-top: 10px; padding: 5px; border: 1px solid #DDDDDD; border-radius: 5px;">
      <base-title-skeleton />
    </div>
    
  `,
});

export const DefaultTitle: any = Template.bind({});
DefaultTitle.args = {
};
