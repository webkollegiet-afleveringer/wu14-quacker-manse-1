export default function Header() {

    const profile = "../svg/profile.svg";

    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__nav__list">
                    <li className="header__nav__list__item"><img src={profile} alt="" /></li>
                    <li className="header__nav__list__item"><img src="../svg/logo.svg" alt="" /></li>
                    <li className="header__nav__list__item"><img src="../svg/feature.svg" alt="" /></li>
                </ul>
            </nav>
        </header>
    );
}