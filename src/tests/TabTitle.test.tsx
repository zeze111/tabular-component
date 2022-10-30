import { render, screen } from "@testing-library/react";
import TabTitle from "../components/TabTitle";

const defaultProps = {
  activeTab: 0,
  title: "Test 1",
  index: 1,
  setActiveTab: () => {},
};

test("render TabTitle component", () => {
  render(<TabTitle {...defaultProps} />);
  const element = screen.getByTestId("tab-title");
  expect(element).toBeInTheDocument();
});
