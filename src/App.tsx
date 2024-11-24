import React, { useState, useCallback } from 'react';
import FormGenerator from './components/FormGenerator/FormGenerator';
import JsonEditor from './components/FormGenerator/JsonEditor';
import { FormSchema } from './types/schema';
import './App.css';

const App: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState<string>('');
  const [parsedSchema, setParsedSchema] = useState<FormSchema | null>(null);
  const [schemaError, setSchemaError] = useState<string | null>(null);

  const handleJsonChange = useCallback((json: string, schema: FormSchema | null, error: string | null) => {
    setJsonSchema(json);
    setSchemaError(error);
    setParsedSchema(schema);
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Dynamic Form Generator</h1>
        <p>Create forms using JSON</p>
      </header>
      <main className="app-main">
        <section className="json-editor-section">
          <h2>JSON Schema Editor</h2>
          <JsonEditor onChange={handleJsonChange} value={jsonSchema} /> {/* Updated to pass value */}
          {schemaError && <p className="error-message">{schemaError}</p>}
        </section>
        <section className="form-preview-section">
          <h2>Form Preview</h2>
          {parsedSchema ? (
            <FormGenerator jsonSchema={JSON.stringify(parsedSchema)} />
          ) : (
            <p className="empty-preview-message">
              {schemaError || "Enter a valid JSON schema to see the form preview"}
            </p>
          )}
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Dynamic Form Generator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
