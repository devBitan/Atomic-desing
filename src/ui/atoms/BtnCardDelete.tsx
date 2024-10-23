"use client"
import { usePathname } from 'next/navigation'; // hook que permite obtener la ruta actual
import { useState, useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
const BtnDelete: React.FC = () => {
    return (
        <>
            <button className='btn-delete'> <RiDeleteBinLine /></button>
        </>
    )
}

export default BtnDelete;