import React from 'react'
import styled from "styled-components";
import {Input as MUIinput} from "@mui/material";
import {InputProps} from "@mui/material/Input/Input";

export const Input: React.FC<InputProps> = ({...props}) => {
    return <StyledInput {...props}/>
}

const StyledInput = styled(MUIinput)``;