export const trimString = (string, maxLength) => {
  if (typeof string !== string && string !== null && string !== undefined)
    string = "" + string;

  return string && string.trim().length > maxLength
    ? `${string.trim().slice(0, maxLength)}...`
    : string;
};

export const getIsValidNumber = (number) => {
  return !Number.isNaN(parseInt(number, 10));
};

export const removeObjPropImmutably = (obj, prop) => {
  const res = { ...obj };
  delete res[prop];
  return res;
};
