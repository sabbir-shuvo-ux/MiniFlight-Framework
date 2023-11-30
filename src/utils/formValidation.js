const formValidation = (name, email, message, phone) => {
  if (name.trim() === "") {
    throw new Error("Name is empty");
  }
  if (phone === "") {
    throw new Error("Phone is empty");
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Email is not valid");
  }

  if (message.trim() === "") {
    throw new Error("Message is empty");
  }

  return true;
};

export default formValidation;
