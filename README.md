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

## 2.4 (boolean_true/false/null/undefined)

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

**array(배열)안의 데이터에 접근 하는 법** 

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
----------결과------------
hyemin
hello shm
hello min
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

## 2.11(returns)

```js
const age = 97;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}
const krAge = calculateKrAge(age);
console.log(krAge);
-------결과-----------
99
```

```js
const age = 97;
function calculateKrAge(ageOfForeigner) {
  ageOfForeigner + 2;
  return "hello";
}
const krAge = calculateKrAge(age);
console.log(krAge);
------결과---------
hello
```

- variable이름이 'krAge'의 값 자체가 function의 return value(반환값)이다

**상호의존적인 예시**

```js
const calcultor = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  div: function (a, b) {
    return a / b;
  },
};

const pluseResult = calcultor.plus(2, 3);
const minusResult = calcultor.minus(pluseResult, 10);
const divResult = calcultor.div(10, minusResult);
console.log(pluseResult);
console.log(minusResult);
console.log(divResult);
```

- pluseResult, , 으로 바로 값을 알수있다
-  return을 하는 순간 그뒤에오는 것은 실행이 안된다  (function의 기능은 끝난다 )

## 2.13 (condition)

 **prompt(    )**

```js
const age = prompt("How old are you?");
console.log(typeof age, parseInt(age));
```

- `prompt()`은 사용자에게 창을 띄울수 있게 해줌
-  ` typeof`를 사용하면 값이 무슨타입인지 알수있다
- `parseInt("age")`는 age에 적는 것들은 숫자로 바꿔준다 (문자열을 숫자로 바꿔주는 역할을함)
  - 123 입력하면 123숫자로 인식하고 lalalal글자이면 NaN이라고 보여준다 
- `NaN` 뜻은 숫자가 아님 이라는 뜻이다

**두개의 function을 사용하기**

```js
const age = parseInt(prompt("How old are you?"));
console.log(age);
```

console에서 숫자면 그대로 숫자가 표시되고, 숫자가아닌것은 NaN으로 표시가 된다 

## 2.14 (NaN)

**isNAN(  )**

```js
const age = parseInt(prompt("How old are you?"));
console.log(isNaN(age));
```

- `isNaN ` function은 boolean으로 알려준다 (그말은 true or false로 알려준다는 뜻)

- isNaN는 숫자가아니다 라는 뜻이기 때문에 숫자이면 false 라고 알려주고, 슷자가아니면 true라고 알려준다

**if**

```js
const age = parseInt(prompt("How old are you?"));
if (isNaN(age)) {
  console.log("please write a number");
} else {
  console.log("Thank you for writing your age");
}
```

- if (boolean만 올수있다 true or flase){ true이면 보여줄 코드를 입력한다 }

- 숫자가 아니면 please write a number 이문자열이 보여진다
- if 가 true라면 조건문이 실행되고 else가 false면 조건문이 실행된다

## 2.15 (else if / &&)

**else if  는 if 가 false일때 조건문을 실행시켜준다**

```js
const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
  console.log("please write a number");
} else if (age < 18) {
  console.log("you are too young");
} else {
  console.log("you can drink");
}
```

- if 에서 age 가 number이면 else if 으로 넘어온다 (if가 false이기 때문이다)
- else if는 age가 18세미만이라면  실행시킨다 (else if 가 ture라서 )
- else if가 false면 else를 실행 시킨다 (else는 위에 하나라도 true면 실행이 안된다 )
  - 현재 조건문이 flase면 다른 조건문을고 넘어간다
  - if (  ) / else if (  ) : 괄호안은 condition(조건문)이라고 한다, 조건문이 없는거는 else처럼 차례가오면 바로실행 한다 

**두가지이상 조건문 일때( &&)**

```js
const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
  console.log("please write a number");
} else if (age < 18) {
  console.log("you are too young");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink");
} else if (age > 50 && age <= 80) {
  console.log("you should exercise");
} else if (age > 80) {
  console.log("you can do whatever you want");
}
```

- &&(and) / >=, <=(이상,이하) / >,<(초과,미만)
- 두가지 이상 조건문을 둘다 true가 되야 true가된다 하나라도 false가 있는면 false가 된다
- else는 꼭 사용해야되는건 아니다

**두가지이상 조건문 일때(||)**

```js
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("please write a real positive number");
} else if (age < 18) {
  console.log("you are too young");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink");
} else if (age > 50 && age <= 80) {
  console.log("you should exercise");
} else if (age > 80) {
  console.log("you can do whatever you want");
}
```

- if 조건문에서 숫자가 아니거나, 음수인 경우 하나라도 true이면 ]

  "please write a real positive number" 가 실행이된다 

- || (or)는 하나라도 true면 true가된다 또 하나라도 false면 false가된다

```js
true || true == true
false || false == false
true || false == true
false || true == true
```

## 2.16 (===)

**같음을 확인하는 방법(===)**

```js
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("please write a real positive number");
} else if (age < 18) {
  console.log("you are too young");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink");
} else if (age > 50 && age <= 80) {
  console.log("you should exercise");
} else if (age === 100) {
  console.log("wow you are wise");
} else if (age > 80) {
  console.log("you can do whatever you want");
}
```

- age === 100 위치를 맨마지막 조건문으로 작성하면 실행이안된다 (위치에 맞게 넣는것이 중요 )
- 아닌지를 확인하는 방법 (!==)

## 3.1 (자바에서 html요소 변경하는 방법)

**document.getElementById()** 

```html
document.getElementById("grab");
-----결과-------------------------
 <h1 id="grab">Grab me!</h1>
```

-  객체(object) 중 document라는 객체는 JS에서 HTML파일을 불러올 수 있도록 도와준다.

- document라는 객체 안에 getElementById 라는 함수가 있는데 이 함수의 기능은 

  해당 HTML의 고유 ID를 추적하여 JS가 해당 ID를 가진 HTML 파일을 보완 수정할 수 있도록 해준다.

- string을 전달받는 함수이다

- getElementById("grab") 에서 "grab"는 Id이다

**h1 태그의 id가 grab인것을 자바에서 title로 정의하는법**

```js
const title = document.getElementById("grab");
console.log(title.id);
```

- h1태그 id를 title로 정의한다는뜻
- 자바에서 title로 정의한 곳의 id 확인하기

**console.dir( )는 element를 더 자세히 보여준다**

```js
const title = document.getElementById("grab");
console.dir(title);
------결과--------------
h1#grab
```

- js에서는 html이 표현하는 object를 보여준다

**title의 내용을 변경함**

```js
document.title = "Hello From JS!";
```

-  웹사이트의 title이 바꾸는 방법

**id 가 grab인곳에 내용 변경하기**

```js
const title = document.getElementById("grab");
title.innerText = "Got you";
```

- document의 함수 중에는 getElementById 라는 함수가 있는데, 이 함수가 HTML에서 id를 통해 element를 찾아준다.
- element를 찾고 나면, JS로 해당 HTML의 무엇이든 바꿀 수 있다.

- id, className 등을 가져 올 수 있음. (cosole.log(title.id);)

## 3.2 (자바에서 html요소 가져오는 방법)

**getElementsByClassName** (classname 가져오는 방법)

```js
const title = document.getElementsByClassName("hey");
console.log(title);
```

- 해당되는 모든 array를 가져다준다 

**getElementsByTagName** (tag 가져오는 방법)

```js
const title = document.getElementsByTagName("h1");
console.log(title);
```

- 해당되는 모든 array를 가져다준다 

**querySelector **(element를 css방식으로 검색하기)

```js
const title = document.querySelector(".hey h1");
console.log(title);

const title = document.querySelector(".hey:nth-child(2) h1");
console.log(title);
```

- class 내부에 있는 h1을 가져올수있다 (자주사용하게됨)
- querySelector는 오직 첫번째 element만 return함 (첫번째 h1 한개만 가져온다는 뜻)
- `id도 이걸로 찾을수있다 ("#hey")`

**querySelectorAll** (조건에 부합하는 모든 요소를 가져다줌)

```js
const title = document.querySelectorAll(".hey h1");
console.log(title);
----결과--------
NodeList(4) [h1, h1, h1, h1]
```

- 이조건에 부합하는 모든 element를 가져다 준다
- h1이 들어있는 array를 다 가져다준다 
- 해당되는 모든 array를 가져다준다 

## 3.3 (addEventListener)

javascript로 style을 변경하기

```js
const title = document.querySelector("div.hey h1:first-child");
console.dir(title);
title.style.color = "blue";
```

addEventListener

```js
const title = document.querySelector("div.hey h1:first-child");
function handleTitleClick() {
  console.log("title was clicked!");
}
title.addEventListener("click", handleTitleClick);
```

- addEventListener 하기위해서는  먼저 function을 정의해줘야한다
- function에게 이름을 지정해주고 나타날 것을 console.log에 작성해준다
- addEventListener에서는 `click` 이라는 이벤트 명령어를넣어주면 클릭하는 순간function의  "handleTitleClick"가 실행된다
- title.addEventListener("click",handleTitleClick) 여기서 handleTitleClick에 ()을 붙여주지 않는게 중요
  -  ()가 있으면 브라우저가 '아~ 함수 실행하라는거구나~' 하고 유저의 클릭여부와 관계없이 실행함

클릭하는 순간 색변경하기

```js
const title = document.querySelector("div.hey h1:first-child");
function handleTitleClick() {
  title.style.color = "blue";
}
title.addEventListener("click", handleTitleClick);
```

-  element의 내부를 보고 싶으면 console.dir()
  - 기본적으로 object로 표시한 element를 보여줌(전부 js object임) 
  - 그 element 중 앞에 on이 붙은 것들은 event임

## 3.4 (event종류)

event 종류 click/ mouseenter /mouseleave

```js
const title = document.querySelector("div.hey h1:first-child");
function handleTitleClick() {
  title.style.color = "blue";
  title.innerText = "Hello!";
}
function handleMouseEnter() {
  title.style.color = "green";
  title.innerText = "Mouse is here!";
}
function handleMouseleave() {
  title.style.color = "tomato";
  title.innerText = "Welcome";
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseleave);
```

- click은 클릭하면  function handleTitleClick을실행함
- mouseenter는 마우스를 위에 올리면 function handleMouseEnter을 실행함
- mouseleave는 마우스를 떼면 function handleMouseleave을 실행함

## 3.5(event하는데 또다른 방법)

```js
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseleave);
---------------event하는데 두가징방법임 둘다 같은 뜻임-----------------------
title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.onmouseleave = handleMouseleave;
```

- 위에 두 코드는 동일하나 addEventListener를 더 선호하는 이유는
  removeEventListener을 통해서 event listener을 제거할수있기 때문이다

**resize**

```js
function handleWindowResize() {
  document.body.style.backgroundColor = "orange";
}
window.addEventListener("resize", handleWindowResize);
```

- widow는 기본적으로 제공되는 요소다

- document의 body,head,title 는 document뒤로 바로 불러올수있다(h1,div등등은 안된다)
- div나 h1 등 element 들은 querySelector getElementById등으로 찾아야한다.
  ex) document.querySelector(“h1”);
- window의 사이즈가 변하면 배경색이 바뀐다

**copy/ offline/ online**

```js
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("ALL GOOD");
}
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
```

## 3.6 (function에 if,else 사용하기)

**if/else**

```js
const title = document.querySelector("div.hey h1:first-child");
function handleTitleClick() {
  if (title.style.color === "blue") {
    title.style.color = "tomato";
  } else {
    title.style.color = "blue";
  }
}

title.addEventListener("click", handleTitleClick);
```

- if 가 true면 tomato가되고 false면 blue가된다

**currentColor_ const/let 으로 정리하기**

```js
const title = document.querySelector("div.hey h1:first-child");
function handleTitleClick() {
  const currentColor = title.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
 
  title.style.color = newColor;
}

title.addEventListener("click", handleTitleClick);
```

-  currentColor는 getter로써, 최근 color값을 복사하는 역할을 합니다.

- newColor는 변수가 없다 또  let이 앞에오기때문에 값이 변해도 상관없다
  - 처음에 newColor라는 빈 let변수를 선언했고 if, else를 거치면서 초기화 값을 할당받게 된다
    즉, newColor = "tomato"; 이런식으로 되는거다
    그리고 그 값을 title 에 넣어주는 것이기 때문에 title.style.color = newColor;가 된다
  - newColor에 새롭게 넣어준 데이터를 h1.style.color에 넣어 줌으로써 색상이 반응하도록 되어있다

- 프로그래밍언어에서 `= (equal)` 표시는 오른쪽에 있는 값을 왼쪽에 대입한다는 뜻입니다. 
  -   `title.style.color = newColor` 에서 newColor변수에 대입된 색상값을 title.style.color에 최종적으로 할당하는 역할을 합니다

## 3.7 (css활용하기)

**css를 js에서 활용하기**

```css
.active {
  color: tomato;
  transition: color 0.5s ease-in;
}
```

- css에서 .active 라는 클래스명을 부여해서 컬러 변경하기

```js
const title = document.querySelector("div.hey h1:first-child");
function handleTitleClick() {
  if (title.className === "active") {
    title.className = "";
  } else {
    title.className = "active";
  }
}

title.addEventListener("click", handleTitleClick);
```

- css에서 class를 가져와서 js에서 활용하기
- === 일치하는지 여부판단    /           = 오른쪽 값을 왼쪽으로 대입한다는 뜻

**1. js를 const로 정리하기**

```js
const title = document.querySelector("div.hey h1:first-child");
function handleTitleClick() {
  const clickedClass = "active";
  if (title.className === clickedClass) {
    title.className = "";
  } else {
    title.className = clickedClass;
  }
}

title.addEventListener("click", handleTitleClick);
```

- 계속 css여러번 넣을  필요없이  css에서 여기에"   "들어갈 css만 복사 붙여 넣기만 해주면된다 
-  const clickedClass = "  css  " ;

## 3.8 (classList.add_toggle)

```js
const title = document.querySelector("div.hey h1:first-child");

function handleTitleClick() {
  const clickedClass = "active";
  if (title.classList.contains(clickedClass)) {
    title.classList.remove(clickedClass);
  } else {
    title.classList.add(clickedClass);
  }
}
title.addEventListener("click", handleTitleClick);
```

- classList를 이용하는건= element의 class내용물을 조작하는 것을 허용한다는 뜻

- title.classList.contains(clickedClass) 

  =우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해준다

- title.classList.remove(clickedClass)

  = remove라는 function은 명시한 class name을 제거하고

- title.classList.add(clickedClass)

  =add라는 function은 명시한 class name을 추가

**toggle**

```js
const title = document.querySelector("div.hey h1:first-child");

function handleTitleClick() {
  title.classList.toggle("active");
}
title.addEventListener("click", handleTitleClick);
```

- active는 반복되지않기때문에 const를 할필요없이 바로 " "여기에 넣어주면된다

- 기본적으로 위에 코드를 간단하게 구현한다

- toggle는 titel의 classList에  active class가 포함되었다면 제거하고 포함되지않았다면 추가한다

classList : https://developer.mozilla.org/ko/docs/Web/API/Element/classList



## 4.0 (input)

1. 우선 우리는 user에게 질문을 해야되다 , 이름이 무엇인지
2. 그정보를 어떻게 받을지 정하기
3. 그정보를 화면에 표시하기
4. js에는 사실 value를 기억하게 하는 쉬운 방법이있음(user의 이름을 기억하는것처럼)

```js
const loginform = document.getElementById("login-form");
```

- querySelector()을 사용할때는 대상이 무엇인지 알려줘야함 왜냐 classname,tagname모두 검색이 가능하기때문 ex) querySelector("#login-form")

```js
const loginInput = loginform.querySelector("input");
```

- loginInput이라고 이름을 지어주고  그전에 정해준 이름 loginform. 에서 querySelector으로 HTML에 있는  input을 선택한다는 뜻

**user가 이button을 클릭할때 감지하는 방법**

```js
const loginButton = loginform.querySelector("button");

function onLoginBtnClick() {}
loginButton.addEventListener("click", onLoginBtnClick);
```

- input에 적은 내용을 console.log()하는법(추후에 value를 저장할수있도록)-clikck event 사용하기 
- 그래서 click event는 logButton과 연결되어야함

input의 내용을 가져오려면 "value" property를 찾아야함

```js
function onLoginBtnClick() {
  console.log("hello", loginInput.value);
}
loginButton.addEventListener("click", onLoginBtnClick);
```

- loginInput에 있는 property 중에 value 값만 가져오는 방법  (loginInput.value)
- "hello" 을 작성하면 값 앞에 붙어 같이 나옴

## 4.1 (form submission)

**if/else**

```js
function onLoginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("please write your name");
  }
```

- loginInput.value 값을 username 이라고 정의해주기 그리고 그값이 만약 공백이면 알림이 나오게 하기

```js
function onLoginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("please write your name");
  } else if (username.length > 15) {
    alert("you are name is too long");
  }
}
loginButton.addEventListener("click", onLoginBtnClick);
```

- username.length으로 string길이를 구할수있다

**HTMl에서 최대 글자수 조정하는 방법** 

```html
<input
        required
        maxlength="15"
        type="text"
        placeholder="what is your name?"
      />
```

-  required 으로 최대글자 길이를 15로 요구할수있다 

```html
 <form id="login-form">
      <input
        required
        maxlength="15"
        type="text"
        placeholder="what is your name?"
      />
      <button>Log In</button>
    </form>
```

- form안에서 작업을 안해주면 확인작업이 안된다

- input의 유효성 검사를 작동하기위해서는 form태그를 활용해야된다,그래서 input은 form안에 있어야된다

```js
function onLoginBtnClick() {
  const username = loginInput.value;
  console.log(username);
}
loginButton.addEventListener("click", onLoginBtnClick);
```

- js에서  console.log(username) 인만 해줘도 html이 알아서 글자수가 15넘으면 더이상입력  할수없게하고

 	공백인 경우에는 입력하라는 메세지를 띄워준다 (이렇게 하는 방법이 더좋다)

- html만으로도 input에 입력하고 bottn을 누르면 자동으로 submit이 되어 새로고침이된다

## 4.2 (events1)

**event "submit"**

```js
function onLoginSubmit() {
  const username = loginInput.value;
  console.log(username);
}
loginform.addEventListener("submit", onLoginSubmit);
```

- form을 submit 할때 입력값을 받아낸다

- 여기서 새로고침이 일어나는건 form submit의 기본동작이라 아직 새로고침이된다

()을 더하면 브라우저가 보자마자 자동으로 function을 실행시켜버림

```js
function onLoginSubmit(tomato) {
  tomato.preventDefault();
  console.log(tomato);
}
loginform.addEventListener("submit", onLoginSubmit);
```

- onLoginSubmit이라는 function을 만들고 ,function이 하나의 argument를 받도록 한다
- 우리는 argument공간만 제공하면된다 ,그러면 첫번째로 실행된 event에 대한 정보를 지닌 argument를 채워보여준다  console.log(tomato);
-  preventDefault()이라는 function은 event의 기본 행동이 발생하지않도록 막는것임

**event. preventDefault()**

```js
const loginform = document.getElementById("login-form");
const loginInput = loginform.querySelector("input");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}
loginform.addEventListener("submit", onLoginSubmit);
```

- submit event가 발생할때는 js는 onLoginSubmit을 호출하고 이때 event object를 argument로 주고

`function onLoginSubmit(event)`

- 그리고 나서 기본동작이 실행되는 걸 막아준다  `event.preventDefault();`

## 4.3 (events2 )

```js
const link = document.querySelector("a");
function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
}
link.addEventListener("click", handleLinkClick);
```

- 링크의 기본동작은 클릭시 다른 페이지로 이동

- 브라우저가 하려고 하는 동작을 허용하지 않고 막아버림  `event.preventDefault();`

- addEventListener안에 있는 함수는 직접 실행하지 않는다 브라우저가 해주기 때문에 

  브라우저는 event에 대한 정보를 담아 실해 시켜준다 그래서 우리는 자리만 만들어 주면되고 그안에는 함수가 있다   `function handleLinkClick(event) {` `event.preventDefault();` }`

## 4.4 (get username) classList

```js
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  greeting.innerText = "Hello " + username;
  greeting.classList.remove("hidden");
}
```

- 유저가 form을 통해 제출했을때, 기본동작은 막아주고 

- hidden 이라는 class name을 더해줘서 html에 form을 숨기고
- 유저의 이름을 변수로 저장해주고 그이름은 h1 안에 넣어준다

**js에서 반복되는 clssname 저장할때는 대문자로 표기한다**

```js
const HIDDEN_CLASSNAME = "hidden";
```

- 일반적으로 string만 포함된 변수를 저장할때는 대문자로 표기한다

**저장한 clasname으로 classList에 넣어주기**

```js
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
```

- `loginForm.classList.add(HIDDEN_CLASSNAME);`

**"Hello " + username을 대체할 방법**

```js
 greeting.innerText = "Hello " + username;
 greeting.innerText = `Hello ${username}`;    <---이방법을 더 선호한다 
```

- 둘다 같은 뜻이다 

- Hello 다음에 한칸 띄우고 username변수의 값을 표시해준다 
- 밑에 코드는 두가지 규칙이 있다  -  `greeting.innerText = Hello ${username};`
  - 변수와 string을 결합하거나 변수를 string안에 집어넣고 싶다면 `${변수명}` 이렇게 표현하면 된다 
  - ``(백틱) 이기호로 시작해야된다

## 4.5 (save username) local storage

**localStorage**

```js
 localStorage.setItem(key", "value");
 localStorage.getItem("key");
 localStorage.removeItem("key");
```

- 브라우저에 뭔가를 저장할수 있게 해준다 그래서 나중에 가져다가 쓸수 있게 해줌

  F12를 하고 application에서 localstorage를 볼수있다 

```js
 const username = loginInput.value;
localStorage.setItem("username", "username");
```

- 첫번쩨 username은 저장될 아이템의 이름이고 두번째 값은 username의 변수이다

```js
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
```

-  `localStorage.setItem("username", username)` 순서가 바뀌면 작동하지않음

## 4.6 (if/else)

- local storage 가 비어있으면 form 부터 보여주면서 지금까지 해오던걸하면되고

- local storage에 유저정보가 있으면 form을 보여주면 안된다 h1요소를 보여줘야된다

**문자열이 반복되는 경우는 const를 해준다** 

```
const USERNAME_KEY = "username";
localStorage.setItem(USERNAME_KEY, username);
```

if/else

```js
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greeting.innerText = `Hello ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
```

- greeting에게 글자를 추가해주고 clssname을 제거해줘야된다

**반복되는 작업을 함수로 만드는 방법**

```js
function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

else {
  paintGreeting(savedUsername);
}
paintGreeting(username);
```

- 각각 인자로 savedUsername와 username을 넣어준다
- 우리가 함수를 호출하는  위치에  따라 유저정보는 다른 곳에서 오게된다

- `paintGreeting(username)` 는 `function 함수이름(argument)` 이 순서대로 작성해야된다 

  그리고 argument는 이전에 정의한 변수명과는 아무 상관이 없다. 전에`username`을 썼다고 해서 위에서 정의한 `const username`이 들어가는 것이 아니다

- 함수 뒤의 (괄호) 안에 들어가는 것은 그 함수 안에서 사용할 변수의 이름을 임의로 지어주는 것 뿐이다.



## 5.0 (setInterval)

**interval는 매번 일어나야하는 무언가를 뜻함**

```js
const clock = document.querySelector("h2#clock");
function sayHello() {
  console.log("Hello");
}
setInterval(sayHello, 5000);
```

- setInterval는 두개의 argument를 받는다

- 첫번째는 실행하고자 하는 function이고 두번째는 호출되는 function의 간격을말함(ms초단위) 5000ms=5초

## 5.1 (setTimeout)

```js
const clock = document.querySelector("h2#clock");
function sayHello() {
  console.log("Hello");
}
setTimeout(sayHello,5000)
```

- 첫번째는 실행하고자 하는 function이고 두번째는 호출되는 function을 얼마나 기다릴지 넣기 

  그래서 바로 시작하지않고 5초를 기다리고 실행한다 (ms초단위) 5000ms=5초 

```js
const clock = document.querySelector("h2#clock");
function getClick() {
  const date = new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
setInterval(getClick, 1000);
```

- 매초마다 새로운 Date object를 만든다 `date.getHours()`, `date.getMinutes()`,`date.getSeconds()`

- new Date(); object는 현재날짜, 현재시간,분,초 에대한 정보를 가지고 있고

```js
getClick();
setInterval(getClick, 1000);
```

- 1초를 기다리지않고 바로 website가 load 되자마자 getClock()을 실행하고 또 매초마다 다시 실행되도록 한다 

- `getClick();`즉시 호출한다는 뜻 그리고 매초마다 `setInterval(getClick, 1000);`을 실행한다

```js
function getClick() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
```

`clock.innerText=`으로 clock안에 집어넣는다는 뜻

## 5.2 (padStart)

- `padStart()`는 string에 쓸수 있는 function이다 

- 길이다 1인문자가 있으면 padStart()으로 string의 시작 부분에 padding을 추가해달라고한다

 	 길이가 2는 되어야한다 만약 길이가 2가 안되면 앞쪽에 0을 추가한다 

- padEnd()라는것도 있다 그반대 개념이다

- ex) "hello".padStart(10,"x")    ----> xxxxxhello

```js
function getClick() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
```

- date.getHours()엔 padStart()를 쓸수 없다 그래서 String안에는 쓸수있기때문에 String안으로 date를 넣어준다

## 5.3 정리

1. getClick이라는 function을 만들었고 Date라는 object를 생성했다 Date라는 object는 이걸호출하는 당시의 현재 날자와 시간을 알려준다 
2. `date.getHours()/date.getMinutes()/date.getSeconds()`을 String으로 감싸줘서 숫자를 문자열로 바꿔주었음
3. `.padStart(2, "0")` 을 그뒤에 추가할수있었음
4. 구한 시간을 clock의innerText로 넣어줌
5. `getClick()`만 작성하면 한번만 일어나고 끝나고 작동하지않는다 시계가
6. 대신에 `setInterval(getClick, 1000)`을 작성하면  매 1초마다 실행이 된다
   - setInterval은 정한시간마다 function을 실행시켜준다 / 1000ms(1초)



## 6.0 (random)

**Array 가져오는방법**

Array는 각 object들을 (,)콤마로 구분 마지막 object에게도  (,)콤마 해야된다

이 object들은 string으로 된 명언을 가지고 있다 string뒤에도 모두 콤마를 해준다

```js
console.log(quotes[1]);
```

- 첫번째 element를 가져올때는 1이아니라 0을 써야한다

``` js
console.log(quotes[10 - 1]);
```

- 마지막 element를 가져오기 위해서는 숫자를 세어보고 -1을 해줘야한다 왜냐 컴뷰터는 0부터 읽기 때문이다

**random**

Math module중 random()이라는 function을 가지고 있다 `Math.random()`

random()은 0~1사이의 랜덤한 숫자를 제공해 준다

```js
console.log(quotes[Math.floor(Math.randow() * 10)]);
```

- Math.random()에 10을 곱하면 0~10사이의 숫자들을 얻을수있다   `Math.random()*10`

- 나오는 값들이 소수점을 가지는 float이다 그것들을 없애기위해서는 세가지 function을 쓸수있다

- Math.round() = 반올림 / Math.ceil() =  소수점이 있으면 무조건 반올림해준다 / Math.floor() = 내림

**직접 Array의  갯수를 세어보지않고도 길이 아는법**

```js
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
```

- `* quotes.length` quotes의 길이만큼 곱한다

```js
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
```

- todaysQuote는 quotes 이다 그안에는 quote와author둘다 있기 때문에  todaysQuote.quote이렇게 각각

 선언해줘야한다





























