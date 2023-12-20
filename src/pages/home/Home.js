import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "components/layout/sidebar/Sidebar";
import Select from "components/select/Select";
import Header from "components/layout/header/Header";
import CustomTab from 'components/customTab/CustomTab';
import CustomDatePicker from 'components/CustomDatePicker/CustomDatePicker';
import VariablePie from 'components/variablePie/VariablePie';
import SOVTrending from 'components/sovTrending/SOVTrending';
import ProductShare from 'components/productShare/ProductShare';

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
                        <div className={`${styles.customTab}`}>
                            <CustomTab data={tabData} />
                            <CustomDatePicker />
                        </div>
                        
                        <div className={styles.selectBox}>
                            <div className={styles.item}>
                                <Select />
                            </div>
                            <Select />
                        </div>
                        <div className='row'>
                            <SOVTrending />
                        </div>
                        <div className='row mt-4'>
                            <div className='col-sm col-md-4 col-lg-4'>
                                <VariablePie />
                            </div>
                            <div className='col-sm col-md-8 col-lg-8'>
                                <ProductShare />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}