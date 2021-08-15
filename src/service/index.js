import intentJson from '../intents.json';

export const fetchIntentData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(intentJson);
    }, 1500);
  });
};
