<script setup lang="ts">
import BaseCard from '@/components/baseCard/BaseCard.vue';
import BaseTitle from '@/components/baseTitle/BaseTitle.vue';

interface Props {
  title?: string;
  subTitle?: string;
  style?: string;
}

const props = defineProps<Props>();

</script>

<template>
  <base-card class="card-text" :style="props.style">
    <base-title>
      {{ props.title }}
      <template #subTitle>
        {{ props.subTitle }}
      </template>
    </base-title>
    <slot />
  </base-card>
</template>

<style lang="scss">
.card-text {
  padding: 24px;
}
</style>
