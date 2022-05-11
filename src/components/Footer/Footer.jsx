import React from "react";
import "./footer.scss";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import { LangContext } from "../../context/lang-context";
import { lang } from "../../languages/languages";

const Footer = () => {
    const {theme} = useContext(ThemeContext)
    const {language} = useContext(LangContext)
  return (
    <footer className={theme}>
      <div className="container">
        <div className="footer__wrapper">
          <h5 className="footer__heading">{lang[language].footer.word}</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
