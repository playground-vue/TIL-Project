<script setup lang="ts">
import CardText from '@/components/cardText/CardText.vue';
import BaseButton from '@/components/baseButton/BaseButton.vue';
import { getBestSellerOfMonth } from '@/services/bestSellerService';
import { useBestSellerOfMonthBox } from '@/components/containers/bestSellerOfMonthBox/uses';

interface Props {
  style?: string;
}

const props = defineProps<Props>();

const { state, style } = useBestSellerOfMonthBox(props);

const { data } = await getBestSellerOfMonth();
state.value = data;
</script>

<template>
  <card-text
    :title="state.title"
    :subtitle="state.subtitle"
    class="best-seller-of-month-box"
    :style="style"
  >
    <div class="best-seller-of-month-box__content">
      <p class="best-seller-of-month-box__value">
        {{ state.value }}
      </p>
      <base-button class="best-seller-of-month-box__button">
        View Values
      </base-button>
    </div>
  </card-text>
</template>

<style lang="scss" scoped>
.best-seller-of-month-box {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: calc(100% - 44px);
  }

  &__value {
    font-weight: bold;
    font-size: 24px;
    color: #7367F0;
    margin: 8px 0;
  }

  &__button {
    width: 120px;
  }
}
</style>
