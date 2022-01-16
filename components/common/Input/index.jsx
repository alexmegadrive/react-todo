import React, { useMemo } from "react";

import styles from './Input.module.css';

const Input = ({ error, variation, ...props }) => {
    const className = useMemo(() => {
        if(error) return styles.errorInput;

        switch (variation) {
            case 'error':
                return styles.errorInput;
            case 'secondary':
                return styles.secondaryInput;
            case 'primary':
            default:
                return styles.primaryInput;
        }
    },[variation, error]);

    return (
        <>
            <input className={className} {...props} />
            { error && <div className={styles.errorMessage}>{error}</div> }
        </>
    )
}

export default Input;