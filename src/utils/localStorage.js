export const setUserToLocalstorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalstorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorgae = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
