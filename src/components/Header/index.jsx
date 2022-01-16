import React from "react";
import { Link } from "react-router-dom";

import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <Link to="/" className={styles.headerLink}>
                Main page
            </Link>
            <Link to="/todos" className={styles.headerLink}>
                Todos list
            </Link>
            <Link to="/gallery" className={styles.headerLink}>
                Gallery
            </Link>
        </div>
    )
}

export default Header;