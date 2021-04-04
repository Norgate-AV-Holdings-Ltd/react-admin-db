import { email, required, minLength } from "react-admin";

export const validateFirstName = [required()];
export const validateLastName = [required()];
export const validateUserName = [required()];
export const validateEmail = email();
export const validatePassword = [
    required(),
    minLength(6, "Password must be at least 6 characters long"),
];
