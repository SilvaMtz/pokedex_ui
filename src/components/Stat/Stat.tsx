import classNames from 'classnames';
import { CSSProperties, FunctionComponent } from 'react';
import classes from './Stat.module.css';

interface StatInterface {
  stat: PokemonStat;
}

export const Stat: FunctionComponent<StatInterface> = ({
  stat,
}) => {
  const classList = classNames(
    classes['Stat'],
    classes['Stat--Horizontal']
  );

  const horizontalStyle: CSSProperties = {
    width: `${stat.base_stat}%`,
		height: '100%'
  };

  return (
		<div className={classes['Stat__Wrapper']}>
			<h6 className={classes['Stat__Name']}><span>{stat.stat.name}</span><span className={classes['StatNumber']}>{stat.base_stat}</span></h6>
			<div className={classList}>
				<div
					className={classes['StatValue']}
					style={horizontalStyle}
				/>
			</div>
		</div>
  );
};
