import Tab, { TabPane } from "./components/Tab";

function App() {
  return (
    <Tab active={1}>
      <TabPane title="Lemon">
        <div> Lemon is yellow </div>
      </TabPane>
      <TabPane title="Strawberry">
        <div>Strawberry is red</div>
      </TabPane>
      <TabPane title="Pear">
        <div> Pear is green</div>
      </TabPane>
    </Tab>
  );
}

export default App;
