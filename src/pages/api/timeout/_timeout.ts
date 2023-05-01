
export const timeout = async (ms: number = 100) => {

  const timeoutPromise = new Promise((resolve, reject) => {

    setTimeout(async () => {
      resolve('timeouted');
      console.log({ms})
    }, ms);
  });

  await timeoutPromise;
}
