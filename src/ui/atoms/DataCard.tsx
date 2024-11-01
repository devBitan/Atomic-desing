type DataCardProps = {
    info: any,
    activeTab: string,
};

const DataCard: React.FC<DataCardProps> = ({ info, activeTab }) => {
    return (
        <>
            {activeTab === "vacancies" ? (
                <>
                    <h3>{info.title}</h3>
                    <p>Description: {info.description}</p>
                    <p>Status: {info.status}</p>
                    <p>Company: {info.company.name}</p>
                </>
            ) : (
                <>
                    <h3>{info.name}</h3>
                    <p>City: {info.location}</p>
                    <p>Contac: {info.contact}</p>
                </>
            )}
        </>
    )
}

export default DataCard;