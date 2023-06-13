import { shallow, mount, render } from "enzyme";
import React from "react";
import CardList from './CardList';
import toJson from "enzyme-to-json";

it("Expect to return Card component", () => {
  const mockRobot = [
    {
      id: 1,
      name: "John Snow",
      username: 'JohnJohn',
      email: "john@example.com"
    }
  ]
  const wrapper = shallow(<CardList robots={mockRobot} />);
  expect(
    toJson(wrapper)
  ).toMatchSnapshot();
});