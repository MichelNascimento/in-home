import React from "react";

import { Label, Input } from './styles'

type FormFieldProps = {
    labelText: string
    secureTextEntry?: boolean
}

const FormField: React.FC<FormFieldProps> = ({ labelText, secureTextEntry }) => (
    <React.Fragment>
        <Label>{labelText}</Label>
        <Input
            secureTextEntry={secureTextEntry}
        />
    </React.Fragment>
)

export default FormField