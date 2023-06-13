import { shallow, mount, render } from "enzyme";
import React from "react";
import CounterButton from './CounterButton';
import toJson from "enzyme-to-json";


it("Expect to return Card component", () => {
  const mockColor = 'red'
  const wrapper = shallow(<CounterButton color={mockColor} />);
  expect(
    toJson(wrapper)
  ).toMatchSnapshot();
});

it("correctlu increments the counter", () => {
  const mockColor = 'red'
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate('click')
  wrapper.find('[id="counter"]').simulate('click')
  expect(wrapper.state()).toEqual({ count: 2 })
  wrapper.find('[id="counter"]').simulate('keypress')
  expect(wrapper.state()).toEqual({ count: 2 })
  expect(wrapper.props().color).toEqual("red")
})