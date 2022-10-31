import { Children, cloneElement, useMemo, useRef, useState } from "react";
import "../assets/css/tab.css";
import { TabComponent, TabPaneProps } from "../utils/types/tab.type";
import TabTitle from "./TabTitle";

const Tab: TabComponent = ({
  children,
  styles = "",
  initialActive,
  active,
  onActiveChange,
}) => {
  const tabRef = useRef(initialActive);

  // sets the default value to be used by the state
  const defaultActiveValue =
    useMemo(() => {
      if (initialActive && initialActive < children.length) {
        return tabRef.current;
      } else if (active && active < children.length) {
        return active;
      }
    }, [active, children.length, initialActive]) || 0;

  const [activeTab, setActiveTab] = useState(defaultActiveValue);

  // returns the string value of the current tab title
  const activeTabTitle = useMemo(
    () => children[activeTab].props.title,
    [activeTab, children]
  );

  return (
    <div data-testid="tab" className={styles}>
      <div className="titles-container">
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            setActiveTab={setActiveTab}
            index={index}
            activeTab={activeTab}
            onActiveChange={onActiveChange}
          />
        ))}
      </div>
      {Children.map(children, (el) => {
        // passes a `selected` prop to each child jsx element of the children prop
        return cloneElement(el, {
          selected: activeTabTitle === el.props.title,
        });
      })}
    </div>
  );
};

const TabPane: React.FC<TabPaneProps> = ({ children, selected }) => {
  return <div className="tab-pane">{selected ? children : null}</div>;
};

Tab.Pane = TabPane;

export default Tab;
