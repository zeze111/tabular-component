import { Children, cloneElement, useMemo, useRef, useState } from "react";
import "../assets/css/tab.css";
import { TabPaneProps, TabProps } from "../utils/types/tab.type";
import TabTitle from "./TabTitle";

const Tab: React.FC<TabProps> = ({
  children,
  styles,
  initialActive,
  active,
  onActiveChange,
}) => {
  const tabRef = useRef(initialActive);

  const defaultActiveValue =
    useMemo(() => {
      if (initialActive) {
        return tabRef.current;
      } else if (active) {
        return active;
      }
    }, [active, initialActive]) || 0;

  const [activeTab, setActiveTab] = useState(defaultActiveValue);

  const activeTabTitle = useMemo(
    () => children[activeTab].props.title,
    [activeTab, children]
  );

  return (
    <div className={styles}>
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
        return cloneElement(el, {
          selected: activeTabTitle === el.props.title,
        });
      })}
    </div>
  );
};

export const TabPane: React.FC<TabPaneProps> = ({ children, selected }) => {
  return <div className="tab-pane">{selected ? children : null}</div>;
};

export default Tab;
