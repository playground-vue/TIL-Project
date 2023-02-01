<script setup lang="ts">
import BestSellerOfMonthBox from '@/components/containers/bestSellerOfMonthBox/BestSellerOfMonthBox.vue';
import BestSellerOfMonthBoxSkeleton from '@/components/containers/bestSellerOfMonthBox/BestSellerOfMonthBoxSkeleton.vue';
</script>

<template>
  <suspense>
    <best-seller-of-month-box />
    <template #fallback>
      <best-seller-of-month-box-skeleton />
    </template>
  </suspense>
</template>

<style lang="scss">
</style>
