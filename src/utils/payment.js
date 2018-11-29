import * as queryString from 'query-string';

export const getPaymentUri = order => ({
  pathname: '/payment',
  search: `?${queryString.stringify({
    orderId: order.id,
    amount: order.totalPrice,
  })}`,
});
