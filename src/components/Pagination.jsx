import { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const Pagination = ({ max_page, setPageNum, lightTheme, pageStep }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (event) => {
        let newInputValue = event.target.value;
        if (newInputValue < 1) newInputValue = 1;
        if (newInputValue > max_page) newInputValue = max_page;
        setInputValue(newInputValue);
    };

    const handleSetPage = () => {
        setPageNum(inputValue);
        setInputValue("");
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="d-sm-flex">
                <Button
                    className="me-1 mb-1"
                    variant={lightTheme ? "success" : "secondary"}
                    onClick={() => pageStep(-10)}
                >
                    - 10
                </Button>
                <Button
                    className="me-1 mb-1"
                    variant={lightTheme ? "success" : "secondary"}
                    onClick={() => pageStep(-1)}
                >
                    - 1
                </Button>
                <Form className="d-flex">
                    <FormControl
                        style={{
                            background: lightTheme ? "lightblue" : "grey",
                        }}
                        className="me-1 mb-1"
                        type="number"
                        placeholder="Введіть номер стор."
                        value={inputValue}
                        onChange={handleInputValue}
                    />
                    <Button
                        className="me-1 mb-1"
                        variant={lightTheme ? "warning" : "secondary"}
                        onClick={handleSetPage}
                    >
                        Пошук
                    </Button>
                </Form>
                <Button
                    className="me-1 mb-1"
                    variant={lightTheme ? "success" : "secondary"}
                    onClick={() => pageStep(1)}
                >
                    + 1
                </Button>
                <Button
                    className="mb-1"
                    variant={lightTheme ? "success" : "secondary"}
                    onClick={() => pageStep(10)}
                >
                    + 10
                </Button>
            </div>
        </div>
    );
    // }
};

export default Pagination;
