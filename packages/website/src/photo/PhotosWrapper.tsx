import React from "react";

export default function PhotosWrapper(
  props: Omit<JSX.IntrinsicElements["div"], "className">
) {
  return <div {...props} className="flex flex-col items-start w-full" />;
}
