import Tab, { TabPane } from "./components/Tab";

function App() {
  return (
    <Tab initialActive={2}>
      <TabPane title="First Pane">
        <div> First Pane Body </div>
      </TabPane>
      <TabPane title="Second Pane">
        <div>Second Pane Body</div>
      </TabPane>
      <TabPane title="Third Pane">
        <div>Third Pane Body</div>
      </TabPane>
    </Tab>
  );
}

export default App;
