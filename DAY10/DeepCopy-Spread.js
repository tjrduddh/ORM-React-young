// DeepCopy의 주요기법은 자바스크립트 Spread 연산자 (Operator)에 대한 기초 사용법을 실습해봅니다
// Spread연산자는 배열/객체의 복사/병합시 주로 사용한다

// 1) 배열기반 Spread연산자 사용해보기
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

//두개 배열을 spread연산자를 통해 병합해보자
///스프레드 연산자는 ...복사할배열변수 형식으로 복사본을 만든다(별도의 메모리 주소와 공간에 할당됨)
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log("스프레드 연산자에 의해 병합된 신규배열", numbersCombined);

//특정 배열내 값의 나머지 값을 별도 변수로 할당하기
const numbers = [10, 11, 12, 13, 14, 15];
const [one, two, ...rest] = numbers;

console.log("one, two, ...rest", one, two, rest);

//배열 데이터를 복사하기
const originNumbers = [1, 2, 3, 4, 5];
//const newNumbers = originNumbers; //원본 데이터를 공유하는 shallow copy
const newNumbers = [...originNumbers]; //신규 데이터 배열을 만드는 Deep Copy

console.log("deepcopy-spread", newNumbers);

//객체 기반에서의 deepcopy 구현하기
const user = {
  id: 1,
  userName: "사용자",
  age: 50,
  address: {
    sido: "경기도",
    detail: "성남시",
  },
};

const user1 = user;
user1.userName = "오영석";

const user2 = { ...user }; //DeepCopy = 분리된 복사본을 복사하기/ 1Depth까지만 복사
user2.age = 100;
user2.address.sido = "서울특별시"; //DeepCopy Spread연산자는 1Depth 속성까지만 딥카피가 되고 2Depth부터는 원본 소스의 값을 공유

console.log("user1", user1);
console.log("user2", user2);

console.log("user === user1", user === user1);
console.log("user1 === user2", user1 === user2);

//DeepCopy 사용시 기존 속성 값 및 신규 속성 추가하기
const car = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

//spread연산자를 이용해 복사본을 만들고 기존의 속성값을 변경하거나 산규 속성을 추가하영 신규 객체를 생성할 수 있다
const myCar = { ...car, brand: "kia", price: 5500 };

console.log("mycar", myCar);

//두개의 별도 다른 객체도 쉽게 병합이 가능합니다.
const company = {
  companyName: "kia auto",
  country: "korea",
  telephone: "82)02-4685-1355",
};

const carInfo = { ...myCar, ...company };
console.log("두개 이상의 객체를 병합해서 하나의 객체로 만들자", carInfo);

//2Depth 이상의 객체의 DeepCopy구현하기
const order = {
  orderNo: 1000,
  orderName: "오영석",
  amount: 10000,
  products: [
    { pid: 1, productName: "LG" },
    { pid: 2, productName: "ASUS" },
  ],
  address: {
    zipCode: "1111",
    sido: "경기도",
    detail: "평택시",
  },
};

//2Depth이상의 DeepCopy사용하기
const newOrder = {
  ...order,
  products: [
    ...order.products.map((p) => {
      //배열내의 객체들의 DeepCopy 처리하기
      //map을 통해서는 배열의 복사본(DeepCopy)만 만들어지고 배열내의 객체들은 추가로 DeepCopy를 진행해줘야합니다.
      return { ...p };
      //return p; //Swallow copy(원본을 그대로 사용하기)
    }),
  ],
  address: { ...order.address },
};

//2Depth이상 속성을 DeepCopy한 속성의 값을 바꾼 후 원본값과 비교해보기
newOrder.products[0].productName = "삼성노트북";
newOrder.address.sido = "제주도";

console.log("order", order);
console.log("new order", newOrder);
