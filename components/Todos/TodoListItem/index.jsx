import React, { useState } from "react";

import styles from './TodosListItem.module.css';
import Button from "../../common/Button";
import Input from "../../common/Input";

const TodoListItem = ({ text, id, onDelete, onChangeTodo }) => {
    const [isEditable, setEditState] = useState(false);
    const [currentText, setCurrentText] = useState(text);

    const handleDeleteClick = () => {
        onDelete && onDelete(id);
    }

    const handleInputChange = (event) => {
        setCurrentText(event.target.value);
    }

    const handleEditClick = () => {
        setEditState(true);
    }

    const handleSaveClick = () => {
        if(!currentText) return;
        setEditState(false);
        onChangeTodo(id, currentText);
    }

    const handleCancelClick = () => {
        setEditState(false);
        setCurrentText(text);
    }

    return (
        <li className={styles.todosListItem}>
            {isEditable ? (
                <>
                    <div className={styles.todosListItemTextWrapper}>
                        <Input
                            ds={'sdsd'}
                            adsd={'213242'}
                            onChange={handleInputChange}
                            value={currentText}
                            variation="secondary"
                            error={!currentText && 'Это поле не должно быть пустым'}
                        />
                    </div>
                    <div className={styles.todosListItemButtonWrapper}>
                        <Button
                            onClick={handleSaveClick}
                            buttonText="Save"
                            variation="secondary"
                        />
                    </div>
                    <div className={styles.todosListItemButtonWrapper}>
                        <Button
                            onClick={handleCancelClick}
                            buttonText="Cancel"
                            variation="secondary"
                        />
                    </div>
                </>

                ) : (
                    <>
                    <span className={styles.todosListItemTextWrapper}>{text}</span>
                    <div className={styles.todosListItemButtonWrapper}>
                        <Button
                            onClick={handleEditClick}
                            buttonText="Edit"
                        />
                    </div>
                    <div className={styles.todosListItemButtonWrapper}>
                        <Button
                            onClick={handleDeleteClick}
                            buttonText="Delete"
                        />
                    </div>
                </>
                )
            }
        </li>

    )
}

export default TodoListItem;