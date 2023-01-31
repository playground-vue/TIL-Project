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
  <div class="dashboard-viewport">
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
.dashboard-viewport {
  background-color: rgb(37, 41, 60);
  block-size: 100%;

  .layout-content {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 v-bind('navPaddingPx');

    & > header, main {
      max-width: 1440px;
      align-self: center;
      width: 100%;
      padding: 15px 20px;
      box-sizing: border-box;
    }
  }
}
</style>
