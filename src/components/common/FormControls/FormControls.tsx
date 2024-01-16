import styles from './FormControls.module.css'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import React from "react";
import {FieldValidatorType} from "../../../utils/validators";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
    children: React.ReactNode
}
const FormControl: React.FC<FormControlPropsType> = ({meta, children}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta,  ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    )
}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta,  ...restProps} = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}
export const createField = (placeholder: string | undefined,
                            name: string,
                            component: React.FC<WrappedFieldProps>,
                            validators: FieldValidatorType[],
                            props = {},
                            text = "") => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            component={component}
            validate={[validators]}
            {...props}
        />
        {text}
    </div>)