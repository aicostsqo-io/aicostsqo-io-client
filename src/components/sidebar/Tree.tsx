import { useRouter } from "next/router";
import React from "react";
import Tree, { useTreeState } from "react-hyper-tree";

const data = {
  id: 1,
  name: "Fields",
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

  const router = useRouter();

  const handleStartWizard = () => {
    console.log("Wizard Başlatıldı")
    router.push("/project/add-field-wizard")
  }

  return (
    <>
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
    <button className="bg-red-600 text-white" onClick={handleStartWizard}>Wizard Başlat</button>
    </>
  );
};

export default TreeComponent;
