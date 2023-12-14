import React from 'react';
import menuIcon from "assets/icons/collapseMenu.svg";
import hectorImage from "assets/images/Group.png";
import overview from "assets/icons/Home.svg";
import dashboard from "assets/icons/dashboard.svg";
import payment from "assets/icons/payment.svg";
import settings from "assets/icons/Settings.svg";
import amazon from "assets/images/amazon.png";
import flipkart from "assets/images/flipkart.png";
import myntra from "assets/images/myntra.png";
import nyka from "assets/images/nyka.png";

import styles from "./sidebar.module.scss";


const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.blackSidebar}>
        <ul>
          <li><img src={amazon} alt='not found' /></li>
          <li><img src={flipkart} alt='not found' /></li>
          <li><img src={myntra} alt='not found' /></li>
          <li><img src={nyka} alt='not found' /></li>
        </ul>
      </div>
      <div id="wrapper" className={styles.toggled}>
          <div id="sidebar-wrapper">
              <div className={styles.brandLogo}><img src={menuIcon} alt='not found' /> <img src={hectorImage} className={styles.hectorImg} alt='not found' /> Hector</div>
              <ul className={`sidebar-nav ${styles.list}`}>
                  <li><a href="#"><img src={overview} alt='not found' />Overview</a></li>
                  <li className={styles.expand}><a href="#"><img src={dashboard} alt='not found' />Dashboards</a></li>
                  <ul>
                    <li className={styles.active}><a href='#'>SOV Analyser</a></li>
                    <li><a href='#'>Amazon Promotion</a></li>
                  </ul>
                  <li><a href="#"><img src={payment} alt='not found' />Payment</a></li>
                  <li><a href="#"><img src={settings} alt='not found' />Settings</a></li>
              </ul>
          </div>
      </div>
    </div>
  );
}

export default Sidebar;
