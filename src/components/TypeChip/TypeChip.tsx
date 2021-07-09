import { FunctionComponent } from 'react';
import classes from './TypeChip.module.css';
import classNames from 'classnames';

interface TypeChipInterface {
  type: string;
}

export const TypeChip: FunctionComponent<TypeChipInterface> = ({
  type
}) => {

  const classList = classNames(classes['TypeChip'], classes[`TypeChip--${type}`]);

  return (
    <span
			className={classList}
		>
			{type}
		</span>
  );
};
