import { Component } from "react";

class PopUp extends Component {
    render() {
        const { togglePopUp, date } = this.props;
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
    }
}

export default PopUp;
