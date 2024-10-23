import BtnDelete from "@/ui/atoms/BtnCardDelete";
import BtnEdit from "@/ui/atoms/BtnCardEdit";
import DataCard from "@/ui/atoms/DataCard";
import TitleCard from "@/ui/atoms/TitleCard";

export default function Card() {
  return (
    <div className="card-container">
      <TitleCard />
      <DataCard />
      <div className="card-actions">

        <BtnEdit />
        <BtnDelete />
      </div>
    </div>
  );
}



