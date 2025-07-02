
const CardList = ({ data }) => {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {data.map((item, index) => {
                return (
                    <div key={index} className="col">
                        <div className="card shadow-sm">
                            <img 
                                src={item.image} 
                                className="card-img-top" 
                                alt={`Imagen de ${item.name}`} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.species} - {item.status}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardList;
