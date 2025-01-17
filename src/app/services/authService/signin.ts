import { httpClient } from "../httpClient";

export interface SigninRequestBody {
  email: string;
  password: string;
}

interface SigninResponse {
  accessToken: string;
}

export async function signin(requestBody: SigninRequestBody) {
  const { data } = await httpClient.post<SigninResponse>(
    "/auth/signin",
    requestBody,
  );

  return data;
}
