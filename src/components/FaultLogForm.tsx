import React, { useState } from 'react';
import { FaultLog } from '../types/FaultLog';

interface FaultLogFormProps {}

const FaultLogForm: React.FC<FaultLogFormProps> = () => {
  const [formData, setFormData] = useState<Omit<FaultLog, 'id' | 'date'>>({
    equipmentName: '',
    problem: '',
    status: 'new'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLog: FaultLog = {
      ...formData,
      date: new Date().toISOString(),
      id: Date.now()
    };
    console.log('新規ログ:', newLog);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>新規故障ログ登録</h2>
      
      <div>
        <label>
          機器名:
          <input
            type="text"
            name="equipmentName"
            value={formData.equipmentName}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <label>
          問題内容:
          <textarea
            name="problem"
            value={formData.problem}
            onChange={handleChange}
            rows={4}
            required
          />
        </label>
      </div>

      <button type="submit">
        登録
      </button>
    </form>
  );
};

export default FaultLogForm;