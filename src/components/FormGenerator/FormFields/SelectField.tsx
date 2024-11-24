import React from 'react';
import { FormField } from '../../../types/schema';
import { UseFormRegister } from 'react-hook-form';

interface SelectFieldProps {
  field: FormField;
  register: UseFormRegister<any>;
  error?: any;
}

const SelectField: React.FC<SelectFieldProps> = ({ field, register, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        {...register(field.id, {
          required: field.required && 'This field is required'
        })}
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
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
