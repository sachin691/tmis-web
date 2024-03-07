import Cookies from "js-cookie";

// type CookieOptions = {
//   expires?: number | Date,
//   path?: string,
//   domain?: string,
//   secure?: boolean,
// };

export const setCookie = (key, value, options = {}) => {
  Cookies.set(key, value, options);
};

export const getCookie = (key)   => {
  return Cookies.get(key);
};

export const removeCookie = (key) => {
  Cookies.remove(key);
};
