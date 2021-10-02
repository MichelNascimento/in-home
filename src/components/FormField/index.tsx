import React from "react";

import { Label, Input } from './styles'

type FormFieldProps = {
    labelText: string
    securityTextEntry?: boolean
}

const FormField: React.FC<FormFieldProps> = ({ labelText, securityTextEntry }) => (
    <React.Fragment>
        <Label>{labelText}</Label>
        <Input
            secureTextEntry={securityTextEntry}
        />
    </React.Fragment>
)

export default FormField