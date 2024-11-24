export type FieldType = 'text' | 'email' | 'select' | 'radio' | 'textarea';

export interface FieldOption {
  value: string;
  label: string;
}

export interface ValidationRule {
  pattern?: string;
  message?: string;
}

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  required: boolean;
  placeholder?: string;
  validation?: ValidationRule;
  options?: FieldOption[];
}

export interface FormSchema {
  formTitle: string;
  formDescription: string;
  fields: FormField[];
}