// 비슷한 object가 많이 만들일 있으면 class를 활용하기
// class -> object 뽑아내는 기계

function makeObject(q, w) {  // class makeObject로 해도 된다
  this.q = q;
  this.w = w;
}

var nunu = new makeObject('nunu skill1', 'nunu skill2');
var garen = new makeObject('garen skill1', 'garen skill2');

// let nunu = {
//   q : 'consume',
//   w : 'snowball',
// }

// let garen = {
//   q : 'strike',
//   w : 'courage',
// }

class Hero {
  constructor(q, w){
    this.q = q
    this.w = w
  }
}