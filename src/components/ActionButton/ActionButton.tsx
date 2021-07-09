import { FunctionComponent, ReactNode, HTMLAttributes } from 'react';
import classes from './ActionButton.module.css';

interface ActionButtonInterface extends CommonProps {
  onClick?: (() => {}) | (() => void);
  label?: ReactNode;
}

export const ActionButton: FunctionComponent<
  ActionButtonInterface & HTMLAttributes<HTMLButtonElement>
> = ({ onClick, label, className, ...rest }) => {
  return (
    <button className={classes['ActionButton']} onClick={onClick} {...rest}>
      {label}
    </button>
  );
};
