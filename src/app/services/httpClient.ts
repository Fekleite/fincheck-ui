import axios from "axios";

import { localStorageKeys } from "../config/localStorageKeys";
import { sleep } from "../utils/sleep";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

httpClient.interceptors.request.use(async (req) => {
  const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }

  await sleep(1000);

  return req;
});
