import { useEffect, useState, useRef, useCallback } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';

const STORAGE_KEY = 'lexical-content';

export default function RestoreFromLocalStoragePlugin() {
  const [editor] = useLexicalComposerContext();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const saveTimeout = useRef(null);

  // 🔁 Restore on first mount
  useEffect(() => {
    if (isFirstRender) {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = editor.parseEditorState(stored);
          editor.setEditorState(parsed);
        } catch (err) {
          console.warn('Could not parse saved Lexical state:', err);
        }
      }
      setIsFirstRender(false);
    }
  }, [editor, isFirstRender]);

  // 💾 Debounced save handler
  const onChange = useCallback((editorState) => {
    if (saveTimeout.current) clearTimeout(saveTimeout.current);

    saveTimeout.current = setTimeout(() => {
      try {
        const json = editorState.toJSON();
        const jsonStr = JSON.stringify(json);

        // Optional: skip saving empty documents
        if (jsonStr.length < 20) return;

        localStorage.setItem(STORAGE_KEY, jsonStr);
      } catch (err) {
        console.error('Failed to save editor state:', err);
      }
    }, 1000); // Debounce: save 1s after typing stops
  }, []);

  return <OnChangePlugin onChange={onChange} />;
}
