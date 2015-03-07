describe('一覧ページ', ()=> {
  describe('一覧', ()=> {
    var firstBean;
    beforeEach(function(done) {
      browser.get('http://localhost:9000/');
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
  });
});
