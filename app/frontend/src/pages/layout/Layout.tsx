import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";
import kelalogo from "../../assets/Logo_Kela_valkoinen.png";
import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <img src={kelalogo} alt="Kela logo" aria-label="Kela logo" height="25px" className={styles.kelaLogo} />
                        <h3 className={styles.headerTitle}> GPT Chatbot + Kela data - demo</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Keskustele
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Kysy
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>
                        Azure OpenAI + Cognitive Search &nbsp;&nbsp;
                        <a href="https://aka.ms/entgptsearch" target={"_blank"} title="Github repository linkki">
                            <img
                                src={github}
                                alt="Github logo"
                                aria-label="Linkki github repositoryyn"
                                width="20px"
                                height="20px"
                                className={styles.githubLogo}
                            />
                        </a>
                    </h4>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
