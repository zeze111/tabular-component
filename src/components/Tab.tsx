import { Children, cloneElement, useMemo, useRef, useState } from "react";
import "../assets/css/tab.css";
import TabTitle from "./TabTitle";

type Only<T, U> = {
  [P in keyof T]: T[P];
} & Omit<
  {
    [P in keyof U]?: never;
  },
  keyof T
>;

type Either<T, U> = Only<T, U> | Only<U, T>;

interface TabInitialProps {
  children: React.ReactElement<TabPaneProps>[];
  styles?: string;
  onActiveChange?: () => {};
}

interface ControlledTabProps extends TabInitialProps {
  active: number;
}

interface UncontrolledTabProps extends TabInitialProps {
  initialActive: number;
}

type TabProps = Either<ControlledTabProps, UncontrolledTabProps>;

type TabPaneProps = {
  title: string;
  selected?: boolean;
  children: React.ReactElement;
};

const Tab: React.FC<TabProps> = ({
  children,
  styles,
  initialActive,
  active,
  onActiveChange,
}) => {
  const tabRef = useRef(initialActive);

  const [activeTab, setActiveTab] = useState(active ? active : 0);

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
