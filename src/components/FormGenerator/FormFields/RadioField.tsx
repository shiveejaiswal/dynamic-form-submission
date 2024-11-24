import React from 'react';
import { RadioField as RadioFieldType } from '../../../types/schema';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface RadioFieldProps {
  field: RadioFieldType;
  register: UseFormRegister<any>;
  error?: FieldError;
}

const RadioField: React.FC<RadioFieldProps> = ({ field, register, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="flex flex-col">
        {field.options?.map((option, index) => (
          <label key={index} className="flex items-center space-x-2 mb-1">
            <input
              type="radio"
              value={option.value}
              {...register(field.id, {
                required: field.required ? 'This field is required' : false
              })}
              className="h-4 w-4 text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
            />
            <span className="text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
};

export default RadioField;
