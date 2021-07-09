import { FunctionComponent } from 'react';
import classes from './AbilityChip.module.css';

interface AbilityChipInterface {
  ability: string;
}

export const AbilityChip: FunctionComponent<AbilityChipInterface> = ({
  ability
}) => {

  return (
    <span
			className={classes['AbilityChip']}
		>
			{ability}
		</span>
  );
};
