import { useRouter } from "next/router";
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
      <div className="flex flex-col gap-2 mt-5">
        <button
          className=" bg-red-400 text-white px-3 cursor-pointer"
          onClick={() => router.push("/project/add-field-wizard")}
        >
          Use Wizard To Add Field
        </button>
        <button
          className="bg-blue-400 text-white px-3 cursor-pointer"
          onClick={() => router.push("/project/fields")}
        >
          Open My Fields
        </button>
      </div>
    </>
  );
};

export default TreeComponent;
