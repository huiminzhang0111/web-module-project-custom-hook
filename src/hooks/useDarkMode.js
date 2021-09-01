import useLocalStorage from './useLocalStorage';


const useDarkMode = (initialValues) => {
    const [darkMode, setDarkMode] = useLocalStorage('enabled', initialValues);

    return([darkMode, setDarkMode])
}

export default useDarkMode;