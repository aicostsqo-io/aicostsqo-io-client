import { useTreeContext } from "@/contexts/Tree";
import { TreeItem, TreeItemProps } from "@mui/lab";
import React, { useEffect, useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

interface CustomTreeItemProps extends TreeItemProps {
  className?: string;
  rp?: any;
}

/* const getType = (label: any) => {
  console.log("label", label);
  switch (label) {
    case "RP":
      return "rp";
    case "Scanline":
      return "discontinuities";
    default:
      return "test";
  }
}; */

const CustomTreeItem = (props: CustomTreeItemProps) => {
  const [checked, setChecked] = useState(false);
  const { visualizationShowList, setVisualizationShowList, setPoint } =
    useTreeContext();

  const { rp, label } = props;

  useEffect(() => {
    setChecked(
      visualizationShowList.find(
        (item: any) => item?._id === rp?._id && item?.type === label
      )
    );
  }, [visualizationShowList, rp, label]);

  const handleToggleShow = () => {
    setPoint("Custom Object Visualizer");
    setVisualizationShowList((prev: string[]) => {
      if (checked) {
        return prev.filter(
          (item: any) => !(item?._id === rp?._id && item?.type === label)
        );
      }
      return [...prev, { ...rp, type: label }];
    });
    setChecked(!checked);
  };

  return (
    <div className="flex gap-2 items-center">
      <TreeItem {...props} />
      <div onClick={handleToggleShow} className="cursor-pointer">
        {checked ? (
          <RxEyeOpen className="text-2xl" />
        ) : (
          <RxEyeClosed className="text-2xl" />
        )}
      </div>
    </div>
  );
};

export default CustomTreeItem;
