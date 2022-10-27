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

export type TabProps = Either<ControlledTabProps, UncontrolledTabProps>;

export type TabPaneProps = {
  title: string;
  selected?: boolean;
  children: React.ReactElement;
};
