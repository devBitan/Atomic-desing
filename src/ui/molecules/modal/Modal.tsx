import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, activeTab }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="title-form">
          <h2>Add {activeTab}</h2>
          <span onClick={onClose}>
            <IoMdClose />
          </span>
        </div>

        {activeTab === "vacancies" ? (
          <form>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />

            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" required></textarea>

            <label htmlFor="status">Status:</label>
            <select name="status" id="status" required>
              <option value="">Select status</option>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>

            <label htmlFor="company">Company:</label>
            <select name="company" id="company" required>
              <option value="">Select company</option>
              <option value="riwi">Riwi</option>
              <option value="google">Google</option>
            </select>

            <button type="submit" className="active" onClick={onClose}>
              Save
            </button>
          </form>
        ) : (
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="adress">Address:</label>
            <input type="text" id="adress" name="adress" required />

            <label htmlFor="contact">Contact:</label>
            <input type="text" id="contact" name="contact" required />

            <button type="submit" className="active2" onClick={onClose}>
              Save
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;
