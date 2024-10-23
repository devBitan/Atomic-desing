import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "@/ui/pages/Dashboard";

export default function Vacancies() {
  return (
    <>
    <h1 className="title-dashboard">Vacancies</h1>
    <Dashboard/>
    </>
    
  );
}
