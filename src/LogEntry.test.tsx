import { render, screen, fireEvent } from '@testing-library/react';
import LogEntry from './pages/LogEntry';
import React from 'react';

test('should display error when invalid location is entered', () => {
  render(<LogEntry />);

  // Locationに無効な値を入力
  fireEvent.change(screen.getByLabelText(/Location:/i), {
    target: { value: 'Invalid Room' },
  });

  // エラーメッセージが表示されることを確認
  expect(screen.getByText(/Invalid location. Please select a valid location./i)).toBeInTheDocument();
});

test('should allow valid locations to be entered', () => {
  render(<LogEntry />);

  // Locationに有効な値を入力
  fireEvent.change(screen.getByLabelText(/Location:/i), {
    target: { value: 'Engine Room' },
  });

  // エラーメッセージが表示されないことを確認
  expect(screen.queryByText(/Invalid location./i)).not.toBeInTheDocument();

  // 履歴に追加
  fireEvent.click(screen.getByText(/Submit/i));
  expect(screen.getByText(/Engine Room/i)).toBeInTheDocument();
});

test('should reset the form after submitting valid input', () => {
  render(<LogEntry />);

  // フォームにデータを入力
  fireEvent.change(screen.getByLabelText(/Time:/i), {
    target: { value: '2024-12-20T12:00' },
  });
  fireEvent.change(screen.getByLabelText(/Location:/i), {
    target: { value: 'Radar Room No.1' },
  });

  // 送信
  fireEvent.click(screen.getByText(/Submit/i));

  // フォームがリセットされていることを確認
  expect(screen.getByLabelText(/Time:/i)).toHaveValue('');
  expect(screen.getByLabelText(/Location:/i)).toHaveValue('');
});
