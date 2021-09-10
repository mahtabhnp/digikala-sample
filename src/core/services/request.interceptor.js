export function requestInterceptors(request) {
  request.headers["token"] = "mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv";
  return request;
}

export function requestError(error) {
  return Promise.reject(error);
}
