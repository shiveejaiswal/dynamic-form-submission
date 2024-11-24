import React, { useState, useEffect } from 'react';
import { FormSchema } from '../../types/schema';
import { validateJson } from '../../utils/jsonValidator';

interface JsonEditorProps {
  onChange: (schema: FormSchema | null, error: string | null) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ onChange }) => {
  const [jsonText, setJsonText] = useState('');

  useEffect(() => {
    try {
      if (!jsonText.trim()) {
        onChange(null, null);
        return;
      }

      const parsedJson = JSON.parse(jsonText);
      const validationError = validateJson(parsedJson);

      if (validationError) {
        onChange(null, validationError);
      } else {
        onChange(parsedJson as FormSchema, null);
      }
    } catch (error) {
      onChange(null, 'Invalid JSON syntax');
    }
  }, [jsonText, onChange]);

  return (
    <div className="w-full">
      <textarea
        className="w-full h-[600px] font-mono text-sm p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
        placeholder="Paste your JSON schema here..."
      />
    </div>
  );
};

export default JsonEditor;