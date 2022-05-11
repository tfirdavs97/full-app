import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import "./header.scss";
import { ThemeContext } from "../../context/theme-context";
import { LangContext } from "../../context/lang-context";
import { lang } from "../../languages/languages";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { language, setLang } = useContext(LangContext);

  const handleChangeTheme = (evt) => {
    setTheme(evt.target.value);
  };

  const handleChangeLang = (evt) => {
    setLang(evt.target.value);
  };
  return (
    <>
      <header className={theme}>
        <div className="container">
          <div className="header__wrpper">
            <Link className="header__logo" to="/">
              {lang[language].header.logo}
            </Link>

            <nav className="header__nav">
              <ul className="nav_list">
                <li className="nav__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav_link-active btn btn-secondary"
                        : "nav_link btn btn-secondary"
                    }
                    to="/users"
                  >
                    {lang[language].header.user}
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav_link-active btn btn-secondary"
                        : "nav_link btn btn-secondary"
                    }
                    to="/posts"
                  >
                    {lang[language].header.post}
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="selects">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleChangeTheme}
                defaultValue={theme}
              >
                <option value="light">
                  {lang[language].header.theme.light}
                </option>
                <option value="dark">{lang[language].header.theme.dark}</option>
              </select>

              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue={language}
                onChange={handleChangeLang}
              >
                <option value="uz">{lang[language].header.lang.uz}</option>
                <option value="ru">{lang[language].header.lang.ru}</option>
                <option value="eng">{lang[language].header.lang.eng}</option>
              </select>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
