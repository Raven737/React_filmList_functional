const PopUp = ({ togglePopUp, date, title }) => {
    return (
        <div className="position-fixed top-0 start-0 bottom-0 end-0 d-flex bg-secondary bg-opacity-75">
            <div className="position-relative m-auto bg-white rounded p-5">
                <button className="position-absolute top-0 end-0 m-2" onClick={() => togglePopUp()}>
                    &#10006;
                </button>
                <h4>{title}</h4>
                <span className="fs-5 fst-italic">Release date: </span><span className="fs-5 fw-bold">{date}</span> 
            </div>
        </div>
    );
};

export default PopUp;
