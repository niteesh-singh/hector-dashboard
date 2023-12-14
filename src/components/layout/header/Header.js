import { Navbar } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import retryRefresh from "assets/icons/Retry-refresh.svg";
import notificationBell from "assets/icons/Notification-bell.svg";
import downarrow from "assets/icons/downarrow.svg";
import pic from "assets/images/pic.png";

import styles from "./header.module.scss";

export default function Header() {
    return(
        <div className={styles.header}>
                <nav className="navbar navbar-expand navbar-light">
                    <div className={styles.headerNav}>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">Dashboard</li>
                            <li className="nav-item">/</li>
                            <li className="nav-item"> <a className="nav-link" href="#">SOV Analyser</a> </li>
                        </ul>
                        <ul className={styles.rightNav}>
                            <li><img src={retryRefresh} alt='not found' /></li>
                            <li><img src={notificationBell} alt='not found' /></li>
                            <li><img src={pic} alt='not found' style={{ height: '80%' }} /><img src={downarrow} alt='not found' /></li>
                        </ul>
                    </div>
                </nav>
        </div>
    );
}