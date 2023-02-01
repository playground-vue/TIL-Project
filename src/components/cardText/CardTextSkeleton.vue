<script setup lang="ts">
import BaseTitleSkeleton from '@/components/baseTitle/BaseTitleSkeleton.vue';
import BaseCard from '@/components/baseCard/BaseCard.vue';

interface Props {
  style?: string;
}

defineProps<Props>();

</script>

<template>
  <base-card class="card-text" :style="style">
    <base-title-skeleton />
    <div class="card-text__content skeleton" />
  </base-card>
</template>

<style lang="scss" scoped>
.card-text {
  padding: 24px;

  &__content {
    width: 50%;
    height: calc(100% - 58px);
    margin-top: 10px;
  }
}
</style>
