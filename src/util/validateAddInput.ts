import cronstrue from 'cronstrue';

export type AddInputType =
  | 'schedule'
  | 'url'
  | 'header'
  | 'form'

export interface ValidationResult {
  inputType?: AddInputType;
  validateStatus?: 'success' | 'error' | 'validating';
  help?: string;
}

export interface ValidateAddInputProps {
  inputType: AddInputType;
  input: string;
}

export function validateAddInput({
  inputType,
  input,
}: ValidateAddInputProps): ValidationResult {
  switch (inputType) {
    case 'schedule':
      if (input.length === 0) {
        return {
          inputType,
          validateStatus: 'error',
          help: 'Please set the triggering schedule!',
        };
      }
      try {
        return {
          inputType,
          validateStatus: 'success',
          help: cronstrue.toString(input),
        };
      } catch (e) {
        return {
          inputType,
          validateStatus: 'error',
          help: 'Invalid crontab expression.',
        };
      }
    case 'header':
    case 'form':
      try {
        if (input.length > 0) {
          JSON.parse(input);
        }
        return {
          inputType,
          validateStatus: 'success',
        };
      } catch (e) {
        return {
          inputType,
          validateStatus: 'error',
          help: 'Invalid JSON object.',
        };
      }
    default:
      return {};
  }
}
