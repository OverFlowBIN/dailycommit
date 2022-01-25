'use strict';
  
  //! Promise is a JavaScript object for asynchronous operation.
  // 자바스크립트 안에 내장되어있는 object이다. 비동기적인것을 수행할 때 callback 함수 대신에 쓸수있음
    // state - 성공 vs 실패
    // producer, consumer 차이점 알기

  //! state : pending -> fulfilled or rejected
  //! Producer vs Consumer




  //! Producer

    // when new promise is created, the executor runs automatically.
    const promise = new Promise((resolve, reject) => {
      // oing some heavy work -> synchronouse(X) , asychronous(O)
      console.log('doing something...');
 
      // setTimeout(() => {
      //   resolve('ellie');
      // }, 2000);

      setTimeout(() => {
        reject(new Error('no network'));
      }, 2000);
    });
    // promise를 만드는 순간 excuter라는 callback함수가 바로 실행된다.





  //! Consumners : then, catch, finally

    promise
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        console.log('finally')
        // 성공하던 실패하던 마지막에 무조건 실행됨
      });

    // then : promise가 정상적으로 수행되서 resolve에 있는 parameter가 value로 잘 들어온것을 확인 할 수 있다.




    
  //! Promise chaning

      const fetchNumber = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
      });

      fetchNumber
      .then(num => num  * 2)
      .then(num => num  * 3)
      .then(num => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(num - 1), 1000);
        });
      })
      .then(num => console.log(num));




  //! Error Handling

      const getHen = () => 
        new Promise((resolve, reject) => {
          setTimeout(() => resolve('닭'), 1000);
        });

      const getEgg = hen =>
        new Promise((resolve, reject) => {
          setTimeout(() => resolve(`${hen} => 달걀`), 1000);
          // setTimeout(() => reject(new Error(`error! ${hen} => 달걀`)), 1000);
          // hen은 연결된 getHen의 resolve의 data 값인 '닭' 이다
          // 여기서 then으로 이어진 resolve의 data 값은 '닭 => 달걀' 이다
        });

      const cook = egg => 
        new Promise((resolve, reject) => {
          setTimeout(() => resolve(`${egg} => 계란후라이`), 1000);
          // egg은 연결된 getEgg의 resolve의 data 값인 '닭 => 달걀' 이다
          // 여기서 then으로 이어진 resolve의 data 값은 '닭 => 달걀 => 계란후라이' 이다
        });

      getHen()
      .then(hen => getEgg(hen))
      .catch(error => {          // 전체 체인중 getEgg에 문제가 생겨도 빵을 대신 전달.
        return '빵';             // 만약 catch가 없었다면 Error가 뜬다.
      })
      .then(egg => cook(egg))
      .then(meal => console.log(meal));
      // error 없을 시 결과값 : 닭 => 달걀 => 계란후라이
      
      // 이런식으로 짧게 작성 가능
      // getHen() 
      //   .then(getEgg) 하나의 value만 받을 경우 다음과 같은 형태로 써도 된다.
      //   .then(cook)
      //   .then(console.log)



