import { FunctionComponent } from 'react';
import { ExploreLink } from '../../components/ExploreLink';
import { Pokeball } from '../../components';
import classes from './PokedexHome.module.css';

export const PokedexHome: FunctionComponent = () => {

	return (
		<div className={classes['PokedexHome']}>
			<div className={classes['PokedexTitle']}>
				<Pokeball animate={false} size="medium" />
				<h1>POKEDEX</h1>
			</div>
			<ExploreLink className={classes['ExploreLink']} to="/pokemon" />
		</div>
	)
}