"use client"
import { usePathname } from 'next/navigation'; // hook que permite obtener la ruta actual
import { useState, useEffect } from "react";

const DataCard: React.FC = () => {
    return(
        <>
        <p>Descripcion: joa mani</p>
        <p>Estado: paila</p>
        <p>Compañía: ojalá</p>
        </>
    )
}

export default DataCard;