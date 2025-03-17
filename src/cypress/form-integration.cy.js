describe('Log Entry Integration Test', () => {
    it('should allow a user to submit a log and view it in the history', () => {
      // アプリケーションのルートURLを訪問
      cy.visit('/');
  
      // フォームにデータを入力
      cy.get('input[name="time"]').type('2024-12-19T12:00');
      cy.get('input[name="location"]').type('Engine Room');
      cy.get('input[name="failureRole"]').type('Navigation System');
      cy.get('textarea[name="missionImpact"]').type('Minor disruption, quickly resolved.');
  
      // 送信ボタンをクリック
      cy.contains('Submit').click();
  
      // 履歴にデータが追加されていることを確認
      cy.get('.log-history li')
        .should('contain', '2024-12-19T12:00')
        .and('contain', 'Engine Room')
        .and('contain', 'Navigation System')
        .and('contain', 'Minor disruption, quickly resolved.');
    });
  });
  