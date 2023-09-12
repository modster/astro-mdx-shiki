import React from "react";
import { useControls } from "theatric";

function TheatricExample() {
  const { name, age } = useControls({ name: "Andrew", age: 28 });

  return (
    <div>
      Hey, I'm {name} and I'm {age} years old.
    </div>
  );
}

export default TheatricExample;
// // index.jsx
// ReactDOM.render(<App />, document.getElementById('root'))

// // App.jsx
