import type { Props } from '@/components/cardText/types';
import BaseButton from '@/components/baseButton/BaseButton.vue';
import CardText from './CardText.vue';
import CardTextSkeleton from './CardTextSkeleton.vue';

export default {
  title: 'Common/CardText',
  component: CardText,
  CardTextSkeleton,
};

const Template = (args: Props) => ({
  components: { CardText, CardTextSkeleton, BaseButton },
  setup() {
    return {
      args,
    };
  },
  template: `
    <card-text v-bind="args">
      <h1>$48.9k</h1>
      <base-button>
        VIEW SALES
      </base-button>
    </card-text>
    
    <card-text-skeleton v-bind="args"/>
    `,
});

export const DefaultCardText: any = Template.bind({});
const args: Props = {
  title: 'Congratulations John! 🎉',
  subtitle: 'Best seller of the month',
  style: 'width:300px; height:150px; margin-bottom: 10px;',
};
DefaultCardText.args = args;
