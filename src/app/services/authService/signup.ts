import { httpClient } from "../httpClient";

export interface SignupRequestBody {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  accessToken: string;
}

export async function signup(requestBody: SignupRequestBody) {
  const { data } = await httpClient.post<SignupResponse>(
    "/auth/signup",
    requestBody,
  );

  return data;
}
