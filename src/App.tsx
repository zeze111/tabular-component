import Tab from "./components/Tab";

// renders the tab component the according to usage
function App() {
  return (
    <Tab initialActive={2}>
      <Tab.Pane title="First Pane">
        <div> First Pane Body </div>
      </Tab.Pane>
      <Tab.Pane title="Second Pane">
        <div>Second Pane Body</div>
      </Tab.Pane>
      <Tab.Pane title="Third Pane">
        <div>Third Pane Body</div>
      </Tab.Pane>
    </Tab>
  );
}

export default App;
