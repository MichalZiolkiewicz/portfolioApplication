import React, {FC, useRef, useState} from "react";

interface TestProps {
    message?: string;
    onClickHandler: () => void;
    item: {
        name: string,
        id: string,
        nameLength: number,
    }
}

const Test: FC<TestProps> = props => {

    const {message, onClickHandler, item} = props;
    const [counter, setCounter] = useState(0);

    const divRef = useRef<HTMLDivElement>(null);

    const showInConsole = (num: number) => {
        setCounter(counter + 1);
        console.log(item);
    }

    return(
        <div ref={divRef}>
            <h1>Wiadomość</h1>
            <p>{message}</p>
            <p>{counter}</p>
            <button onClick={() => showInConsole(counter)}>
                klik
            </button>
        </div>
    )
}

export default Test;