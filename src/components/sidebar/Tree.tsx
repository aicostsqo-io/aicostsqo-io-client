import React from "react";
import Tree, { useTreeState } from "react-hyper-tree";

const data = {
  id: 1,
  name: "Parent 1",
  children: [
    {
      id: 2,
      name: "Add New Field",
      children: [
        {
          id: 3,
          name: "Use Wizard",
        },
        {
          id: 4,
          name: "Manually",
        },
      ],
    },
    {
      id: 5,
      name: "Open My Fields",
    },
  ],
};

const TreeComponent = () => {
  const { required, handlers } = useTreeState({
    id: "tree",
    data: data,
    defaultOpened: true,
  });

  return (
    <Tree
      {...required}
      {...handlers}
      horizontalLineStyles={{
        stroke: "#c4c4c4",
        strokeWidth: 1,
        strokeDasharray: "1 4",
      }}
      verticalLineStyles={{
        stroke: "#c4c4c4",
        strokeWidth: 1,
        strokeDasharray: "1 4",
      }}
      draggable={true}
      gapMode={"padding"}
      depthGap={40}
      disableLines={false}
      disableHorizontalLines={false}
      disableVerticalLines={false}
      verticalLineTopOffset={1}
      verticalLineOffset={4}
      renderNode={undefined}
    />
  );
};

export default TreeComponent;
