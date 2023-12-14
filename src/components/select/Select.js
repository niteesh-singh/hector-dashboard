import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import styles from "./select.module.scss";

const options = ['Location','PAN India', 'Mumbai', 'Delhi', 'Chennai', 'Banglore'];

export default function Select() {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (option) => {
        // Toggle the selected state of the checkbox
        setSelectedOptions((prevSelectedOptions) => {
        if (prevSelectedOptions.includes(option)) {
            return prevSelectedOptions.filter((item) => item !== option);
        } else {
            return [...prevSelectedOptions, option];
        }
        });
    };

    return(
        <Form className={styles.selectForm}>
            <Form.Select value={selectedOptions} onChange={() => {}}>
                {options.map((option, index) => (
                <option key={index}>
                    <Form.Check
                        type="checkbox"
                        label={option}
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                    />
                </option>
                ))}
            </Form.Select>
        </Form>
    );
}