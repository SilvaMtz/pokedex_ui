import React, {
  FunctionComponent,
  useEffect,
  ReactNode,
  HTMLAttributes,
  useRef,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import classes from './OverlayMask.module.css';
import classNames from 'classnames';

export type OverlayMaskInterface = {
  /**
   * Function that applies to clicking the mask itself and not the children
   */
  onClick?: () => void;
  /**
   * ReactNode to render as this component's content
   */
  children?: ReactNode;
};

export type OverlayMaskProps = CommonProps &
  Omit<
    Partial<Record<keyof HTMLAttributes<HTMLDivElement>, string>>,
    keyof OverlayMaskInterface
  > &
  OverlayMaskInterface;

export const OverlayMask: FunctionComponent<OverlayMaskProps> = ({
  className,
  children,
  onClick,
  ...rest
}) => {
  const overlayMaskNode = useRef<HTMLDivElement>(document.createElement('div'));
  const [isPortalTargetReady, setIsPortalTargetReady] = useState(false);

  useEffect(() => {
    document.body.classList.add(classes['body--hasOverlayMask']);

    return () => {
      document.body.classList.remove(classes['body--hasOverlayMask']);
    };
  }, []);

  useEffect(() => {
    const portalTarget = overlayMaskNode.current;
    (document.body.querySelector('#Pokedex') as Element).appendChild(
      overlayMaskNode.current
    );
    setIsPortalTargetReady(true);

    return () => {
      if (portalTarget) {
        document.body.removeChild(portalTarget);
      }
    };
  }, []);

  useEffect(() => {
    if (!overlayMaskNode.current) return;
    overlayMaskNode.current.className = classNames(
      classes['OverlayMask'],
      className
    );
  }, [className]);

  useEffect(() => {
    if (!overlayMaskNode.current || !onClick) return;
    const portalTarget = overlayMaskNode.current;
    overlayMaskNode.current.addEventListener('click', (e) => {
      if (e.target === overlayMaskNode.current) {
        onClick();
      }
    });

    return () => {
      if (portalTarget && !!onClick) {
        portalTarget.removeEventListener('click', onClick);
      }
    };
  }, [onClick]);

  return isPortalTargetReady ? (
    <>{createPortal(children, overlayMaskNode.current!)}</>
  ) : null;
};
