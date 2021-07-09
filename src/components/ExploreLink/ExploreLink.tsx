import { FunctionComponent } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classes from './ExploreLink.module.css';

export const ExploreLink: FunctionComponent<LinkProps> = ({ to, children, ...rest }) => {
  return (
    <Link to={to} className={classes['ExploreLink']} {...rest}>
			{children ? children : "Explore!"}
		</Link>
  );
};
