import React, {
  FunctionComponent,
  HTMLAttributes,
  ReactNodeArray,
} from "react";
import { FlexGrid } from "../FlexGrid";
import { FlexItem } from "../FlexItem";

interface TabsPropTypes extends CommonProps {
  children: ReactNodeArray;
  activeTab: number;
  stretch?: boolean;
}

export const Tabs: FunctionComponent<
  TabsPropTypes & HTMLAttributes<HTMLDivElement>
> = ({ children, className, activeTab }) => {
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
			columns={2}
      direction="row"
      gutterSize="s"
      className={className}
    >
      {tabsWithActiveTab}
    </FlexGrid>
  );
};
