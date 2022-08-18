// prototype -> 부모 자식관계 같은 obj 생성 시 유전자 처럼 데이터를 갖게 해준

function makeObject(q, w) {  // class makeObject로 해도 된다
  this.q = q;
  this.w = w;
}

makeObject.prototype.name = 'kim'

var nunu = new makeObject('nunu skill1', 'nunu skill2');
var garen = new makeObject('garen skill1', 'garen skill2');

var 어레이 = [4, 2, 1];
var 어레이 = new Array(4, 2, 1);