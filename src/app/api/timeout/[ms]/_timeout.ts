export const timeout = async (ms: number = 0) => {

  const timeoutPromise = new Promise((resolve, reject) => {

    setTimeout(async () => {
      resolve('timeouted');
    }, ms);
  });

  await timeoutPromise;
};
