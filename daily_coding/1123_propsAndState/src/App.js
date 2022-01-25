import "./styles.css";

function Parent() {
  return (
    <div className="parent">
      <h1>I'm the parent</h1>
      <Child text={"I'm the eldest child"} />
      {/* Child 컴포넌트에 또 다른 문자열을 props 로 전달해 보세요 */}
      <Child />
    </div>
  );
}

function Child(props) {
  // console 을 열어 props 의 형태를 직접 확인하세요.
  console.log("props : ", props);
  return (
    <div className="child">
      <p>{props.text}</p>
    </div>
  );
}

export default Parent;
