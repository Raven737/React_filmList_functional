import { Component } from "react";
import ThemeContext from "./Context";

class Title extends Component {
    static contextType = ThemeContext;
    render() {
        const { lightTheme, page } = this.context;
        return (
            <div
                className={`filmHeader ${
                    lightTheme ? "light-theme" : "dark-theme"
                }`}
            >
                <h1 className="headline">Favourite Movies</h1>
                <h2 className="pageNumber">Page № {page}</h2>
            </div>
        );
    }
}

export default Title;
