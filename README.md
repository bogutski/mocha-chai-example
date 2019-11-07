Файл теста содержит пользовательску функцию чтобы ее не экспортировать.
 
Название файла теста должно содержать слово `test`

Инсталяция `npm install`

Запуст тестов `npm test`

#### Сутруктура запроса
```
{
  "lang": "js", 
  "solution": " function double(n){ return n * 2 }",
  "test": "describe('User tests' ..."
}
```

### Пример

Пользовательская функция

```javascript
function double(n){
  console.log(`Custom output ${n}`);
  return n * 2;
}
```

Перед тестом должно быть импортировано 
```javascript
const { expect } = require('chai');
```

Тест

```javascript
const etalonDouble = n => n * 2;

describe('User tests', function() {
  it('should double value 2', function() {
    expect(double(2)).equal(4);
  });

  it('should double value 3', function() {
    expect(double(3)).equal(5);
  });


  for (let i = 1; i < 10; i++){
    it(`should ${i} doubled`, () => {
      expect(double(i)).equal(etalonDouble(i))
    });
  }
});

```




