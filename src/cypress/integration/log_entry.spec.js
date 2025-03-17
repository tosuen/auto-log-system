describe('Log Entry Workflow', () => {
    it('allows the user to start logging and submit data', () => {
      // アプリケーションのURLにアクセス
      cy.visit('http://localhost:3000');
  
      // ログ開始ボタンをクリック
      cy.contains('Start Logging').click();
      cy.get('button').contains('Start Logging').should('be.disabled'); // ボタンが無効化されることを確認
  
      // フォームフィールドにデータを入力
      cy.get('input[name="time"]').type('2024-12-19T10:00');
      cy.get('input[name="location"]').type('Tokyo');
      cy.get('input[name="failureRole"]').type('Communication Failure');
      cy.get('textarea[name="missionImpact"]').type('Minimal impact on the mission.');
  
      // フォームを送信
      cy.contains('Submit').click();
  
      // 成功メッセージを確認
      cy.contains('Log successfully submitted!').should('be.visible');
    });
  });
  