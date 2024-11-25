/**
 * Function to validate if a form field value matches a specific pattern.
 * @param value - The value to be validated.
 * @param pattern - The regex pattern to validate against.
 * @returns A boolean indicating whether the value matches the pattern.
 */
export const validatePattern = (value: string, pattern: string): boolean => {
  const regex = new RegExp(pattern);
  return regex.test(value);
};

/**
 * Function to check if all required fields are filled in a form.
 * @param fields - The list of form fields.
 * @param formData - The form data to check.
 * @returns A boolean indicating whether all required fields are filled.
 */
export const validateRequiredFields = (fields: any[], formData: { [key: string]: string }): boolean => {
  return fields.every(field => {
    if (field.required) {
      return formData[field.id] && formData[field.id].trim() !== '';
    }
    return true;
  });
};

/**
 * Function to prepare the form data before submission.
 * This can be used to sanitize or format the data.
 * @param formData - The form data to be processed.
 * @returns The processed form data.
 */
export const prepareFormDataForSubmission = (formData: { [key: string]: string }): { [key: string]: string } => {
  // Example: Trimming all values to remove leading/trailing spaces
  const preparedData: { [key: string]: string } = {};
  Object.keys(formData).forEach(key => {
    preparedData[key] = formData[key].trim();
  });
  return preparedData;
};

/**
 * Function to generate an error message based on validation failure.
 * @param fieldId - The field ID for which the error occurred.
 * @param errorType - The type of error (e.g., required, pattern, etc.).
 * @returns A string containing the error message.
 */
export const getErrorMessage = (fieldId: string, errorType: string): string => {
  const errorMessages: { [key: string]: string } = {
    required: `${fieldId} is required.`,
    pattern: `${fieldId} has an invalid format.`,
    // Add other error types as needed
  };

  return errorMessages[errorType] || 'Invalid input.';
};
