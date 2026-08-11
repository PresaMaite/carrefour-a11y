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
            ? "¿Estás seguro de que querer eliminar este producto? Una vez eliminado desaparecerá de la cesta de la compra."
            : message
        }
        onClose={deleteConfirm !== null ? cancelDelete : closeModal}
        showButtons={deleteConfirm !== null}
        showCloseButton={message !== null}
        confirmText="Eliminar"
        title="Eliminar producto"
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
