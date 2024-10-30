import BtnDelete from "@/ui/atoms/BtnCardDelete";
import BtnEdit from "@/ui/atoms/BtnCardEdit";
import DataCard from "@/ui/atoms/DataCard";

type DataProps = {
  data: [],
  activeTab: string
};

const Card: React.FC<DataProps> = ({ data, activeTab }) => {
  
  return (
    <>
      {data?.map((item, index) => (
        <div key={index} className="card-container">
          <DataCard info={item} activeTab={activeTab}
          />
          <div className="card-actions">
            <BtnEdit id={item} />
            <BtnDelete id={item} />
          </div>
        </div>
        ))
      }
    </>
  );
}

export default Card;