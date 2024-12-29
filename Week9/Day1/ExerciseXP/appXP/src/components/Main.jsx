import { useContext } from "react";
import { ThemeModeContext } from "../App";
import ThemeMode from "./ThemeMode";


const Main = (props) => {
  const { mode } = useContext(ThemeModeContext);
  return (
    <div  className={mode}>
          <h2>Main Screen</h2>
          <ThemeMode/>
    </div>
  );
};
export default Main;
