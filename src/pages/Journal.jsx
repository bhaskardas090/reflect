import React, { useRef, useState } from 'react';
import '../styles/Journal.css';

const Journal = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const journalEntryRef = useRef(null);

  const handleBold = () => {
    document.execCommand('bold', false, null);
  };

  const handleItalic = () => {
    document.execCommand('italic', false, null);
  };

  const handleUnderline = () => {
    document.execCommand('underline', false, null);
  };

  const handleNew = () => {
    setTitle('');
    setContent('');
    if (journalEntryRef.current) {
      journalEntryRef.current.innerHTML = '';
    }
  };

  return (
    <div className="journal">
      <h1>{new Date().toLocaleDateString()}</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="text-editor">
        <div className="formatting-buttons">
          <button onClick={handleBold}>𝐁</button>
          <button onClick={handleItalic}>ⅈ</button>
          <button onClick={handleUnderline}>⎁</button>
        </div>
        <div
          className="journal-entry"
          contentEditable
          ref={journalEntryRef}
          placeholder="Write your journal entry here..."
        />
      </div>
      <button onClick={handleNew}>New</button>
      <button>Save</button>
      <div className="navigation-actions">
        <button>⬅️</button>
        <button>➡️</button>
      </div>
    </div>
  );
};

export default Journal;
