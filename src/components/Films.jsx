import RateSwitch from "./RateSwitch";

const Films = ({
    lightTheme,
    error,
    isLoading,
    films,
    getReleaseDate,
    getTitle,
    togglePopUp,
}) => {
    return (
        <div className="d-md-flex flex-wrap pb-5">
            {error ? (
                <div>Error: {error.message}</div>
            ) : !isLoading ? (
                films.results.map((film) => {
                    return (
                        <div className="col-12 col-md-6" key={film.id}>
                            <hr />
                            <div className="text-center fs-6 fw-bold">
                                {film.title}
                            </div>
                            <RateSwitch
                                rating={film.popularity}
                                lightTheme={lightTheme}
                            />
                            <div className="d-md-flex">
                                <img
                                    className="col-12 col-md-6 h-100"
                                    onClick={() => {
                                        getReleaseDate(film.release_date);
                                        getTitle(film.title);
                                        togglePopUp();
                                    }}
                                    src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                                    alt={film.title}
                                />
                                <p className="m-0 ps-2 pe-2 fs-6">
                                    {film.overview}
                                </p>
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
