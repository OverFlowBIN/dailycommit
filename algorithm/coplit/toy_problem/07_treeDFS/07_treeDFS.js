// 문제
// 임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아, 
// 해당 노드를 시작으로 깊이 우선 탐색(DFS, Depth First Search)을 합니다. 
// 이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.

// 주의사항
// 생성자 함수(Node)와 메소드(addChild)는 변경하지 않아야 합니다.

// 수도 코드
// root = {value: 1, children: []}  // [1]
// root = {value: 1, children: [{value: 2, children: []}, {value: 3, children: []}]}
// root = {value: 1, children: [{value: 2, children: [{value: 4, children: []}, {value: 5, children: []}]}, {value: 3, children: []}]}
// 이런 식으로 생성될 때 dfs(root) 결과값은 [1, 2, 4, 5, 3]






// solve.1
let dfs = function (node, result) {
  if(!result) result = []
  result.push(node.value)
  
  if(node.children.length !== 0){
    for(let i = 0; i < node.children.length; i++){
      dfs(node.children[i], result)
    }
  }
  
  return result;
};



// solve.2
let dfs = function (node) {

  let result = [];
  // if(node.children.length === 0) {
  //   return;
  // }
  result.push(node.value);

  
  for(let el of node.children) {
    result = result.concat([...dfs(el)])
  }

  return result;

};



// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};





// 입출력 예시
let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = dfs(root);
console.log(output); // --> [1, 2, 4, 5, 3]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = dfs(root);
console.log(output); // --> [1, 2, 4, 6, 5, 3, 7]



// 결론
// 문제 해답, 문제 해답 2는 둘 다 재귀를 사용한다.
// 문제 해답은 result라는 배열에 node값을 미리 넣어두고 concat을 사용해서 배열의 본래 값은 변경시키지 않으면서 node값을 추가한다. dfs(el)을 통해 재귀 호출되며 제일 마지막 children에서 값을 계산해서 result에 계속 추가하기 시작한다.
// 문제 해답 2는 같은 방식이지만 인자로 result를 추가해주었다. result는 임의로 넣어주었기 때문에 어디에도 선언되어 있지 않다. 따라서 undefined를 가지는데, 그 점을 이용해서 result에 배열을 할당해준다.
// 초기값은 배열 메서드인 push를 이용해서 node값을 넣어주고 children(배열)에 값이 존재하면 dfs(N.C [i], result)를 재귀 호출시켜 반복문을 실행하게 된다. 마찬가지로 children의 값이 없을 때까지 찾고 거기서부터 result(배열)에 push 해준다.
// push는 result(배열)의 본래 값을 변경시키는데 문제에서 기존 값을 default 해야 한다는 말이 없으니 push도 사용 가능하다. 

 


