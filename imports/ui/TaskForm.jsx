import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export const TaskForm = () => {
  const [text, setText] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    Meteor.call('tasks.insert', text);

    setText('');
    setIsDisabled(true);
  };

  const handleTextChange = (e) => {
    const text = e.target.value;

    setText(text);

    if (text.trim() === '' || !text) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type to add new tasks"
        value={text}
        onChange={(e) => {
          handleTextChange(e);
        }}
      />

      <button type="submit" disabled={isDisabled}>
        Add Task
      </button>
    </form>
  );
};
