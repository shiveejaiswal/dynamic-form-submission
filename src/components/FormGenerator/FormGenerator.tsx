import React, { useState } from 'react';
import { FormSchema } from '../../types/schema';
import JsonEditor from './JsonEditor';
import FormPreview from './FormPreview';
import ErrorBoundary from '../ui/ErrorBoundary';

const FormGenerator: React.FC = () => {
  const [schema, setSchema] = useState<FormSchema | null>(null);
  const [jsonError, setJsonError] = useState<string | null>(null);

  const handleJsonChange = (newSchema: FormSchema | null, error: string | null) => {
    setSchema(newSchema);
    setJsonError(error);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Dynamic Form Generator</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ErrorBoundary>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">JSON Schema Editor</h2>
              <JsonEditor onChange={handleJsonChange} />
              {jsonError && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded">
                  {jsonError}
                </div>
              )}
            </div>
          </ErrorBoundary>

          <ErrorBoundary>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Form Preview</h2>
              {schema ? (
                <FormPreview schema={schema} />
              ) : (
                <div className="text-gray-500">
                  Enter a valid JSON schema to see the form preview
                </div>
              )}
            </div>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default FormGenerator;