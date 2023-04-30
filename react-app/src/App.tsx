import MyButton from "./components/MyButton";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertShow, alertNotShow] = useState(false);
  return (
    <div>
      {alertShow && <Alert onClose={() => alertNotShow(false)}></Alert>}
      <MyButton children={"Hey"} onClick={() => alertNotShow(true)}></MyButton>
    </div>
  );
}

export default App;
