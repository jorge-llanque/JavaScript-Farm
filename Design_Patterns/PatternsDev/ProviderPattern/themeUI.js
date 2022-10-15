export const ThemeContext = React.createContext();

const themes = {
  light: {
    background: "#fff",
    color: "#000",
  },
  dark: {
    background: "#171717",
    color: "fff",
  }
};

function useThemeContext() {
  const theme = useContext(ThemeContext);
  if(!theme){
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return theme;
}

function ThemeProvider({children}) {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  )
}
export default function App() {
  
  return (
    <div className={`App theme-${theme}`}>
      <ThemeProvider>
        <Toggle/>
        <List/>
      </ThemeProvider>
    </div>
  )
}

export function Toggle() {
  const theme= useThemeContext();
  return(
    <label className="switch">
      <input type="checkbox" onClick={theme.toggleTheme}/>
      <span className="slider round"/>
    </label>
  )
}

export function TextBox(){
  const theme = useThemeContext();
  return<li style={theme.theme}>...</li>;
}