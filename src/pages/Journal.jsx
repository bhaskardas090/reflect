import React, { useRef, useState } from 'react';
import '../styles/Journal.css';

const Journal = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [journals, setJournals] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handleSave = () => {
    const newJournal = {
      title: title,
      content: journalEntryRef.current.innerHTML,
    };
    setJournals([...journals, newJournal]);
    setCurrentIndex(journals.length);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const previousJournal = journals[currentIndex - 1];
      setTitle(previousJournal.title);
      setContent(previousJournal.content);
      if (journalEntryRef.current) {
        journalEntryRef.current.innerHTML = previousJournal.content;
      }
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < journals.length - 1) {
      const nextJournal = journals[currentIndex + 1];
      setTitle(nextJournal.title);
      setContent(nextJournal.content);
      if (journalEntryRef.current) {
        journalEntryRef.current.innerHTML = nextJournal.content;
      }
      setCurrentIndex(currentIndex + 1);
    } else {
      handleNew();
      setCurrentIndex(journals.length);
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
      <button onClick={handleSave}>Save</button>
      <div className="navigation-actions">
        <button onClick={handlePrevious}>⬅️</button>
        <button onClick={handleNext}>➡️</button>
      </div>
    </div>
  );
};

export default Journal;
