const PopUp = ({ lightTheme, togglePopUp, date, title }) => {
    return (
        <div className="position-fixed top-0 start-0 bottom-0 end-0 d-flex bg-secondary bg-opacity-75">
            <div
                className={`position-relative m-auto rounded p-5 ${
                    lightTheme ? "bg-light" : "bg-dark"
                } `}
            >
                <button
                    className="position-absolute top-0 end-0 m-2"
                    onClick={() => togglePopUp()}
                >
                    &#10006;
                </button>
                <h4 className={lightTheme ? "text-black" : "text-white"}>
                    {title}
                </h4>
                <span
                    className={`fs-5 fst-italic ${
                        lightTheme ? "text-black" : "text-white"
                    }`}
                >
                    Release date :
                </span>
                <span
                    className={`fs-5 fw-bold ${
                        lightTheme ? "text-black" : "text-white"
                    }`}
                >
                    {date}
                </span>
            </div>
        </div>
    );
};

export default PopUp;
