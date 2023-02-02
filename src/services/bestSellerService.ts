import axiosInstance from '@/services/index';

const getBestSellerOfMonth = () => axiosInstance.get('/bestSellerOfMonth');

export {
  getBestSellerOfMonth,
};
