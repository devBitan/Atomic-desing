"use client"
import BtnDelete from "@/ui/atoms/BtnCardDelete";
import BtnEdit from "@/ui/atoms/BtnCardEdit";
import DataCard from "@/ui/atoms/DataCard";
import { IPageable } from "../../../models/pagination.model";
import { IVacant } from "@/models/vacant.model";
import { ICompany } from "@/models/company.model";
import { useEffect, useState } from 'react';

type DataProps = {
  data?:IVacant | ICompany,
  pagination:IPageable,
  activeTab: string
};

const Card: React.FC<DataProps> = ({ data, activeTab }) => {

  return (
    <>
      {data?.content?.map((item:any) => (
        <div key={item.id} className="card-container">
          <DataCard info={item} activeTab={activeTab}
          />
          <div className="card-actions">
            <BtnEdit item={item}
            />
            <BtnDelete id={item.id} />
          </div>
        </div>
        ))
      }
    </>
  );
}

export default Card;