import React from 'react';
import { useForm } from 'react-hook-form';
import { FormSchema } from '../../types/schema';
import TextField from './FormFields/TextField';
import EmailField from './FormFields/EmailField';
import SelectField from './FormFields/SelectField';
import RadioField from './FormFields/RadioField';
import TextareaField from './FormFields/TestAreaField';

interface FormPreviewProps {
  schema: FormSchema;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (data: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    alert('Form submitted successfully!');
    reset();
  };

  const renderField = (field: any) => {
    const props = {
      key: field.id,
      field,
      register,
      error: errors[field.id]
    };

    switch (field.type) {
      case 'text':
        return <TextField {...props} />;
      case 'email':
        return <EmailField {...props} />;
      case 'select':
        return <SelectField {...props} />;
      case 'radio':
        return <RadioField {...props} />;
      case 'textarea':
        return <TextareaField {...props} />;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">{schema.formTitle}</h2>
        <p className="text-gray-600">{schema.formDescription}</p>
      </div>

      {schema.fields.map(renderField)}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default FormPreview;