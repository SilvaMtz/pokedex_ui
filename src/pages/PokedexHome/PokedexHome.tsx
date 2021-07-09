import { FunctionComponent } from 'react';
import { ExploreLink } from '../../components/ExploreLink';
import classes from './PokedexHome.module.css';

export const PokedexHome: FunctionComponent = () => {

	return (
		<div className={classes['PokedexHome']}>
			Home
			<ExploreLink to="/pokemon" />
		</div>
	)
}