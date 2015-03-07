describe('一覧ページ', ()=> {
  beforeEach(function() {
    browser.get('http://localhost:9000/');
  });

  describe('新規登録', ()=> {
    it('新規登録ボタンが表示されること', (done)=> {
      var createButton = element(by.css('h2 .btn-warning'));
      browser.wait(()=>{
        return createButton.isPresent();
      }, 10000).then(()=>{
        expect(createButton.getText()).toBe("新規登録")
        done();
      });
    });
  });

  describe('一覧', ()=> {
    var firstBean;
    beforeEach(function(done) {
      firstBean = element(by.repeater('bean in list.beans').row(0));
      browser.wait(()=>{
        return firstBean.isPresent();
      }, 10000).then(()=>{
        done();
      });
    });

    it('一覧のデータが表示されること', ()=> {
      expect(firstBean.getText()).toContain('キリマンジャロ');
      expect(firstBean.getText()).toContain('2015-03-12');
      expect(firstBean.getText()).toContain('アフリカ・中東');
      expect(firstBean.element(by.tagName('img')).getAttribute('src')).toContain("/images/18.jpg");
    });

    it('一覧のボタンが表示されること', ()=> {
      expect(firstBean.element(by.css('.btn-primary')).getText()).toContain("編集");
      expect(firstBean.element(by.css('.btn-danger')).getText()).toBe("削除");
    });
  });
});
