import axios from 'axios';

const baseUrl = 'http://blind.seiker.kr:8010';

interface TriggerSuccessResponse {
  uuid: string;
}

interface TriggerFailureResponse {
  errorMessage: string;
}

export type TriggerResponse =
  | TriggerSuccessResponse
  | TriggerFailureResponse

export interface AddTriggerProps {
  id: number,
  url: string;
  schedule: string;
  header?: string;
  form?: string;
}

export interface RemoveTriggerProps {
  id: number;
  uuid: string;
}

export async function addTrigger({
  id,
  url,
  schedule,
  header,
  form,
}: AddTriggerProps) {
  const formData = new FormData();
  formData.append('url', url);
  formData.append('schedule', schedule);
  if (header !== undefined) {
    formData.append('header', header);
  }
  if (form !== undefined) {
    formData.append('form', form);
  }

  const response = await axios.post<TriggerResponse>(
    baseUrl.concat('/resource/add'),
    formData,
    {
      headers: { 'USER-ID': id },
      timeout: 2500,
    },
  );

  return response.data;
}

export async function removeTrigger({ id, uuid }: RemoveTriggerProps) {
  const formData = new FormData();
  formData.append('uuid', uuid);

  const response = await axios.post<TriggerResponse>(
    baseUrl.concat('/resource/remove'),
    formData,
    {
      headers: { 'USER-ID': id },
      timeout: 2500,
    },
  );

  return response.data;
}
