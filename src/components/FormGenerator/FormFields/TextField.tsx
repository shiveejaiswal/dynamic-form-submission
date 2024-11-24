import React from 'react';
import { FormField } from '../../../types/schema';
import { UseFormRegister } from 'react-hook-form';

interface TextFieldProps {
  field: FormField;
  register: UseFormRegister<any>;
  error?: any;
}

const TextField: React.FC<TextFieldProps> = ({ field, register, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type="text"
        {...register(field.id, {
          required: field.required && 'This field is required',
          pattern: field.validation?.pattern
            ? {
                value: new RegExp(field.validation.pattern),
                message: field.validation.message || 'Invalid input'  // Ensure the message is always a string
              }
            : undefined
        })}
        placeholder={field.placeholder}
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
};

export default TextField;
