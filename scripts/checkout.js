import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
//import '../data/cart-oop.js';
//import '../data/cart-class.js';
//import '../data/backened-practice.js';
import { loadProducts } from '../data/products.js';

new Promise((resolve)=>{
   loadProducts(()=>{
      resolve();
   })
}).then(()=>{
   renderCheckoutHeader();
   renderOrderSummary();
   renderPaymentSummary();
});

/*
loadProducts(()=>{
   renderCheckoutHeader();
   renderOrderSummary();
   renderPaymentSummary();
})
*/