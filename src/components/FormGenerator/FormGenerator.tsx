// src/components/FormGenerator/FormGenerator.tsx

import React, { useEffect, useState } from 'react';
import { FormSchema } from '../../types/schema'; // No need to import FormData anymore
import useFormGenerator from '../../hooks/useFormGenerator';
import './FormGenerator.css';  // Import the custom styles

interface FormGeneratorProps {
  jsonSchema: string;  // Accept jsonSchema as a string
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ jsonSchema }) => {
  const [parsedSchema, setParsedSchema] = useState<FormSchema | null>(null);

  useEffect(() => {
    try {
      // Parse the JSON string into the schema format
      const schema: FormSchema = JSON.parse(jsonSchema);
      setParsedSchema(schema);
    } catch (error) {
      setParsedSchema(null);
    }
  }, [jsonSchema]);

  // Always call useFormGenerator, but pass it a fallback schema if parsedSchema is invalid
  const schemaToUse = parsedSchema || { formTitle: '', formDescription: '', fields: [] };
  const { formData, errors, register, handleSubmit, schema } = useFormGenerator(schemaToUse);

  // Render the error message if the schema is invalid
  if (!parsedSchema) {
    return <div className="form-error">Invalid or missing form schema</div>;
  }

  return (
    <div className="form-container">
      <h2 className="form-title">{schema.formTitle}</h2>
      <p className="form-description">{schema.formDescription}</p>

      <form className="form" onSubmit={handleSubmit}>
        {schema.fields.map((field) => {
          switch (field.type) {
            case 'text':
            case 'email':
              return (
                <div key={field.id} className="form-field">
                  <label className="form-label">{field.label}</label>
                  <input
                    {...register(field.id, { required: field.required })}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="form-input"
                  />
                  {errors[field.id] && <p className="form-error-message">{field.label} is required</p>}
                </div>
              );
            case 'select':
              return (
                <div key={field.id} className="form-field">
                  <label className="form-label">{field.label}</label>
                  <select {...register(field.id, { required: field.required })} className="form-select">
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors[field.id] && <p className="form-error-message">{field.label} is required</p>}
                </div>
              );
            case 'radio':
              return (
                <div key={field.id} className="form-field">
                  <label className="form-label">{field.label}</label>
                  {field.options?.map((option) => (
                    <div key={option.value} className="form-radio-option">
                      <input
                        {...register(field.id, { required: field.required })}
                        type="radio"
                        value={option.value}
                        id={option.value}
                        className="form-radio-input"
                      />
                      <label htmlFor={option.value} className="form-radio-label">{option.label}</label>
                    </div>
                  ))}
                  {errors[field.id] && <p className="form-error-message">{field.label} is required</p>}
                </div>
              );
            case 'textarea':
              return (
                <div key={field.id} className="form-field">
                  <label className="form-label">{field.label}</label>
                  <textarea
                    {...register(field.id, { required: field.required })}
                    placeholder={field.placeholder}
                    className="form-textarea"
                  />
                  {errors[field.id] && <p className="form-error-message">{field.label} is required</p>}
                </div>
              );
            default:
              return null;
          }
        })}

        <button type="submit" className="form-submit-button">Submit</button>
      </form>

      {formData && <pre className="form-data">{JSON.stringify(formData, null, 2)}</pre>}
    </div>
  );
};

export default FormGenerator;
