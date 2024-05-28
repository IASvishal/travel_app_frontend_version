export const validatePassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
};