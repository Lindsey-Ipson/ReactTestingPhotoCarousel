import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";
import image from "./image1.jpg"

it("renders without crashing", function() {
  render(<Card
    caption="Photo by Richard Pasquarella on Unsplash" 
    src={image}
    currNum={1}
    totalNum={3}
  />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<Card
    caption="Photo by Richard Pasquarella on Unsplash" 
    src={image}
    currNum={1}
    totalNum={3}
  />);
  expect(asFragment()).toMatchSnapshot();
});