/* eslint-disable */

import React, {useState} from 'react';
// react에 있는 내장함수인 useState를 쓰겟다는 얘기
import logo from './logo.svg';
import './App.css';

function App() {

  const [listTitle, setListTitle] = useState(['강남 고기 맛집', '남자 코트 추천', '범계 분식 맛집']);
  //! state에 저장하는 이유 : state가 변경되면 HTML이 자동으로 재렌더링이 된다(새로고침 X)
  // useState를 쓰면 [a, b] 형식의 배열을 리턴하는데 a는 '강남 고기 맛집' 이라는 초기값이 들어가고
    // b는 a를 바꿔주는 함수이다.
    // destructure 문법 사용 -> 문자, 숫자, array, object 다 저장가능

  const [count, setCount] = useState(0);
  


  function handleClickCountUp() {
    setCount(count + 1)
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
  

  return (
    <div className="App">
      <div className="black-nav">
        {/* JSX문법을 써야 하므로 class를 바로 쓸수 없다(class 문법(자바스크립트용어)과 중복된다) */}
        <div style={{color : 'white', fontSize : '25px'}}>개발 Blog</div>
        {/* style속성을 바꾸려면 스타일 안에 스타일속성을 객체형식으로 넣어야 하고, carmelCase로 써야한다. */}
      </div>

      <div className='list'>
        <h3> { listTitle[0] } <span onClick={ handleClickCountUp } style={{cursor : 'pointer'}}> 👍 </span> {count} </h3>
        <p>2월 16일 발행</p>
        <hr />  
        {/* underbar만들어 준다 */}
      </div>

      
      <button onClick={changeListTitle}>제목 변경</button>

      
    </div>
  );
}

export default App;
