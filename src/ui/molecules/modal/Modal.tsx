"use client";
import { IBasicCompany, ICompany } from "@/models/company.model";
import { IBasicVacant, IVacant } from "@/models/vacant.model";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import { CompanyService } from "@/services/companies.service";
import { VacantService } from "@/services/vacancies.service";

interface ModalProps {
  isOpen: boolean;
  activeTab: string;
  data?: IVacant | ICompany;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, activeTab, data, onClose }) => {
  if (!isOpen) return null;

  const initialVacantForm: IVacant = {
    title: "",
    description: "",
    status: "",
    companyId: "",
  };

  const initialCompanyForm: ICompany = {
    name: "",
    location: "",
    contact: "",
  };

  const [form, setForm] = useState<IVacant | ICompany>(
    activeTab === "vacancies" ? initialVacantForm : initialCompanyForm
  );

  // Use effect to set initial form values based on activeTab and data
  useEffect(() => {
    if (data) {
      setForm(activeTab === "vacancies" ? (data as IVacant) : (data as ICompany));
    } else {
      setForm(activeTab === "vacancies" ? initialVacantForm : initialCompanyForm);
    }
  }, [data, activeTab]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (activeTab === "vacancies") {
        if (data) {
          await new VacantService().update(data?.id.toString(), form as IVacant);
        } else {
          await new VacantService().create(form as IVacant);
        }
      } else {
        if (data) {
          await new CompanyService().update(data?.id.toString(), form as ICompany);
        } else {
          await new CompanyService().create(form as ICompany);
        }
      }
      onClose();
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="title-form">
          <h2>{data ? `Edit ${activeTab}` : `Add ${activeTab}`}</h2>
          <span onClick={onClose}>
            <IoMdClose />
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          {activeTab === "vacancies" ? (
            <>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" value={(form as IVacant)?.title} onChange={handleChange} required />

              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description" value={(form as IVacant)?.description} onChange={handleChange} required></textarea>

              <label htmlFor="status">Status:</label>
              <input type="text" id="status" name="status" value={(form as IVacant)?.status} onChange={handleChange} required />

              <label htmlFor="company">Company:</label>
              <input type="text" id="company" name="company" value={(form as IVacant)?.company?.name} onChange={handleChange} required />
            </>
          ) : (
            <>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={(form as ICompany)?.name} onChange={handleChange} required />

              <label htmlFor="location">Location:</label>
              <input type="text" id="location" name="location" value={(form as ICompany)?.location} onChange={handleChange} required />

              <label htmlFor="contact">Contact:</label>
              <input type="text" id="contact" name="contact" value={(form as ICompany)?.contact} onChange={handleChange} required />
            </>
          )}
          <button type="submit" className="active">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
