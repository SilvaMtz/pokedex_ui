import { FunctionComponent } from 'react';
import classes from './Pokeball.module.css';
import classNames from 'classnames';

interface PokeballInterface {
	animate?: boolean;
	size?: "small" | "medium";
	className?: string;
}

export const Pokeball: FunctionComponent<PokeballInterface> = ({ animate = false, size = "medium", className }) => {

	const sizeToClassMap = {
		small: classes['Pokeball--small'],
		medium: classes['Pokeball--medium']
	}

	const classList = classNames(
		classes['Pokeball'],
		animate ? classes['Pokeball--animate'] : null,
		sizeToClassMap[size],
		className
	);

	const buttonClassList = classNames(
		classes['Pokeball__button'],
		animate ? classes['Pokeball__button--animate'] : null
	)

	return (
		<div className={classList}>
    	<div className={buttonClassList} />
		</div>		
	);
}