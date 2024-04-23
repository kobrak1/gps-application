import { useTheme } from '../../../context/ThemeProvider'

const DarkModeButton = () => {
  const {theme, setTheme} = useTheme()

  return (
    <div className={`dark-mode ${!theme === false && "dark"}`}>
      <span
        className={`material-symbols-outlined ${!theme && "dark"}`}
        onClick={() => setTheme(!theme)}
        style={{ cursor: "pointer" }}
      >
        {theme ? "light_mode" : "dark_mode"}
      </span>
    </div>
  )
}

export default DarkModeButton;
