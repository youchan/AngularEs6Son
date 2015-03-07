describe('一覧ページ',()=> {

  it('一覧のデータが表示されること', ()=> {
    browser.get('http://localhost:9000/');
    var firstBean = element(by.repeater('bean in list.beans').row(0));
    browser.wait(()=>{
      return firstBean.isPresent();
    }, 10000).then(()=>{
      expect(firstBean.getText()).toContain('キリマンジャロ');
      expect(firstBean.getText()).toContain('2015-03-12');
      expect(firstBean.getText()).toContain('アフリカ・中東');
    });
  });
});
