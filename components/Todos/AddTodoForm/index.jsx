import React, {useCallback} from "react";

import styles from './AddTodoForm.module.css';
import Input from "../../common/Input";
import Button from "../../common/Button";
import { Form, Formik, Field } from "formik";
import * as Yup from 'yup';

// Первый способ валидации
const validateTodo = (value) => {
    let error;
    if(!value) {
        error = 'Это поле не должно быть пустым'
    }
    return error;
}

// Второй способ валидации
const validate = (values) => {
    console.log(values);
    const errors = {};
    if(!values.todo) {
        errors.todo = 'Это поле не должно быть пустым';
    }
    return errors;
}

// Третий способ валидации
const validationSchema = Yup.object().shape({
    todo: Yup.string().required('Это поле не должно быть пустым'),
});

const AddTodoForm = ({ onAddTodo }) => {

    const handleSubmit = useCallback((values) => {
        onAddTodo && onAddTodo(values.todo);
        }, [onAddTodo]
    );

    return (
        <Formik
            initialValues={{ todo: '' }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {(props) =>
                <Form className={styles.addTodoForm}>
                    <div>
                        <Field name="todo" >
                            {
                                ({ field, form, meta }) => {
                                    return(
                                        <Input
                                            value={field.value}
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
                                            name={field.name}
                                            error={form.errors.todo}
                                        />
                                    )
                                }
                            }
                        </Field>
                    </div>

                    <Button buttonText='Add todo' type="submit" />
                </Form>
            }
        </Formik>
    )
}

export default AddTodoForm;