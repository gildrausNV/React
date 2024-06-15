import React, { useState } from 'react';

const AddSlope = ({ onAddSlope }) => {
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [snow, setSnow] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSlope({ title, difficulty, snow: parseInt(snow, 10), open: 0 });
    setTitle('');
    setDifficulty('Easy');
    setSnow(0);
  };

  return (
    <div className="add-slope">
      <h2>Add New Slope</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Difficulty:</label>
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div>
          <label>Snow (cm):</label>
          <input
            type="number"
            value={snow}
            onChange={(e) => setSnow(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Slope</button>
      </form>
    </div>
  );
};

export default AddSlope;
