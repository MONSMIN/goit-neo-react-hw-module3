import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import style from "./ContactForm.module.css";


const schemaValidation = Yup.object().shape({
    name: Yup.string().min(3, "*Too short!").max(50, "*Too Long!").required("*Required"),
    number: Yup.string().min(3, "*Too short!").required("*Required"),
});

const ContactForm = ({addContact}) => {
    const userNameId = useId();
    const userNumberId = useId();

    const handleSubmit = (values, actions) => {
        addContact(values);
        actions.resetForm();
    }

    return (
        <div className={style["form-container"]}>
            <Formik
                initialValues={{
                    name: "",
                    number: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={schemaValidation}
            >
                <Form className={style.form}>
                    <label htmlFor={userNameId}>Name</label>
                    <Field name="name" id={userNameId}></Field>
                    <ErrorMessage name="name" className={style.error} component="span"/>
                    <label htmlFor={userNumberId} className={style["form-label"]}>Number</label>
                    <Field name="number" id={userNumberId}></Field>
                    <ErrorMessage name="number" className={style.error} component="span"/>
                    <button className={style["form-button"]} type="submit">Add contact</button>
                </Form>
            </Formik>
        </div>
    )
};

export default ContactForm;