import { Component } from "react";
import RateSwitch from "./RateSwitch";
import ThemeContext from "./Context";

class Films extends Component {
    static contextType = ThemeContext;

    render() {
        const { lightTheme, error, isLoading, films } = this.context;
        return (
            <div
                className={`container ${
                    lightTheme ? "light-theme" : "dark-theme"
                }`}
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
                                    lightTheme={this.props.lightTheme}
                                />
                                <div className="d-md-flex">
                                    <img
                                        className="w-100"
                                        onClick={() => {
                                            this.props.getReleaseDate(
                                                film.release_date
                                            );
                                            this.props.togglePopUp();
                                        }}
                                        src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                                        alt={film.title}
                                    />
                                    <p className="filmOverview">
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
    }
}

export default Films;
