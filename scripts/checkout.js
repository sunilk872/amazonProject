import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
//import '../data/cart-oop.js';
//import '../data/cart-class.js';
//import '../data/backened-practice.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';

async function loadPage(){
   try{
      await loadProductsFetch();
      renderCheckoutHeader();
      renderOrderSummary();
      renderPaymentSummary();
   } catch (error){
      console.log(error);
   }
}

loadPage();

/*
Promise.all([
   loadProductsFetch()
]).then(()=>{
   renderCheckoutHeader();
   renderOrderSummary();
   renderPaymentSummary();
});
*/

/*
new Promise((resolve)=>{
   loadProducts(()=>{
      resolve();
   })
}).then(()=>{
   renderCheckoutHeader();
   renderOrderSummary();
   renderPaymentSummary();
});
*/

/*
loadProducts(()=>{
   renderCheckoutHeader();
   renderOrderSummary();
   renderPaymentSummary();
})
*/