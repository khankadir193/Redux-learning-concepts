import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../ThemeToggleSlice/themeSlice";
import { useState } from "react";

const ToggleComponent = () => {
    // const [toggle, setToggle] = useState('light');
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.toggleTheme.theme);

    return (
        <div style={{ backgroundColor: theme === 'dark' ? '#121212' : '#ffffff', height: '100vh', width: '100%' }}>
            <button onClick={() => dispatch(toggleTheme())}>toggle</button>
            <p>{theme}</p>
        </div>
    )
};

export default ToggleComponent;