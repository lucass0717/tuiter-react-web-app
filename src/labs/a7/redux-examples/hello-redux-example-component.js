import {useSelector} from "react-redux";


const HelloReduxExampleComponent = () => {
    const {message, image} = useSelector((state) => state.hello);
    return (
        <>
            <h3>{message}</h3>
            <p>{image}</p>
        </>
    );
}

export default HelloReduxExampleComponent;