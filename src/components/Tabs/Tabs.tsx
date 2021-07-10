import React, {
  FunctionComponent,
  HTMLAttributes,
  ReactNodeArray,
} from "react";
import { FlexGrid } from "../FlexGrid";
import { FlexGridColumns } from "../FlexGrid/FlexGrid";
import { FlexItem } from "../FlexItem";

interface TabsPropTypes extends CommonProps {
  children: ReactNodeArray;
  activeTab: number;
  stretch?: boolean;
	columns?: FlexGridColumns;
}

export const Tabs: FunctionComponent<
  TabsPropTypes & HTMLAttributes<HTMLDivElement>
> = ({ children, className, activeTab, columns = 1 }) => {
  const tabsWithActiveTab = React.Children.map(children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (React.isValidElement(child)) {
      return (
        <FlexItem>
          {React.cloneElement(child, { activeTab: activeTab })}
        </FlexItem>
      );
    }
    return child;
  });

  return (
    <FlexGrid
			columns={columns}
      direction="row"
      gutterSize="s"
			responsive={false}
      className={className}
    >
      {tabsWithActiveTab}
    </FlexGrid>
  );
};
