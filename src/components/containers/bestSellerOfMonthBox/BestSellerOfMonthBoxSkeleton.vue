<script setup lang="ts">
import { useBestSellerOfMonthBox } from '@/components/containers/bestSellerOfMonthBox/uses';
import CardTextSkeleton from '@/components/cardText/CardTextSkeleton.vue';

interface Props {
  style?: string;
}

const props = defineProps<Props>();

const { style } = useBestSellerOfMonthBox(props);

</script>
<template>
  <card-text-skeleton :style="style" />
</template>
