import { computed, shallowRef } from 'vue';
import { numToPx } from '@/common/utils';
import IconChart from '@/assets/icon-chart.svg';
import IconPage from '@/assets/icon-page.svg';
import IconComp from '@/assets/icon-component.svg';
import router from '@/router';

interface Props {
  navPadding: number;
}
interface NavInfo {
  to: string;
  text: string;
  key: string;
  icon: any;
}

const useBaseNav = (props: Props) => {
  const navList = shallowRef<NavInfo[]>([
    {
      to: '/analyticsView',
      text: 'Analytics',
      key: 'analytics',
      icon: IconChart,
    },
    {
      to: '/eCommerceView',
      text: 'eCommerce',
      key: 'eCommerce',
      icon: IconPage,
    },
    {
      to: '/crmView',
      text: 'CRM',
      key: 'crm',
      icon: IconComp,
    },
  ]);

  const navPaddingPx = computed<string>(() => numToPx(props.navPadding));

  const isSameCurrentRoute = (routePath: string): boolean => {
    const currentRoutePath = computed<string>(() => router.currentRoute.value.path);
    return routePath === currentRoutePath.value;
  };

  return {
    navList,
    navPaddingPx,
    isSameCurrentRoute,
  };
};

export type { Props };
export {
  useBaseNav,
};
