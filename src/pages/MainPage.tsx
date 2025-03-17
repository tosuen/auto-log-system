import React from 'react';
import FaultLogForm from '../components/FaultLogForm';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <div>
      <h1>故障探求ログシステム</h1>
      <FaultLogForm />
    </div>
  );
};

export default MainPage;