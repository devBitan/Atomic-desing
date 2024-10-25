import { RiDeleteBinLine } from "react-icons/ri";

type BtnDeleteProps = {
    id: number;
};

const BtnDelete: React.FC<BtnDeleteProps> = ({ id }) => {

    const handleDelete = () => {
        console.log(`Delete item with id: ${id}`);
    };

    return (
        <>
            <button className='btn-delete' onClick={handleDelete}> <RiDeleteBinLine /></button>
        </>
    )
}

export default BtnDelete;