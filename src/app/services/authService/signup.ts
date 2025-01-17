import { httpClient } from "../httpClient";

interface SignupRequestBody {
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
