import { FunctionComponent } from 'react';
import classes from './Sprite.module.css';
import classNames from 'classnames';

interface SpriteInterface {
  url: string;
  size?: 'small' | 'medium';
  alt?: string;
  className?: string;
}

export const Sprite: FunctionComponent<SpriteInterface> = ({
  url,
  size = 'small',
  alt,
  className
}) => {
  const sizeToClassMap = {
    small: classes['Sprite--small'],
    medium: classes['Sprite--medium']
  };

  const classList = classNames(
    classes['Sprite'],
    sizeToClassMap[size],
    className
  );

  return (
    <div className={classList}>
      <img src={url} alt={alt} className={classes['Sprite__Image']} />
    </div>
  );
};
