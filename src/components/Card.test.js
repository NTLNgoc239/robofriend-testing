import { shallow, mount, render } from "enzyme";
import React from "react";
import Card from './Card';
import toJson from "enzyme-to-json";


// it('expect to render card component', () => {
//   const cardComponent = shallow(<Card />)
//   expect(cardComponent.debug()).toMatchSnapshot();
// })

it("Expect to return Card component", () => {
  const wrapper = shallow(<Card />);
  expect(
    toJson(wrapper)
  ).toMatchSnapshot();
});