/// <reference lib="webworker" />

import { factorialCalculator } from "./helper";


addEventListener('message', ({ data }) => {
  const response = factorialCalculator(data);
  postMessage(response);
});
