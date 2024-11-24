import React from 'react';
import { FormField } from '../../../types/schema';
import { UseFormRegister } from 'react-hook-form';

interface RadioFieldProps {
  field: FormField;
  register: UseFormRegister<any>;
  error?: any;
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
          <label key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              value={option.value}
              {...register(field.id, {
                required: field.required && 'This field is required'
              })}
              className="h-4 w-4 text-blue-500 focus:ring-0"
            />
            <span>{option.label}</span>
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
