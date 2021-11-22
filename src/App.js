import {
  useThemeDispatch,
  useThemeState,
} from "./context/themeContext/context";
import { dark, light } from "./context/themeContext/actions";

import "./App.css";
function App() {
  const themeChanger = useThemeState();
  const themeDispatch = useThemeDispatch();

  const themeHandler = () => {
    themeChanger.darkMode ? dark(themeDispatch) : light(themeDispatch);
  };
  return (
    <div>
      <div className={`bg ${themeChanger.darkMode ? "bg-dark" : "bg-light"}`}>
        <button
          className={`btn ${themeChanger.darkMode ? "btn-dark" : "btn-light"}`}
          onClick={themeHandler}
        >
          {themeChanger.darkMode ? "DARK MODE" : "LIGHT MODE"}
        </button>
      </div>
    </div>
  );
}

export default App;
