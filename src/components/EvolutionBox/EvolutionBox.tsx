import { FunctionComponent } from 'react';
import { Sprite } from '../Sprite';
import classes from './EvolutionBox.module.css';

export const EvolutionBox: FunctionComponent<{ evolution: EvolutionObject }> = ({ evolution }) => {
	return (
		<div className={classes['EvolutionBox']}>
			<h6 className={classes['EvolutionId']}>
				#{evolution.id}
			</h6>
			<Sprite url={evolution.photo} size="small" />
			<h6 className={classes['Pokemon__Name']}>
				{evolution.name}
			</h6>
		</div>
	)
}