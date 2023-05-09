import { Component } from "react";
import ThemeContext from "./Context";
import Button from "react-bootstrap/Button";

class RateSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowRate: false,
        };
    }

    static contextType = ThemeContext;

    toggleRate = () => this.setState({ isShowRate: !this.state.isShowRate });

    render() {
        const { lightTheme } = this.context;
        return (
            <div>
                <Button
                    className="mb-1"
                    variant={lightTheme ? "info" : "secondary"}
                    onClick={this.toggleRate}
                >
                    {this.state.isShowRate ? "Hide Rate" : "Show Rate"}
                </Button>
                {this.state.isShowRate && (
                    <span className="rating">{this.props.rating}</span>
                )}
            </div>
        );
    }
}

export default RateSwitch;
