// 함수와 객체를 입력받아 조건별로 아래와 같은 동작을 수행해야 합니다.

// 객체의 'status' 속성값이 'fail'인 경우, 'Something went wrong!'을 리턴해야 합니다.
// 객체의 'status' 속성값이 'success'인 경우, 'data' 속성값에 입력받은 함수를 적용한 결과를 리턴해야 합니다.

const callbackOnly = (callback, obj) => {
  if (obj.status === "fail") return "Something went wrong!";
  return callback(obj.data);
};

function getDomain(email) {
  return email.split("@")[1].split(".")[0];
}

function getUserId(email) {
  return email.split("@")[0];
}

let output = callbackOnly(getDomain, {
  status: "success",
  data: "mike@codestates.com",
});
console.log(output); // --> codestate

output = callbackOnly(getUserId, {
  status: "success",
  data: "mike@codestates.com",
});
console.log(output); // --> mike

output = callbackOnly(getUserId, {
  status: "fail",
  data: "mike@codestates.com",
});
console.log(output); // --> 'Something went wrong!'
