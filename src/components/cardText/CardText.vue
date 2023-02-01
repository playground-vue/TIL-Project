<script setup lang="ts">
import BaseCard from '@/components/baseCard/BaseCard.vue';
import BaseTitle from '@/components/baseTitle/BaseTitle.vue';
import type { Props } from './types';

defineProps<Props>();

</script>

<template>
  <base-card class="card-text" :style="style">
    <base-title>
      {{ title }}
      <template #subTitle>
        {{ subTitle }}
      </template>
    </base-title>
    <slot />
  </base-card>
</template>

<style lang="scss" scoped>
.card-text {
  padding: 24px;
}
</style>
