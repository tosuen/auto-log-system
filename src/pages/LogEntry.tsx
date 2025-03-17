import React, { useState } from 'react';
import '../App.css';

const validLocations = ['Radar Room No.1', 'Engine Room', 'System Equipment Room'];

const LogEntry: React.FC = () => {
  const [log, setLog] = useState({
    time: '',
    location: '',
    failureRole: '',
    missionImpact: '',
  });

  const [error, setError] = useState('');
  const [history, setHistory] = useState<
    { time: string; location: string; failureRole: string; missionImpact: string }[]
  >([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Locationのバリデーション
    if (name === 'location' && !validLocations.includes(value) && value !== '') {
      setError('Invalid location. Please select a valid location.');
    } else {
      setError(''); // エラークリア
    }

    setLog((prevLog) => ({ ...prevLog, [name]: value }));
  };

  const handleSubmit = () => {
    // エラーがある場合は履歴に追加しない
    if (error) {
      alert('Please correct the errors before submitting.');
      return;
    }

    // 現在の入力内容を履歴に追加
    setHistory((prevHistory) => [...prevHistory, log]);

    // フォームをリセット
    setLog({ time: '', location: '', failureRole: '', missionImpact: '' });
  };

  return (
    <div className="log-entry">
      <h2>Log Entry</h2>
      <form>
        <label>
          Time:
          <input
            type="datetime-local"
            name="time"
            value={log.time}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={log.location}
            onChange={handleInputChange}
          />
        </label>
        {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
        <label>
          Failure Role:
          <input
            type="text"
            name="failureRole"
            value={log.failureRole}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Mission Impact:
          <textarea
            name="missionImpact"
            value={log.missionImpact}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <h3>Log History</h3>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            <strong>Time:</strong> {entry.time}, <strong>Location:</strong> {entry.location},{' '}
            <strong>Failure Role:</strong> {entry.failureRole},{' '}
            <strong>Mission Impact:</strong> {entry.missionImpact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogEntry;
