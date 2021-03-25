import axios from 'axios';

const baseUrl = 'http://localhost:8010';

interface BindingSuccessResponse {
  userId: string,
}

interface BindingFailureResponse {
  errorMessage: string,
}

export type BindingResponse =
  | BindingSuccessResponse
  | BindingFailureResponse

export interface BoundStatus {
  bound: number,
  userId?: string,
}

export async function isBound() {
  const response = await axios.get<BoundStatus>(
    baseUrl.concat('/user'),
  );

  return response.data;
}

export async function bind(id: number) {
  const response = await axios.post<BindingResponse>(
    baseUrl.concat('/user/bind'),
    null,
    {
      headers: { 'USER-ID': id.toString() },
      timeout: 2500,
    },
  );

  return response.data;
}

export async function unbind(id: number) {
  const response = await axios.post<BindingResponse>(
    baseUrl.concat('/user/unbind'),
    null,
    {
      headers: { 'USER-ID': id.toString() },
      timeout: 2500,
    },
  );

  return response.data;
}
