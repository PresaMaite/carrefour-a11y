import { useEffect, useRef } from "react";
import "./cartModal.css";

const CartModal = ({
  message,
  onConfirm,
  onClose,
  showCloseButton = false,
  showButtons = false,
  confirmText = "Aceptar",
  title = "Eliminar producto",
}) => {
  const dialogRef = useRef(null);
  const previousFocusRef = useRef(null); // Guarda el botón que abrió el modal

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !message) return;

    // Guarda el elemento activo actual (el botón que lanzó el modal)
    previousFocusRef.current = document.activeElement;

    // Abre el modal nativo (asigna el primer foco automáticamente)
    dialog.showModal();

    // Detiene el scroll del body al abrir el modal
    document.body.style.overflow = "hidden";

    // Función para atrapar el foco dentro del modal
    const handleKeyDown = (e) => {
      if (e.key !== "Tab") return;

      // Selecciona todos los elementos interactivos visibles dentro del modal
      const focusableElements = dialog.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // Si presiona Shift + Tab y está en el primer elemento, va al último
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      }
      // Si presiona Tab y está en el último elemento, va al primero
      else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    // Escucha el teclado solo mientras el modal está abierto
    dialog.addEventListener("keydown", handleKeyDown);

    return () => {
      dialog.removeEventListener("keydown", handleKeyDown);
      dialog.close();

      // Restaura el scroll del body al cerrar el modal
      document.body.style.overflow = "";

      // Devuelve el foco al botón original al cerrar o desmontar el modal
      const originalButton = previousFocusRef.current;

      if (originalButton) {
        if (document.body.contains(originalButton)) {
          originalButton.focus();
        } else {
          // Si el botón desaparece, busca el contenedor del producto (asumiendo un tag li o similar)
          const productItem =
            originalButton.closest("li") || originalButton.parentElement;
          const previousProduct = productItem?.previousElementSibling;

          if (previousProduct) {
            // Busca el primer control interactivo del producto anterior
            const fallbackFocusable =
              previousProduct.querySelector("button, a, input");
            if (fallbackFocusable) {
              fallbackFocusable.focus();
              return;
            }
          }

          // Si era el primer producto, intenta enfocar el siguiente que ocupará su lugar
          const nextProduct = productItem?.nextElementSibling;
          if (nextProduct) {
            const fallbackFocusable =
              nextProduct.querySelector("button, a, input");
            if (fallbackFocusable) {
              fallbackFocusable.focus();
              return;
            }
          }

          // Si el carrito se quedó vacío por completo, enfoca la lista contenedora
          const listContainer = productItem?.parentElement;
          if (listContainer) {
            if (!listContainer.hasAttribute("tabindex")) {
              listContainer.setAttribute("tabindex", "-1");
            }
            listContainer.focus();
          }
        }
      }
    };
  }, [message]);

  if (!message) return null;

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-modal="true"
      aria-label="Eliminar producto"
      aria-describedby="dialog_desc"
      onClose={onClose}
    >
      {showCloseButton && (
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
      )}
      <h2 className="modal-title">{title}</h2>
      <p id="dialog_desc">{message}</p>
      {showButtons && (
        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={onConfirm}>{confirmText}</button>
        </div>
      )}
    </dialog>
  );
};

export default CartModal;
