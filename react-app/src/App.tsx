import ListGroup from "./components/ListGroup";

function App() {
  let items = ["a", "b", "c", "d"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"English"}
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
