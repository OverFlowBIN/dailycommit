/* eslint-disable */

import React, {useState, Component} from 'react';
// react에 있는 내장함수인 useState를 쓰겟다는 얘기
import logo from './logo.svg';
import './App.css';

function App() {

  const [listTitle, setListTitle] = useState(['남자 코트 추천', '강남 맛집 추천', '안양 분식 맛집']);
  //! state에 저장하는 이유 : state가 변경되면 HTML이 자동으로 재렌더링이 된다(새로고침 X)
  // useState를 쓰면 [a, b] 형식의 배열을 리턴하는데 a는 '강남 고기 맛집' 이라는 초기값이 들어가고
    // b는 a를 바꿔주는 함수이다.
    // destructure 문법 사용 -> 문자, 숫자, array, object 다 저장가능

  const [count, setCount] = useState(new Array(listTitle.length).fill(0));
  const [modal, setModal] = useState(false);
  const [clickTitle, setClickTitle] = useState(0);
  const [input, setInput] = useState('');
  
  
  


  function handleClickCountUp(idx) {
    const countUpArr = [...count]; // deep copy...
    countUpArr[idx]++;
    setCount(countUpArr)
  }

  function changeListTitle() {
    const newArr = [...listTitle];  
    // state를 변경할 때는 deep copy를 해야한다
    // deep copy를 안하면 그냥 값 공유만된다.
    newArr[0] = '범계 고기 맛집'
    setListTitle(newArr)
    //! state 자체의 배열을 사용 할 수 없다?
    console.log(listTitle)
  }

  function changeListTitleSort() {
    const newArr = [...listTitle];
    const sortedArr = newArr.sort();
    setListTitle(sortedArr)
  }
  
  function modalOn() {
    setModal(!modal);
  }

  // 글(data)을 추가할때는 unshift또는 push로 추가 할수 있지만
  // spread문법을 이용해서 추가해주는 것이 좋다.(최신 문법)
  function addTitle() {
    const addArr = [input, ...listTitle]
    setListTitle(addArr);
  }


  return (
    
    <div className="App">

    <button onClick={changeListTitle}>제목 변경</button>

    <button onClick={changeListTitleSort}>제목 글자순 변경</button>


      <div className="black-nav">
        {/* JSX문법을 써야 하므로 class를 바로 쓸수 없다(class 문법(자바스크립트용어)과 중복된다) */}
        <div style={{color : 'white', fontSize : '25px'}}>개발 Blog</div>
        {/* style속성을 바꾸려면 스타일 안에 스타일속성을 객체형식으로 넣어야 하고, carmelCase로 써야한다. */}
      </div>

      { 
        listTitle.map((el, idx) => {
          return (
            <div className='list' key={idx}>
              <h3 style={{cursor : 'pointer'}} onClick={ () => { setClickTitle(idx) } }> { el } <span onClick={ () => handleClickCountUp(idx) } > 👍  {count[idx]} </span>  </h3>
              <p>2월 16일 발행</p>
              <hr />  
              {/* underbar만들어 준다 */}
            </div>
          )
        })
        // arrow function을 이용할 떄 여러줄이면 return을 꼭 써야 한다.
      }
      {/* 
        JSX문법에서는 for 반복문을 사용할 수 없다 (중괄호는 변수명 함수명 등 만 가능하다)
        만약 반복문을 쓰고 싶으면 JSX가 아닌 그 위에 따로 함수를 만들어 거기서 반복시켜야한다.
      */}


      {/* 글 추가 만들기 */}
      <div className='publish'>
        <input onChange={ (e)=>{ setInput(e.target.value) } } />
        <button onClick={ addTitle } >SAVE</button>
      </div>


    
      <button onClick={ modalOn }> { !modal ? '모달창 열기' : '모달창 닫기'} </button>
      { 
        modal ? 
        <Modal listTitle={listTitle} clickTitle={clickTitle} /> //작명(전송할, 전솔될 이름) = {전송할 state} 
        : null }
      {/* JSX에서는 if로 조건문을 만들수 없다 -> 삼항연산자를 이용해서 만들어야한다 */}
      
      
      <Profile />

    </div>
  );
}

function Modal(props) {
  // props : 부모로 전달받은 props는 props안에 객체형태로 들어있다.
  // component 이름은 언제나 대문자로 시작
  // 빈복적으로 출현하는 HTML, 자주 변경되는 UI, page구성 등을 컴포넌트로 하면 편하다
  return (
    <>
      <div className="modal">
        <h2>{ props.listTitle[props.clickTitle] }</h2>
        {/* app.js의 state를 이용하려면 app.js안에서 modal function을 작성하거나
         props를 사용해야한다. 하지만, 보통 컴포넌트용 function 안에다가 컴포넌트용 function을 만들진 않는다.
         -> react library 사용의 장점을 훼손한다. */}
        <p>날씨</p>
        <p>상세내용</p>
      </div>
    </>
  )
}


//! class를 이용한 이전 React 문법
class Profile extends React.Component {
  // class: 변수/함수 보관하는 덩어리
  // extends: 오른쪽에 있는 놈의 성질을 물려받겠습니다.
  constructor(){
    // constructor: class의 변수/초기값 저장할 때 쓴다.
    super();
    this.state = { name: 'Kim', age: 30 }
  }

  changeAge = () => {
    if (this.state.age === 30) {
      this.setState( { age : 20 } )
    } else {
      this.setState( {age : 30 } )
    }
  }
  // 함수를 추가 할 떄는 function 함수이름() {} 로하면안되고 class 함수 기본 문법으로 만들어야 한다.

  render(){
    return (
      <div className="oldCompo">
        <div>class를 이용한 컴포넌트 입니다.</div>
        <div>저는 {this.state.name} 입니다</div>
        <div>저의 나이는 {this.state.age} 입니다</div>
        <button onClick={ () => { this.setState( this.state.name === 'Kim' ? {name: 'park'} : {name: 'Kim'}) }}>이름 바꾸기</button>
        <button onClick={ this.changeAge }>나이 바꾸기</button>
        {/* state를 변경할때는 this.setState를 써야한다
        changAge를 실행할때는 arrow function 으로 this.changAge() 실행을 실행시켜주거나
        () => { this.changeAge() } -> this.changeAge.bind(this)로 쓰거나
        changeAge() {}를 만들때 changeAge = () => {} 이런식으로 arrowfunction으로 만들어 주어야 한다 .. 왜...?*/}
      </div> 
    )
  }
}



export default App;
