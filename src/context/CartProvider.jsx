import { useEffect, useMemo, useState, useCallback } from "react";
import { CartContext } from "./CartContext";

const STORAGE_KEY = "productStore";

const parseStorage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const getItemId = (item) => item.id || item.description;

export const CartProvider = ({ children }) => {
  const [data, setData] = useState(() => parseStorage());
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore write errors
    }
  }, [data]);

  const showDeleteConfirm = (itemId) => {
    setDeleteConfirm(itemId);
  };

  const confirmDelete = useCallback(() => {
    if (deleteConfirm !== null) {
      setData((current) =>
        current.filter((entry) => getItemId(entry) !== deleteConfirm),
      );
      setDeleteConfirm(null);
    }
  }, [deleteConfirm]);

  const cancelDelete = useCallback(() => {
    setDeleteConfirm(null);
  }, []);

  const showAdded = (item) => {
    setMessage(`"${item.description}" añadido al carrito`);
  };

  const closeModal = () => {
    setMessage(null);
  };

  const value = useMemo(() => {
    const getCartPrice = () =>
      data.reduce((total, item) => {
        const price = Number(item.price || 0);
        const count = Number(item.count || 0);
        return total + price * count;
      }, 0);

    const getItemCount = (item) => {
      const itemId = getItemId(item);
      const existing = data.find((entry) => getItemId(entry) === itemId);
      return existing ? existing.count : 0;
    };

    const addItem = (item) => {
      setData((current) => {
        const itemId = getItemId(item);
        const existingIndex = current.findIndex(
          (entry) => getItemId(entry) === itemId,
        );

        if (existingIndex !== -1) {
          const existing = current[existingIndex];
          const updatedCount = (existing.count || 1) + 1;
          return [
            ...current.slice(0, existingIndex),
            { ...existing, ...item, id: itemId, count: updatedCount },
            ...current.slice(existingIndex + 1),
          ];
        }

        return [...current, { ...item, id: itemId, count: 1 }];
      });
    };

    const decrementItem = (item) => {
      setData((current) => {
        const itemId = getItemId(item);
        const existingIndex = current.findIndex(
          (entry) => getItemId(entry) === itemId,
        );
        if (existingIndex === -1) return current;

        const existing = current[existingIndex];
        const updatedCount = Math.max(1, (existing.count || 1) - 1);
        if (updatedCount === 0) {
          return current.filter((entry) => getItemId(entry) !== itemId);
        }

        return [
          ...current.slice(0, existingIndex),
          { ...existing, ...item, id: itemId, count: updatedCount },
          ...current.slice(existingIndex + 1),
        ];
      });
    };

    const setItemCount = (item, count) => {
      setData((current) => {
        const itemId = getItemId(item);
        const normalized = Math.max(0, Math.floor(Number(count) || 0));
        const existingIndex = current.findIndex(
          (entry) => getItemId(entry) === itemId,
        );

        if (existingIndex === -1) {
          if (normalized === 0) return current;
          return [...current, { ...item, id: itemId, count: normalized }];
        }

        if (normalized === 0) {
          return current;
        }

        const existing = current[existingIndex];
        return [
          ...current.slice(0, existingIndex),
          { ...existing, ...item, id: itemId, count: normalized },
          ...current.slice(existingIndex + 1),
        ];
      });
    };

    return {
      data,
      addItem,
      decrementItem,
      setItemCount,
      getItemCount,
      getCartPrice,
      deleteConfirm,
      showDeleteConfirm,
      confirmDelete,
      cancelDelete,
      message,
      showAdded,
      closeModal,
    };
  }, [cancelDelete, confirmDelete, data, deleteConfirm, message]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
