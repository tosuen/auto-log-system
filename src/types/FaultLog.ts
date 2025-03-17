export interface FaultLog {
    id?: number;
    equipmentName: string;
    problem: string;
    date: string;
    status: 'new' | 'inProgress' | 'resolved';
  }
  
  // 空のエクスポートを追加
  export {};