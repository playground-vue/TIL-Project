<script setup lang="ts">
import { numToPx } from '@/common/utils';
import { computed } from 'vue';
import BaseNavItem from '@/components/baseNavItem/BaseNavItem.vue';
import IconChart from '@/assets/icon-chart.svg';
import IconPage from '@/assets/icon-page.svg';
import IconComp from '@/assets/icon-component.svg';

interface Props {
  navPadding: number;
}

const props = withDefaults(defineProps<Props>(), {
  navPadding: 260,
});

const navPaddingPx = computed(() => numToPx(props.navPadding));
</script>

<template>
  <aside>
    <nav class="base-nav--vertical">
      <div class="nav-header">
        MENU
      </div>
      <ul class="nav-items">
        <RouterLink to="/analyticsView">
          <BaseNavItem
            text="Analytics"
          >
            <IconChart />
          </BaseNavItem>
        </RouterLink>
        <RouterLink to="/eCommerceView">
          <BaseNavItem
            text="eCommerce"
          >
            <IconPage />
          </BaseNavItem>
        </RouterLink>
        <RouterLink to="/crmView">
          <BaseNavItem
            text="CRM"
          >
            <IconComp />
          </BaseNavItem>
        </RouterLink>
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss">
.base-nav--vertical {
  position: fixed;
  z-index: 1004;
  display: flex;
  flex-direction: column;
  block-size: 100%;
  inline-size: v-bind('navPaddingPx');
  background-color: rgb(47, 51, 73);
}
.nav-header {
  display: flex;
  overflow: hidden;
  min-block-size: 64px;
  padding: 0 10px;
  margin: 0 10px;
  align-items: center;
  font-size: 22px;
}
.nav-items {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
