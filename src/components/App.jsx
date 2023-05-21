import React, { useState, useEffect } from "react";
import MyContext from "./MyContext";
import Title from "./Title";
import Pagination from "./Pagination";
import Theme from "./Theme";
import Films from "./Films";
import PopUp from "./PopUp";

const App_class = () => {
    const [films, setFilms] = useState(null);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lightTheme, setLightTheme] = useState(true);
    const [releaseData, setReleaseData] = useState(undefined);
    const [title, setTitle] = useState(undefined);
    const [isOpenPopUp, setIsOpenPopUp] = useState(false);

    const MAX_PAGE = 500;
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=ac202904369986b675f1700a286c33f6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setFilms(json);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, [page]);

    const pageStep = (step) => {
        const newPage = Number(page + step);
        if (newPage < 1 || newPage > MAX_PAGE) return null;
        setPage(newPage);
    };

    const setPageNum = (num) => {
        if (!num) return null;
        setPage(Number(num));
    };

    const toggle = () => {
        setLightTheme(!lightTheme);
    };

    const getReleaseDate = (date) => {
        setReleaseData(date);
    };

    const getTitle = (title) => {
        setTitle(title);
    };

    const togglePopUp = () => {
        setIsOpenPopUp(!isOpenPopUp);
    };

    return (
        <MyContext.Provider
            value={{
                films: films,
                page: page,
                isLoading: isLoading,
                error: error,
                lightTheme: lightTheme,
                releaseData: releaseData,
                title: title,
                isOpenPopUp: isOpenPopUp,
                max_page: MAX_PAGE,
                toggle: toggle,
                pageStep: pageStep,
                setPageNum: setPageNum,
            }}
        >
            <div
                className={`col-xxl-10 m-auto ${
                    lightTheme ? "bg-light text-black" : "bg-dark text-white"
                }`}
            >
                <Title />
                <Theme />
                <Pagination />
                <Films
                    lightTheme={lightTheme}
                    error={error}
                    isLoading={isLoading}
                    films={films}
                    getReleaseDate={getReleaseDate}
                    getTitle={getTitle}
                    togglePopUp={togglePopUp}
                />
                {isOpenPopUp && (
                    <PopUp
                        lightTheme={lightTheme}
                        togglePopUp={togglePopUp}
                        title={title}
                        date={releaseData}
                    />
                )}
            </div>
        </MyContext.Provider>
    );
};

export default App_class;
