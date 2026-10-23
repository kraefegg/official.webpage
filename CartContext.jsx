import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'kraefegg_quote_request_v2';

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable */
    }
  }, [items]);

  const api = useMemo(
    () => ({
      items,
      count: items.length,
      add: (item) =>
        setItems((prev) => {
          if (prev.some((i) => i.key === item.key)) return prev;
          return [...prev, { ...item, quantity: item.quantity || 1 }];
        }),
      remove: (key) => setItems((prev) => prev.filter((i) => i.key !== key)),
      setQuantity: (key, quantity) =>
        setItems((prev) => prev.map((i) => (i.key === key ? { ...i, quantity: Math.max(1, quantity) } : i))),
      clear: () => setItems([]),
      has: (key) => items.some((i) => i.key === key),
    }),
    [items]
  );

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useRequestCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useRequestCart must be used inside CartProvider');
  return ctx;
}