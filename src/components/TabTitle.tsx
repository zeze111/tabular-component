import "../assets/css/tab.css";

type TabTitleProps = {
  title: string;
  index: number;
  setActiveTab: (index: number) => void;
  activeTab: number;
  styles?: string;
  onActiveChange?: () => {};
};

const TabTitle: React.FC<TabTitleProps> = ({
  title,
  setActiveTab,
  activeTab,
  index,
  styles = "",
  onActiveChange,
}) => {
  let className = `tab-title ${styles}`;

  if (activeTab === index) {
    className += " tab-title-active";
  }
  return (
    <div
      data-testid="tab-title"
      className={className}
      onClick={() => {
        setActiveTab(index);
        onActiveChange?.();
      }}
    >
      <span>{title}</span>
    </div>
  );
};

export default TabTitle;
