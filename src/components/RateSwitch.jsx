import { useState } from "react";
import Button from "react-bootstrap/Button";

const RateSwitch = ({ lightTheme, rating }) => {
    const [isShowRate, setShowRate] = useState(false);

    return (
        <div>
            <Button
                className="mb-1"
                variant={lightTheme ? "info" : "secondary"}
                onClick={() => setShowRate(!isShowRate)}
            >
                {isShowRate ? "Hide Rate" : "Show Rate"}
            </Button>
            {isShowRate && <span className="rating">{rating}</span>}
        </div>
    );
};

export default RateSwitch;
