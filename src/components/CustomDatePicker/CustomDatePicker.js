import { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

export default function CustomDatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleChange = (event) => {
        console.log('event>>', event);
        
    }

    return(
        <DateRangePicker value={startDate} onChange={handleChange} />
    )
}