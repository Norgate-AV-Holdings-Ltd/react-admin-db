import { required, maxLength, minValue, maxValue } from "react-admin";

export const validateName = [required(), maxLength(15)];
export const validateInput = [required(), minValue(1), maxValue(40)];
