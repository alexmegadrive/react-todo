import React, {useEffect, useState} from "react";
import moment from 'moment';

const Clock = () => {

    const [time ,setTime] = useState(moment().format('HH:mm:ss'));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(moment().format('HH:mm:ss'));
        },1000);
        return () => {
            clearInterval(intervalId);
        }
    },[])

    return <div>{time}</div>
}

export default Clock