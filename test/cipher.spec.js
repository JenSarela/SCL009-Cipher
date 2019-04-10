
describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
   
    });    
     it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', ()=> {
       assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
     });
     it('debería retornar "4567890123" para "0123456789" con offset 4', ()=>{
       assert.equal(cipher.encode(4,"0123456789"),"4567890123");
     });
     it('debería retornar "," para "," con offset 2', () => {
      assert.equal(cipher.encode(2, ","), ",");
    });
    it('debería retornar " " para " " con offset 3', () => {
      assert.equal(cipher.encode(3," "), " ");
    });  

  }),


  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', ()=> {
      assert.equal(cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
    });
    it('debería retornar "8901234567" para "0123456789" con offset 2', ()=>{
      assert.equal(cipher.decode(2,"0123456789"),"8901234567");
    });
    it('debería retornar "," para "," con offset 3', () => {
      assert.equal(cipher.decode(3, ","), ",");
    });   
    it('debería retornar " " para " " con offset 5', () => {
      assert.equal(cipher.decode(5," "), " ");
    });  
  });

});
