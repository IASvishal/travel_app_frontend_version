export const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
};