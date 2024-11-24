// src/App.tsx

import React, { useState } from 'react';
import FormGenerator from './components/FormGenerator';

function App() {
  const [jsonSchema, setJsonSchema] = useState<string>('');

  const handleSchemaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonSchema(e.target.value);
  };

  return (
    <div className="App">
      <h1>Dynamic Form Generator</h1>
      
      {/* JSON Schema Input */}
      <div className="schema-input">
        <label htmlFor="jsonSchema">Paste your JSON schema here:</label>
        <textarea
          id="jsonSchema"
          value={jsonSchema}
          onChange={handleSchemaChange}
          placeholder="Enter a valid JSON schema to see the form preview"
        ></textarea>
      </div>

      {/* Form Preview */}
      {jsonSchema && <FormGenerator jsonSchema={jsonSchema} />}
    </div>
  );
}

export default App;
