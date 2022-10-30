// a type definition that takes 2 interfaces
// but returns only one based on the given prop
type OnlyElement<T, U> = {
  [P in keyof T]: T[P];
} & Omit<
  {
    [P in keyof U]?: never;
  },
  keyof T
>;

type EitherElement<T, U> = OnlyElement<T, U> | OnlyElement<U, T>;

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

type TabProps = EitherElement<ControlledTabProps, UncontrolledTabProps>;

export type TabPaneProps = {
  title: string;
  selected?: boolean;
  children: React.ReactElement;
};

export type TabComponent = React.FC<TabProps> & {
  Pane: React.FC<TabPaneProps>;
};
