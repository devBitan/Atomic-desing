"use client"
import { usePathname } from 'next/navigation'; // hook que permite obtener la ruta actual
import { useState, useEffect } from "react";
import { MdAddCircle } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const BtnAdd: React.FC = () => {

    const [activeTab, setActiveTab] = useState<string>("");
    const pathname = usePathname(); // capturo la ruta actual
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        if (pathname === "/vacancies") {
            setActiveTab("vacancies");
        } else if (pathname === "/companies") {
            setActiveTab("companies");
        }
    }, [pathname]);

    return (
        <>
            <button
                className={`btn-add ${activeTab === "vacancies" ? "active" : "active2"}`}
                onClick={() => setIsModalOpen(true)}
            >
                <MdAddCircle /> Add {pathname}
            </button>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div className='title-form'>
                            <h2>Add {activeTab}</h2>
                            <span onClick={() => setIsModalOpen(false)}><IoMdClose /></span>
                        </div>

                        {activeTab === "vacancies" ? (
                            <form>
                                <label htmlFor="name">Title:</label>
                                <input type="text" id="name" name="name" required />

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

                                <button type="submit" className='active2' onClick={() => setIsModalOpen(false)}>Save</button>
                            </form>
                        ) : (
                            <form>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />

                                <label htmlFor="adress">Address:</label>
                                <input type="text" id="adress" name="adress" required />

                                <label htmlFor="contact">Contact:</label>
                                <input type="text" id="contact" name="contact" required />

                                <button type="submit" className='active' onClick={() => setIsModalOpen(false)}>Save</button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default BtnAdd;

