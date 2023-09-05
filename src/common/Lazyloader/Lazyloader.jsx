import React from "react";

const Lazyloader = ({ Loader, loaderLength = 3 }) => {
  return Array.from(new Array(loaderLength)).map((data, i) => (
    <Loader key={i} />
  ));
};

export default Lazyloader;
