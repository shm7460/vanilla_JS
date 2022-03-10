# js

- three.js 는 자바스크립트로 3D를 구현해주는 라이브러리이다

- 자바스크립트는 파일을 위에서 아래로 읽고 있다

  3:30시작



## 2.0  (console)

- 자바스크립트 다루는 방법: 브라우저의 console을 이용하기
  - 긴 자바스크립트 프로그램을 작성할때는 유용하지 않다(한줄씩만 적용되기때문)

- 브라우저는 HTML을 열고 HTML은 CSS와 자바스크립트를 가져오는 형식이다
- 자바스크립트 가져오는 형식 주로  body의 맨끝에 넣어줌

```html
 <body>
    <script src="app.js"></script>
  </body>
```

## 2.1 (console basic)

- 브라우저의 console에서 2+2 라고 입력했을대 4라는 답이나온다 

​      여기서 2는 integer이라고 한다 `full number`(정수)라는 뜻이다

- 1.5는 `float`(소수점)라고 한다

- `string`(문자열)을 입력할때는 "" 을 사용해야된다

  - `"hello "+"my name is hyemin"` 이라고 입력하면

    hello my name is hyemin 이렇게됨(공백까지 문자로 취급함)

## 2.2 (variable_const/let)

**console.log 이란**

```js
console.log(545454545);
console.log("안뇽");
```

- 콘솔에게 메세지를 보내는 일을 한다 (콘솔에 545454545이 값을 출력하고 있다는 뜻)

- ( )여기에는 숫자나 string을 넣을 수 있다

- string을 넣을때는 "" , '' 둘다상관없다 대신 똑같은걸로 끝나야 한다

  

**세가지 operation(연산)을 console.log 하는 법**

```js
console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);
```

- variable은 값을 저장하거나 유지하는 역할을 함

  

**자바스크립트로 variable을 만드는 법 (const)**

```js
const myName = "hyemin";
const myNameLongVariable = "안녕";
const a = 5;
const b = 2;

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);
```

- 가장먼저 const(상수) 라는 걸 사용한다 (상수는 바뀌지 않는 값이라는 뜻 계속 유지됨)
- 이름을 지어주고 이름에 대한 값을 준다 
- 이름을 지어줄때는 공백이 없어야한다 
- 자바스크립트에서는 일반적으로 이름을 지을때  단어단어..이면 다음 단어의 첫문자는 대문자로 적는다.(camelCase형식이라 부름)
- 예전에는 var 으로 많이 사용했다 대신에 규칙이 없다 어디서나 값이 변경가능하다(쓰지말것 이제는..)

## 2.3 (let)

- variable을 만드는 방법은 두가지이다 const와 let이 있다

- let과 const 차이점
  - const: constant(상수)이고 값이 바뀔수 없다.
  - let:  값을 변경할수 있다 

**let으로 variable 값을 업데이트 하는 법**

```js
let myName = "hyemin";
const a = 5;
const b = 2;

console.log(a + b);
console.log(a * b);
console.log("hello " + myName);

//  myName 값을 업데이트 했음 heymin->shm
myName = "shm";
console.log("your new name is " + myName);
```

- let은 새로운 것을 생성할때만 작성하면되고 값을 업데이트할때는 let를 빼고 작성하면된다
  - myName = "shm";
-  또 값을 업데이트하고 싶다면 업데이트를 하고 변경될 내용을 console.log으로 작성해주면된다

## 2.4 (boolean_**true/false/**null/undefined)

**true / false**

```js
const amIFat = false;
console.log(amIFat);
```

- false라는 값이나옴 

**null (변수에 아무것도 없음을 의미)**

```js
const amIFat = null;
console.log(amIFat);
```

- null은 false랑 다른의미이다 

- 우리가 variable 안에 어떤것이 없다는 것을 확실히 하기위해서 작성을 하여 나오는것임

  (절대 자연적으로 발생하는 값이아님)

- null은 의도적으로 자바스크립트에게 여기엔 값이 없다는 것을 알려줄때 나오는것임

**undefined(정의되지 않음)**

```js
let something;
console.log(something);
```

- undefined은 something이라는  variable을 만들었지만 값은 주어지지 않았을때 나옴 

## 2.5 (arrays)

**리스트로 그룹화 시키기**

```js
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
console.log(daysOfWeek);
```

- const 그룹이름 = [이름,이름,이름]; 하고나서, console.log(그룹이름);하면된다 

**variable 값 없어 바로 [ 여기안에  텍스트로 작성해도됨]**

```js
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
console.log(daysOfWeek);
```

**arry(배열)안의 데이터에 접근 하는 법 **

```js
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
console.log(daysOfWeek[5]);
```

- 먼저  arry를 갖고있는 variable의 이름을 적어주고 [ ]대괄호를 열어서 얻고 싶은 항목의 번호를 넣기
- arry(배열)에서 항목이 5번에 해당하는 것을 받아오는 방법 (컴퓨터는 0부터 숫자를 센다)

**function: 항목 하나를 array안에 추가/변경하는 방법**

```js
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// Get Item from Array
console.log(daysOfWeek);
// Add one more day to the array
daysOfWeek.push("free");
console.log(daysOfWeek);
// chage item
daysOfWeek[3] = "happy";
console.log(daysOfWeek);
```

1. arry를 갖고있는 variable의 이름 + . + push( " ");
2. console.log(arry를 갖고있는 variable의 이름);

## 2.6 (object xx.xx)

**object에서 값을 가져오는 방법**

```js
const player = {
  name: "heymin",
  points: 10,
  fat: true,
};
console.log(player);
// peoperty 값을 가져오는 두가지방법
console.log(player.name);
console.log(player["name"]);
```

- `const  variable의 이름 = {  property이름:값, property이름:값,  };`
- property는  variable안에 있기때문에 variable이름을 또 안적어줘도 됨
- 여기서 object는 player이다

**object안에 property를 업데이트 하는 방법**

```js
const player = {
  name: "heymin",
  points: 10,
  fat: true,
};
player.fat = false;
player.ponints = player.points + 15;
console.log(player);
```

- `object이름 . property이름 = 값;`

- const로 하였어도 object안에 property는 업데이트할수있다

**언제든지 property를 추가할수있다**

```js
const player = {
  name: "heymin",
  points: 10,
  fat: true,
};
player.lastname = "potato";
console.log(player);
```

- `object이름 . property이름 = 값;`

## 2.7(function)

**데이터를 function에게 보내는 방법**

```js
function sayHello(nameOfPerson, age) {
  console.log("hello my name is " + nameOfPerson + " and i'm " + age);
}
// function 실행하는 방법
sayHello("hyemin", 10);
sayHello("mina", 12);
```

- `function 이름 (변수 이름) { 이름을 실행 할때마다 실핼되는 코드 여기에 넣기 ; }`

- function은 계속 반복해서 사용할수있는 코드조각이다(어떤 코드를 캡슐화해서 실행을 여러번 할수있게 해줌)
- function에서 cosole.log를 해줘야 실행이됨

**예시**

```js
function plus(a, b) {
  console.log(a, b);
  console.log(a + b-3);
}
plus(8, 60);
-------결과---------
8 60
65
```

- 순서대로 argument넣어주는게 중요하다   → plus(8, 60);
- 변수이름은   function{    } 안에 작성해줘야한다 

**나만의 object와 function 이다** 

```js
const player = {
  name: "hyemin",
  sayHello: function (name) {
    console.log("hello " + name);
  },
};
console.log(player.name);
player.sayHello("shm");
player.sayHello("min");
```

`console.log(player.name);` `player.sayHello();`

```js
const carculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  div: function (a, b) {
    console.log(a / b);
  },
  multi: function (a, b) {
    console.log(a * b);
  },
  square: function (a, b) {
    console.log(a ** b);
  },
};

carculator.add(10, 2);
carculator.minus(0, 2);
carculator.div(0, 50);
carculator.multi(2, 2);
carculator.square(55, 2);
```

## 2.11

console.lg 은 console에 무언가를 log 하는 것이다 





























