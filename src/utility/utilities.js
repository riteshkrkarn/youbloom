export const validatePhone = (value) => {
  if (!value) return "Phone number is required";
  if (!/^\+\d{1,4}\d{6,14}$/.test(value)) {
    return "Please enter a valid phone number starting with country code (e.g., +1, +44, +254)";
  }
  return "";
};
