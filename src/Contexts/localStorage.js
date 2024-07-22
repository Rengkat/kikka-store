import CryptoJS from "crypto-js";

const secretKey = "123456df";

const encryptData = (data) => {
  try {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  } catch (error) {
    console.error("Encryption error:", error);
    return null;
  }
};

const decryptData = (ciphertext) => {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.error("Decryption error:", error);
    return null;
  }
};

export const addUserToLocalStorage = (user) => {
  const encryptedUser = encryptData(user);
  if (encryptedUser) {
    localStorage.setItem("token", encryptedUser);
  } else {
    console.error("Failed to encrypt user data");
  }
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("token");
};

export const getUserFromLocalStorage = () => {
  try {
    const result = localStorage.getItem("token");
    if (result) {
      const user = decryptData(result);
      return user;
    }
    return null;
  } catch (error) {
    console.error("Failed to retrieve user from local storage:", error);
    return null;
  }
};
