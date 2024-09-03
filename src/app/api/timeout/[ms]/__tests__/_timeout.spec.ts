import { timeout } from '../_timeout';


beforeAll(() => {

  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');
});

it("Should successfully timeout for 300ms", async () => {

  const ms = 300;

  const timeoutPromise = timeout(ms);

  jest.runAllTimers();

  // https://stackoverflow.com/questions/51126786/jest-fake-timers-with-promises
  await timeoutPromise

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 300);
});