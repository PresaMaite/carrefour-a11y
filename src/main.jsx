import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Cart from "./pages/Cart.jsx/Cart.jsx";
import { CartProvider } from "./context/CartProvider.jsx";
import { useCart } from "./context/CartContext.jsx";
import CartModal from "./components/CartModal/CartModal";

export function ModalHandler() {
  const { deleteConfirm, confirmDelete, cancelDelete, message, closeModal } =
    useCart();

  return (
    <>
      <CartModal
        onConfirm={deleteConfirm !== null ? confirmDelete : null}
        message={
          deleteConfirm !== null
            ? "¿Eliminar este producto del carrito?"
            : message
        }
        onClose={deleteConfirm !== null ? cancelDelete : closeModal}
        showButtons={deleteConfirm !== null}
        showCloseButton={message !== null}
        confirmText="Sí, eliminar"
      />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <BrowserRouter>
      <ModalHandler />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/carrito" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>,
);
