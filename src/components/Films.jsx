import RateSwitch from "./RateSwitch";

const Films = ({
    lightTheme,
    error,
    isLoading,
    films,
    getReleaseDate,
    togglePopUp,
}) => {
    return (
        <div
            className={`container ${lightTheme ? "light-theme" : "dark-theme"}`}
        >
            {error ? (
                <div>Error: {error.message}</div>
            ) : !isLoading ? (
                films.results.map((film) => {
                    return (
                        <div className="filmWrap" key={film.id}>
                            <hr />
                            <h2 className="filmTitle">{film.title}</h2>
                            <RateSwitch
                                rating={film.popularity}
                                lightTheme={lightTheme}
                            />
                            <div className="d-md-flex">
                                <img
                                    className="w-100px"
                                    onClick={() => {
                                        getReleaseDate(film.release_date);
                                        togglePopUp();
                                    }}
                                    src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                                    alt={film.title}
                                />
                                <p className="filmOverview">{film.overview}</p>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Films;
