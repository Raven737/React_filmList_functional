import React from "react";
import ThemeContext from "./Context";
import Title from "./Title";
import Pagination from "./Pagination";
import Films from "./Films";
import Theme from "./Theme";
import PopUp from "./PopUp";

class App_class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: null,
            page: 1,
            isLoading: true,
            error: null,
            lightTheme: true,
            releaseData: undefined,
            isOpenPopUp: false,
        };
    }

    componentDidMount() {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=ac202904369986b675f1700a286c33f6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.state.page}&with_watch_monetization_types=flatrate`;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                this.setState({ films: json, isLoading: false });
            })
            .catch((error) => {
                this.setState({ error: error, isLoading: false });
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            let url = `https://api.themoviedb.org/3/discover/movie?api_key=ac202904369986b675f1700a286c33f6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.state.page}&with_watch_monetization_types=flatrate`;
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    this.setState({ films: json, isLoading: false });
                })
                .catch((error) => {
                    this.setState({ error: error, isLoading: false });
                });
        }
    }

    MAX_PAGE = 500;

    pageStep = (step) => {
        const newPage = Number(this.state.page + step);
        if (newPage < 1 || newPage > this.MAX_PAGE) return null;
        this.setState({ page: newPage });
    };

    setPage = (num) => {
        if (!num) return null;
        this.setState({ page: Number(num) });
    };

    toggle = () => {
        this.setState({ lightTheme: !this.state.lightTheme });
    };

    getReleaseDate = (date) => {
        this.setState({ releaseDate: date });
    };

    togglePopUp = () => {
        this.setState({ isOpenPopUp: !this.state.isOpenPopUp });
    };

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <div
                    className={
                        this.state.lightTheme ? "light-theme" : "dark-theme"
                    }
                >
                    <Title />
                    <Theme toggle={this.toggle} />
                    <Pagination
                        page={this.state.page}
                        max_page={this.MAX_PAGE}
                        pageStep={this.pageStep}
                        setPage={this.setPage}
                    />
                    <Films
                        page={this.state.page}
                        getReleaseDate={this.getReleaseDate}
                        togglePopUp={this.togglePopUp}
                    />
                    {this.state.isOpenPopUp && (
                        <PopUp
                            date={this.state.releaseDate}
                            togglePopUp={this.togglePopUp}
                        />
                    )}
                </div>
            </ThemeContext.Provider>
        );
    }
}

export default App_class;
