import { FunctionComponent, useState } from 'react';
import classes from './ListItem.module.css';
import { Sprite } from '../Sprite';
import classNames from 'classnames';
import { TypeChip } from '../TypeChip';
import { AbilityChip } from '../AbilityChip';
import { PokemonDetail } from '../../containers';

interface ListItemInterface {
	pokemon: PokemonListItem;
}

export const ListItem: FunctionComponent<ListItemInterface> = ({ pokemon }) => {

	const [detailOpen, setDetailOpen] = useState(false);

	const classList = classNames(
		classes['ListItem'],
		classes[`ListItem--${pokemon?.type[0]?.type?.name}`]
	);

	return (
		<div className={classList} onClick={() => setDetailOpen(true)}>
			<div className={classes['ListItem__Content']}>
				<p className={classes['Content__Title']}>
					{pokemon.name}
					<span className={classes['Weight']}>Weight: {pokemon.weight}</span>
				</p>
				<span className={classes['Chips']}>
					{pokemon.type.map(t => {
						return (
							<TypeChip key={t.slot} type={t.type.name} />
						);
					})}
				</span>
				<span className={classes['AbilityChips']}>
					{pokemon.abilities.map(ab => {
						return (
							<AbilityChip key={ab.slot} ability={ab.ability.name} />
						);
					})}
				</span>
			</div>
			<div className={classes['ListItem__Sprite']}>
				<Sprite alt={pokemon?.name} url={pokemon?.photo} size="small" />
			</div>
			{detailOpen ? <PokemonDetail type={pokemon?.type[0]?.type.name} onClose={() => setDetailOpen(false)} pokemonId={pokemon.id} /> : null}
		</div>
	);
}