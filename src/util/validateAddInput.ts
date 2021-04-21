import cronstrue from 'cronstrue';

export type AddInputType =
  | 'schedule'
  | 'url'
  | 'header'
  | 'form'

export interface ValidationResult {
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
          validateStatus: 'error',
          help: 'Please set the triggering schedule!',
        };
      }
      try {
        return {
          validateStatus: 'success',
          help: cronstrue.toString(input),
        };
      } catch (e) {
        return {
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
          validateStatus: 'success',
        };
      } catch (e) {
        return {
          validateStatus: 'error',
          help: 'Invalid JSON object.',
        };
      }
    default:
      return {};
  }
}
