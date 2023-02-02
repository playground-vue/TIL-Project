<script setup lang="ts">
import BestSellerOfMonthBox from '@/components/containers/bestSellerOfMonthBox/BestSellerOfMonthBox.vue';
import BestSellerOfMonthBoxSkeleton from '@/components/containers/bestSellerOfMonthBox/BestSellerOfMonthBoxSkeleton.vue';
</script>

<template>
  <Suspense>
    <best-seller-of-month-box />
    <template #fallback>
      <best-seller-of-month-box-skeleton />
    </template>
  </Suspense>
</template>

<style lang="scss">
</style>
