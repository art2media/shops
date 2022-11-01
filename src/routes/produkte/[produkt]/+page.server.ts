import type { Actions } from './$types';
 
export const actions: Actions = {
  calc: async (event) => {
    return { success: true };
  },
  cart: async (event) => {
    // TODO add product to cart
  }
};