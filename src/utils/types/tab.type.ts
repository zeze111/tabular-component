// a type definition that takes 2 interfaces
// but returns only one based on the given prop
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

export type TabPaneProps = {
  title: string;
  selected?: boolean;
  children: React.ReactElement;
};

export type TabComponent = React.FC<TabProps> & { Pane: React.FC<TabPaneProps> };
