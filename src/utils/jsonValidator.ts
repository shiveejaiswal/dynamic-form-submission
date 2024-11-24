import { FormSchema, FormField } from '../types/schema';

export const validateJson = (json: any): string | null => {
  // Check if required top-level fields exist
  if (!json.formTitle || typeof json.formTitle !== 'string') {
    return 'Missing or invalid formTitle';
  }

  if (!json.formDescription || typeof json.formDescription !== 'string') {
    return 'Missing or invalid formDescription';
  }

  if (!Array.isArray(json.fields)) {
    return 'fields must be an array';
  }

  // Validate each field
  for (const field of json.fields) {
    const error = validateField(field);
    if (error) return error;
  }

  return null;
};

const validateField = (field: any): string | null => {
  if (!field.id || typeof field.id !== 'string') {
    return 'Field missing required id property';
  }

  if (!field.type || !['text', 'email', 'select', 'radio', 'textarea'].includes(field.type)) {
    return `Invalid field type for field ${field.id}`;
  }

  if (!field.label || typeof field.label !== 'string') {
    return `Missing or invalid label for field ${field.id}`;
  }

  if (typeof field.required !== 'boolean') {
    return `Missing or invalid required property for field ${field.id}`;
  }

  // Validate options for select and radio fields
  if ((field.type === 'select' || field.type === 'radio') && (!Array.isArray(field.options) || field.options.length === 0)) {
    return `Missing or invalid options for ${field.type} field ${field.id}`;
  }

  return null;
};