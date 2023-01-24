<script setup lang="ts">
import BaseNav from '@/components/baseNav/BaseNav.vue';
import { computed, ref } from 'vue';
import { numToPx } from '@/common/utils';
import BaseHeader from '@/components/baseHeader/BaseHeader.vue';
import BaseFooter from '@/components/baseFooter/BaseFooter.vue';

const navPadding = ref(260);
const navPaddingPx = computed(() => numToPx(navPadding.value));
</script>

<template>
  <div class="application">
    <BaseNav
      :nav-padding="navPadding"
    />
    <div class="layout-content">
      <BaseHeader />
      <main>
        <RouterView />
      </main>
      <BaseFooter />
    </div>
  </div>
</template>

<style lang="scss">
.application {
  background-color: rgb(37, 41, 60);
  block-size: 100%;
}
.layout-content {
  display: flex;
  flex-direction: column;
  padding: 0 0 0 v-bind('navPaddingPx');
}
</style>
