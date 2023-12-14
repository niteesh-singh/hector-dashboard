import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "components/layout/sidebar/Sidebar";
import Select from "components/select/Select";
import Header from "components/layout/header/Header";
import CustomTab from 'components/customTab/CustomTab';
import CustomDatePicker from 'components/CustomDatePicker/CustomDatePicker';

import styles from "./home.module.scss";

const tabData = [
    {
        title: "BRAND SOV",
        eventKey: "brandSov"
    },
    {
        title: "PRODUCT SOV",
        eventKey: "productSoc"
    }
]

export default function Home() {
    return (
        <Router>
            <div className={styles.mainPage} id="wrapper">
                <Sidebar />
                <div id="page-content-wrapper" className={styles.pageWrapper}>
                    <Header />
                    {/* Add your main content here */}
                    <div className="container-fluid">
                        <div className={styles.customTab}>
                            <CustomTab data={tabData} />
                            <CustomDatePicker />
                        </div>
                        <Select />
                    </div>
                </div>
            </div>
        </Router>
    );
}