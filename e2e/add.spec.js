describe('新規作成ページ', ()=> {
  beforeEach(function() {
    browser.get('http://localhost:9000/add');
  });

  describe('新規作成すると', ()=> {
    it('一覧に戻って作成したものが表示されること', ()=> {
      var brand = element(by.model('add.bean.brand'));
      brand.sendKeys('Test');

      element(by.css('.btn-warning')).click();

      expect(element.all(by.repeater('bean in list.beans')).last().getText()).toContain("Test")
    });
  });
});
