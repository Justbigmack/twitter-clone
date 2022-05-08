export const calcTimeDifferenceInSeconds = (timestamp: number) => {
  const currentTime = Date.now();
  const differenceInSeconds = Math.round((currentTime - timestamp) / 1000);
  return differenceInSeconds;
};
