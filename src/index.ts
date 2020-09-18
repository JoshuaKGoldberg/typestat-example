export const withString1 = (arg) => arg;

export const withString2 = (arg) => arg;

export const withString3 = (arg) => arg;

export const usesWithString = () => {
  return [withString1(""), withString2(""), withString3("")];
};
