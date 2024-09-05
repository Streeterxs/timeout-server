/**
 * @jest-environment node
 */

// to test this
// npm run test src/app/api/timeout/\\[ms\\]/__tests__

import { testApiHandler } from "next-test-api-route-handler";

import * as timeoutRouteHandler from "../route";
import { timeout } from '../_timeout';

beforeAll(() => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');
})

// why this is not working?
it.skip("Should successfully timeout for 300ms", async () => {

  const ms = '300';
  const params: Record<string, string | string[]> = {ms};

  const testApiHandlerPromise = testApiHandler({
    appHandler: timeoutRouteHandler,
    params,
    test: async ({ fetch }) => {

      const responsePromise = fetch({ method: "GET" });

      // https://stackoverflow.com/questions/51126786/jest-fake-timers-with-promises
      jest.runAllTimers();
      const response = await responsePromise;

      const json = await response?.json();

      console.log({json})
      expect(response.status).toBe(200);
      expect(json).toStrictEqual({
        error: null,
        success: `Timeouted ${ms}ms`
      });
      expect(setTimeout).toHaveBeenCalledTimes(1);
    },
  });

  // https://stackoverflow.com/questions/51126786/jest-fake-timers-with-promises
  // dont know if this is needed, but since this promise runs inside the package scope I tried it out
  // probably occurs because of the callback code of test function
  // but I tried to modify the code and it stuck right on the setTimeout function
  jest.runAllTimers();

  await testApiHandlerPromise;
});


jest.mock('../_timeout');
it("Should call timeout function with 300 arg", async () => {

  const ms = '300';
  const params: Record<string, string | string[]> = {ms};

  await testApiHandler({
    appHandler: timeoutRouteHandler,
    params,
    test: async ({ fetch }) => {

      const response = await fetch({ method: "GET" });

      const json = await response?.json();

      expect(response.status).toBe(200);
      expect(json).toStrictEqual({
        error: null,
        success: `Timeouted ${ms}ms`
      });
      expect(timeout).toHaveBeenCalledTimes(1);
      expect(timeout).toHaveBeenCalledWith(300)
    },
  });
});