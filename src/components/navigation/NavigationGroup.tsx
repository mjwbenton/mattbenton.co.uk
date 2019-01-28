import React from "react";
import { Node } from "./Node";

const NavigationGroup: React.FunctionComponent<{
  groupName: string;
  nodes: Array<Node>;
}> = ({ groupName, nodes }) => (
  <div key={groupName} className="mb-navigation__section">
    <input
      className="mb-navigation__checkbox"
      type="checkbox"
      id={`mbNavigationCheckbox${groupName}`}
    />
    <label
      className="mb-navigation__label"
      htmlFor={`mbNavigationCheckbox${groupName}`}
    >
      {groupName}
    </label>
    <ul className="mb-navigation__list">
      {nodes.map((node: Node) => (
        <li key={node.fields.slug} className="mb-navigation__item">
          <a href={node.fields.slug} className="mb-navigation__link">
            {node.frontmatter.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
export default NavigationGroup;