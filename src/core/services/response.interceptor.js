import axios from "axios";
import { get } from "lodash";

class FetchError extends Error {
  constructor(res, message) {
    super(res, message);
  }
}

export function responseInterceptors(response) {
  if ([200, 201].includes(response.status)) {
    return response.data;
  } else {
    throw new FetchError(response.status, response.statusText);
  }
}

export function responseError(error) {
  // Do something with response error
  if (!axios.isCancel(error)) {
    const msg = get(error, "response.data.message", "");

    console.log(msg || get(error, "response.data.message", "Unknown Error!!!"));
  } else {
    throw new FetchError(error.status, error.statusText);
  }
}
