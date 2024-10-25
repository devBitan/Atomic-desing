import BtnDelete from "@/ui/atoms/BtnCardDelete";
import BtnEdit from "@/ui/atoms/BtnCardEdit";
import DataCard from "@/ui/atoms/DataCard";

type DataProps = {
  data: any,
  activeTab: string
};

const Card: React.FC<DataProps> = ({ data, activeTab }) => {
  
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="card-container">
          <DataCard info={item} activeTab={activeTab}
          />
          <div className="card-actions">
            <BtnEdit id={item.id} />
            <BtnDelete id={item.id} />
          </div>
        </div>
        ))
      }
    </>
  );
}

export default Card;