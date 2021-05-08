import React, {createContext, useState} from 'react';

type ContextProps = {
    name: string
    showMsg: boolean,
    handleSetName(e: React.FormEvent<HTMLInputElement>): void,
    addName(e: React.KeyboardEvent<HTMLInputElement>): void
}

export const AppContext = createContext<Partial<ContextProps>>({});

const AppProvider = (props: any) => {

    const [name, setName] = useState("Nieznajom*");
    const [showMsg, setShowMsg] = useState(false);

    const handleSetName = (e: React.FormEvent<HTMLInputElement>) => {
        let nameValue = e.currentTarget.value;
        let toEdit = nameValue.toLowerCase();
        let readyName = toEdit[0].toUpperCase() + toEdit.slice(1,toEdit.length);

        setName(readyName);
    }

    const addName = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter'){
            setShowMsg(true);
        }
    }

    const storeObject = {
        name,
        showMsg,
        handleSetName,
        addName
    }

    return(
        <AppContext.Provider value={storeObject}>
            {props.children}
        </AppContext.Provider>

    );
}

export default AppProvider;