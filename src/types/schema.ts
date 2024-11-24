export type FieldType = 'text' | 'email' | 'select' | 'radio' | 'textarea';

export interface FieldOption {
  value: string;
  label: string;
}

export interface ValidationRule {
  pattern?: string;
  message?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

interface BaseFormField {
  id: string;
  type: FieldType;
  label: string;
  required: boolean;
  placeholder?: string;
  validation?: ValidationRule;
}

export interface TextField extends BaseFormField {
  type: 'text' | 'email';
}

export interface SelectField extends BaseFormField {
  type: 'select';
  options: FieldOption[];
}

export interface RadioField extends BaseFormField {
  type: 'radio';
  options: FieldOption[];
}

export interface TextareaField extends BaseFormField {
  type: 'textarea';
}

export type FormField = TextField | SelectField | RadioField | TextareaField;

export interface FormSchema {
  formTitle: string;
  formDescription: string;
  fields: FormField[];
}

export type FormData = Record<string, string>;

export type FieldIds<T extends FormSchema> = {
  [K in T['fields'][number]['id']]: string;
};

export type FormErrors<T extends FormSchema> = Partial<Record<keyof FieldIds<T>, string>>;
//hi