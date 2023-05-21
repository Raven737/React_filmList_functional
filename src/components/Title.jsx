import { useContext } from "react";
import MyContext from "./MyContext";

const Title = () => {
    const { page } = useContext(MyContext);
    return (
        <div>
            <h1 className="text-center text-uppercase fw-bold">
                list of movies
            </h1>
            <h2 className="text-center">page № {page}</h2>
        </div>
    );
};

export default Title;
