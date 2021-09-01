import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const item = localStorage.getItem(key);
        if (item){
            return (JSON.parse(localStorage.getItem(key)));
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return(initialValue);
        }
    });

    const setStoredValue = value => {
        setValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }
    
    return ([value, setStoredValue]);
}

export default useLocalStorage;