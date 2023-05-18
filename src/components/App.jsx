import React, { useState, useEffect } from "react";
import Title from "./Title";
import Pagination from "./Pagination";
import Films from "./Films";
import Theme from "./Theme";
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

    let url = `https://api.themoviedb.org/3/discover/movie?api_key=ac202904369986b675f1700a286c33f6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`;
    const MAX_PAGE = 500;

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
    }, [page, films]);

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
        <div
            className={`col-xxl-10 m-auto ${
                lightTheme ? "bg-light text-black" : "bg-dark text-white"
            }`}
        >
            <Title lightTheme={lightTheme} page={page} />
            <Theme toggle={toggle} lightTheme={lightTheme} />
            <Pagination
                page={page}
                max_page={MAX_PAGE}
                pageStep={pageStep}
                setPageNum={setPageNum}
                lightTheme={lightTheme}
            />
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
                    date={releaseData}
                    title={title}
                    togglePopUp={togglePopUp}
                />
            )}
        </div>
    );
};

export default App_class;
