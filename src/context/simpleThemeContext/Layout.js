import { MyContext, themes } from "./ThemeApp";
export const Layout = () => {
  const toggleTheme = (myTheme, themeChanger) => {
    if (myTheme.backgroundColor === themes.dark.backgroundColor) {
      localStorage.setItem("darkMode", JSON.stringify(themes.light));
      themeChanger(themes.light);
    } else if (myTheme.backgroundColor === themes.light.backgroundColor) {
      localStorage.setItem("darkMode", JSON.stringify(themes.dark));
      themeChanger(themes.dark);
    }
  };
  return (
    <div>
      <MyContext.Consumer>
        {(context) => (
          <div>
            <div style={context.typeThemes}>
              <button
                onClick={() =>
                  toggleTheme(context.typeThemes, context.themeChanger)
                }
              >
                Change Theme
              </button>
            </div>
          </div>
        )}
      </MyContext.Consumer>
    </div>
  );
};

export default Layout;
