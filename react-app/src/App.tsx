import MyButton from "./components/MyButton";

function App() {
  return (
    <div>
      <MyButton
        children={"Hey"}
        onClick={() => console.log("B clicked")}
      ></MyButton>
    </div>
  );
}

export default App;
