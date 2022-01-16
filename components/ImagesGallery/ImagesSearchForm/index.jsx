import React, {useState} from "react";

import styles from "./ImagesSearchForm.module.css";
import Input from "../../common/Input";
import Button from "../../common/Button";

const ImagesSearchForm = ({ onSubmit, imageName }) => {

    const [valueInput, setValueInput] = useState(imageName);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(event.target.imageName.value);
    }

    const handleChangeInput = (event) => {
        setValueInput(event.target.value);
    }

    return (
        <form className={styles.imageSearchForm} onSubmit={handleSubmit}>
            <Input
                name="imageName"
                value={valueInput}
                onChange={handleChangeInput}
            />
            <Button buttonText="Search" type="submit" />
        </form>
    )
}

export default ImagesSearchForm;