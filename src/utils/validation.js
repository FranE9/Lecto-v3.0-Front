import validator from 'validator';

export function validateLogin({ username, password}) {
    return !validator.isEmpty(username) && !validator.isEmpty(password);
}

export function validateRegister({ username, password, name, email }) {
    if (validator.isEmpty(name)) {
        return false;
    }
    if (!validator.isEmail(email)) {
        return false;
    }
    if (validator.isEmpty(username) || username.trim().length <= 2) {
        return false;
    }
    if (validator.isEmpty(password) || password.trim().length <= 2) {
        return false;
    }
    return true;
}

export function validateText(text) {
    return !validator.isEmpty(text);
}

export function validatePdfForm({ archivo_pdf, inicio, final }) {
    if (!archivo_pdf) {
        return false;
    }
    if (validator.isEmpty(inicio)) {
        return false;
    }
    if (validator.isEmpty(final)) {
        return false;
    }
    return true;
}