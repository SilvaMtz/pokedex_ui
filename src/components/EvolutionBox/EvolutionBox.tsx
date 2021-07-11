import { FunctionComponent } from 'react';
import { Sprite } from '../Sprite';
import classes from './EvolutionBox.module.css';
import classNames from 'classnames';

export const EvolutionBox: FunctionComponent<{
  active?: boolean;
  evolution: EvolutionObject;
}> = ({ evolution, active = false }) => {
  const classList = classNames(
    classes['EvolutionBox'],
    active ? classes['EvolutionBox--active'] : null
  );

  return (
    <div className={classList}>
      <h6 className={classes['EvolutionId']}>#{evolution.id}</h6>
      <Sprite url={evolution.photo} size="small" />
      <h6 className={classes['Pokemon__Name']}>{evolution.name}</h6>
    </div>
  );
};
