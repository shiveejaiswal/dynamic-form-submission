import React from 'react';
import { SelectField as SelectFieldType } from '../../../types/schema';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface SelectFieldProps {
  field: SelectFieldType;
  register: UseFormRegister<any>;
  error?: FieldError;
}

const SelectField: React.FC<SelectFieldProps> = ({ field, register, error }) => {
  return (
    <div className="mb-4">
      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        id={field.id}
        {...register(field.id, {
          required: field.required ? 'This field is required' : false
        })}
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700"
      >
        <option value="">Select an option</option>
        {field.options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
};

export default SelectField;

