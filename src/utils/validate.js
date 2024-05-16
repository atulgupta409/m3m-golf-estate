export const checkValidation = (name, email, phone) => {
  const isValidName = /[a-zA-Z]{2,30}/.test(name);
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const isValidPhone = /^\d{10}$/.test(phone);

  if (!isValidName) return "Please Enter a Valid Name";
  if (!isValidEmail) return "Invalid Email Id";
  if (!isValidPhone) return "Invalid Mobile No.";

  return null;
};
