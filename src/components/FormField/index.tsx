import React from "react";

import { LabelContainer, IndicatorNumberContainer, IndicatorNumber, Label, Input } from './styles'

type FormFieldProps = {
    labelText: string
    secureTextEntry?: boolean
    hasIndicatorNumber?: boolean
    indicatorNumber?: string
}

const FormField: React.FC<FormFieldProps> = ({ labelText, secureTextEntry, hasIndicatorNumber, indicatorNumber }) => (
    <React.Fragment>
        <LabelContainer>
            {hasIndicatorNumber && (
                <IndicatorNumberContainer>
                    <IndicatorNumber>{indicatorNumber}</IndicatorNumber>
                </IndicatorNumberContainer>
            )}
            <Label>{labelText}</Label>
        </LabelContainer>
        <Input
            secureTextEntry={secureTextEntry}
        />
    </React.Fragment>
)

export default FormField