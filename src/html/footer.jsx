import { NavLink } from "react-router";

export default function Footer() {

    return (
        <footer className="footer">
            <nav className="footer__nav">
                <ul className="footer__nav__list">
                    <NavLink><li className="footer__nav__list__item"><img src="../svg/home.svg" alt="" /></li></NavLink>
                    <NavLink><li className="footer__nav__list__item"><img src="../svg/search.svg" alt="" /></li></NavLink>
                    <NavLink><li className="footer__nav__list__item"><img src="../svg/bell.svg" alt="" /></li></NavLink>
                    <NavLink><li className="footer__nav__list__item"><img src="../svg/mail.svg" alt="" /></li></NavLink>
                </ul>
            </nav>
        </footer>
    )
}