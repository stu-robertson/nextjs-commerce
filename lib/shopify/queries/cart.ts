import cartFragment from '../fragments/cart';

export const getCartQuery = /* GraphQL */ `
  query getCart() {
    allBaskets {
      id
    }
  }
`;
