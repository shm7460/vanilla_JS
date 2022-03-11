

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

## 3.6















































