import axios from 'axios';

const baseUrl = 'http://blind.seiker.kr:8010';

interface StatusSuccessResponse {
  [uuid: string]: {
    schedule: string,
    url: string,
    user: string,
  }
}

interface StatusFailureResponse {
  errorMessage: string,
}

export type StatusResponse =
  | StatusSuccessResponse
  | StatusFailureResponse

export async function getStatus(id: number) {
  const response = await axios.get<StatusResponse>(
    baseUrl.concat('/resource'),
    {
      headers: { 'USER-ID': id.toString() },
      timeout: 2500,
    },
  );

  return response.data;
}
