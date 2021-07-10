import { FunctionComponent } from 'react';
import classes from './Pokedex.module.css';
import { Switch, Route } from 'react-router-dom';
import { PokedexHome, PokedexLibrary } from '../../pages';
import { PokemonDetail } from '../PokemonDetail';

export const Pokedex: FunctionComponent = () => {

	const routes = (
		<Switch>
			<Route path="/" exact component={PokedexHome} />
			<Route path="/pokemon" exact component={PokedexLibrary} />
			<Route path="/pokemon/:pokemon_id" exact component={PokemonDetail} />
		</Switch>
	);

	return (
		<div id="Pokedex" className={classes['Pokedex']}>
			{routes}
		</div>
	);
}