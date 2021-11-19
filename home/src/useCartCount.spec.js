import { renderHook, act } from '@testing-library/react-hooks';

import { useCartCount } from './useCartCount';

let callback = () => {};

jest.mock('cart/cart', () => ({
  cart: {
    cartItems: [],
    // subscribe: jest.fn(),
    subscribe: (cb) => {
      callback = cb;
    },
  },
}));

describe('useCartCount', () => {
  it('should return cart count', () => {
    const { result } = renderHook(() => useCartCount());
    expect(result.current).toBe(0);
  });

  it('should return cart count', () => {
    const { result } = renderHook(() => useCartCount());
    act(() => {
      callback({ cartItems: [{ id: 1 }] });
    });
    expect(result.current).toBe(1);
  });
});
