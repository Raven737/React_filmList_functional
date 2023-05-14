const Title = ({ lightTheme, page }) => {
    return (
        <div
            className={`filmHeader ${
                lightTheme ? "light-theme" : "dark-theme"
            }`}
        >
            <h1 className="text-center text-uppercase fw-bold">
                list of movies
            </h1>
            <h2 className="text-center">page № {page}</h2>
        </div>
    );
};

export default Title;
