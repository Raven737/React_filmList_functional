const PopUp = ({ togglePopUp, date }) => {
    return (
        <div className="overlay">
            <div className="pop-up">
                <button className="close" onClick={() => togglePopUp()}>
                    &#10006;
                </button>
                <p>Release date: {date}</p>
            </div>
        </div>
    );
};

export default PopUp;
