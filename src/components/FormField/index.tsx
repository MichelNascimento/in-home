import React from "react";

import { LabelContainer, IndicatorNumberContainer, IndicatorNumber, Label, Input, HelpText } from './styles'

type FormFieldProps = {
    labelText: string
    secureTextEntry?: boolean
    hasIndicatorNumber?: boolean
    indicatorNumber?: string
    hasHelpText?: boolean
    helpText?: string
}

const FormField: React.FC<FormFieldProps> = ({
    labelText, secureTextEntry, hasIndicatorNumber, indicatorNumber, hasHelpText, helpText
}) => (
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
        {hasHelpText && (
            <HelpText>
                {helpText}
            </HelpText>
        )}
    </React.Fragment>
)

export default FormField