import { useState } from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import styles from "./customTab.module.scss";

export default function CustomTab({ data }) {
    const [key, setKey] = useState('brandSov');
    return(
        <div className={styles.customTab}>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                >
                {data.map(item => (
                    <Tab eventKey={item.eventKey} title={item.title} />
                ))}
            </Tabs>
        </div>
    )
}