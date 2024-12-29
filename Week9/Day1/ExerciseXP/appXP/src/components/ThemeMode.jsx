import { useContext } from "react";
import { ThemeModeContext } from "../App";
import "../App.css"

function ThemeMode () {
    const { mode, setMode } = useContext(ThemeModeContext);
    return (
        <div className={mode === "light" ? "light" : "dark"}>
            <button
                onClick={() => setMode((mode) => (mode === "light" ? "dark" : "light"))}>
                {mode === "light" ? "dark" : "light"}
            </button>
        </div>
    )
}
export default ThemeMode;