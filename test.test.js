describe("snapshot testing", () => {
  it("snapshot 1", () => {
    let wrapper = shallow(<Table />);
    expect(wrapper).toMatchSnapshot();
  });
});
