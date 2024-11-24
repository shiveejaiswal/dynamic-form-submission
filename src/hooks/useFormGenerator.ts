// src/components/hooks/useFormGenerator.ts

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormField {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  validation?: {
    pattern?: string;
    message?: string;
  };
  options?: { value: string; label: string }[];
}

interface FormData {
  [key: string]: string;
}

const useFormGenerator = (schema: { fields: FormField[] }) => {
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
