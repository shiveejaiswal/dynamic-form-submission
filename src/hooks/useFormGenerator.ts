// src/hooks/useFormGenerator.ts

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormSchema, FormData } from '../types/schema'; // Import types

const useFormGenerator = (schema: FormSchema) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [formData, setFormData] = useState<FormData>({});

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setFormData(data);
    console.log("Form Data Submitted:", data);
  };

  return {
    formData,
    errors,
    register,
    handleSubmit: handleSubmit(onSubmit),
    schema,
  };
};

export default useFormGenerator;
