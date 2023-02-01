import type { Props } from '@/components/cardText/types';
import BaseButton from '@/components/baseButton/BaseButton.vue';
import CardText from './CardText.vue';

export default {
  title: 'Common/CardText',
  component: CardText,
};

const Template = (args: Props) => ({
  components: { CardText, BaseButton },
  setup() {
    return {
      args,
    };
  },
  template: `
    <CardText v-bind="args">
      <h1>$48.9k</h1>
      <base-button>
        VIEW SALES
      </base-button>
    </CardText>
    `,
});

export const DefaultCardText: any = Template.bind({});
const args: Props = {
  title: 'Congratulations John! 🎉',
  subTitle: 'Best seller of the month',
  style: 'width:300px; height:150px',
};
DefaultCardText.args = args;
