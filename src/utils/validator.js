
export function ValidateEmail(val) {
    const regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (regEmail.test(val))
        return true;
    else
        return false
}