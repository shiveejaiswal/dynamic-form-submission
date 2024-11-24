import React, { useState, useEffect, useCallback } from 'react';
import { FormSchema } from '../../types/schema';
import { validateJson } from '../../utils/jsonValidator';

interface JsonEditorProps {
  onChange: (json: string, schema: FormSchema | null, error: string | null) => void;
  initialValue?: string;
  value: string;  // Added the value prop to the interface
}

const JsonEditor: React.FC<JsonEditorProps> = ({ onChange, initialValue = '', value }) => {
  const [jsonText, setJsonText] = useState(value || initialValue);

  const validateAndParseJson = useCallback((text: string) => {
    try {
      if (!text.trim()) {
        onChange(text, null, null); // Pass empty string with null values
        return;
      }

      const parsedJson = JSON.parse(text);
      const validationError = validateJson(parsedJson);

      if (validationError) {
        onChange(text, null, validationError); // Pass the JSON text with validation error
      } else {
        onChange(text, parsedJson as FormSchema, null); // Pass valid JSON and schema
      }
    } catch (error) {
      onChange(text, null, 'Invalid JSON syntax'); // Error handling
    }
  }, [onChange]);

  useEffect(() => {
    validateAndParseJson(jsonText);
  }, [jsonText, validateAndParseJson]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonText(e.target.value);
  };

  useEffect(() => {
    setJsonText(value); // Update state when parent updates the value prop
  }, [value]);

  return (
    <div className="w-full">
      <textarea
        className="w-full h-[600px] font-mono text-sm p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ease-in-out bg-white dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 resize-none"
        value={jsonText}
        onChange={handleChange}
        placeholder="Paste your JSON schema here..."
        spellCheck="false"
        autoComplete="off"
      />
    </div>
  );
};

export default JsonEditor;
