export const withString1 = (arg: string) => arg;

export const withString2 = (arg: string) => arg;

export const withString3 = (arg: string) => arg;

export const usesWithString = () => {
  return [withString1(""), withString2(""), withString3("")];
};
