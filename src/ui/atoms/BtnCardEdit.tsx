"use client"
import { usePathname } from 'next/navigation'; // hook que permite obtener la ruta actual
import { useState, useEffect } from "react";
import { FiEdit2 } from "react-icons/fi";
const BtnEdit: React.FC = () => {
    return (
        <>
                <button className='btn-edit'> <FiEdit2 /></button>
        </>
    )
}

export default BtnEdit;