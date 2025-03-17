describe('Simple Test', () => {
    it('visits the app root', () => {
      cy.visit('/');
      cy.contains('Log System'); // アプリケーション内にこの文字列が表示されているか確認
    });
  });
  