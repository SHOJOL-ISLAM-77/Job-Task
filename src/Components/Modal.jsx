/* eslint-disable react/prop-types */

const Modal = ({ showModal, onClose, children }) => {
  return (
    showModal && (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        onClick={onClose}
      >
        <div
          className="bg-white p-8 rounded shadow-md max-w-2xl max-h-2xl overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          
          <button
            className="mt-4 p-2 bg-blue-500 text-white rounded mx-auto hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
