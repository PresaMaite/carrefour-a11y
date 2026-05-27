import "./cartModal.css";

const CartModal = ({
  message,
  onConfirm,
  onClose,
  showCloseButton = false,
  showButtons = false,
  confirmText = "Aceptar",
}) => {
  if (!message) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        {showCloseButton && (
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        )}
        <p>{message}</p>
        {showButtons && (
          <>
            <button onClick={onConfirm}>{confirmText}</button>
            <button onClick={onClose}>Cancelar</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
