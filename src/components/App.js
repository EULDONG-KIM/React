import React from "react";
class App extends React.Component {
  /* sayHey 메소드 */
  sayHey() {
    alert("hey");
  }

  /* render 메소드 */
  render() {
    let text = "Dev-Server";

    let pStyle = {
      color: "aqua",
      backgroundColor: "black"
    };

    return (
      <div>
        <h1> Hello React </h1>
        <h2> Welcome to {text}</h2>
        <button onClick={this.sayHey}>Click Me</button>
        <p style={pStyle}>{1 == 1 ? "True" : "False"}</p>
      </div>
    );
  }
}
export default App;
