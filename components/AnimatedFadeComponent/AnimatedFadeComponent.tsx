'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './AnimatedFadeComponent.module.css'
import { AnimatedFadeComponentProps } from './AnimatedFadeComponent.types'
import { useSpring, animated } from 'react-spring';

const AnimatedFadeComponent = ({
  children,
  className,
  active,
  callback,
  duration = 0.25,
}: AnimatedFadeComponentProps) => {

  const fadeAnimation = useSpring({
    opacity: active ? 0 : 1,
    onRest: () => {
      if (callback) { 
        callback(active)
      }
    },
    config: {
      tension: 250,
      friction: 35,
      duration: duration*1000,
    }
  });

 return (
    <animated.div
        style={{
          opacity: fadeAnimation.opacity,
          display: fadeAnimation.opacity.to((o) => o === 0 ? 'none' : 'block'),
        }}
        className={clsx( 
          styles.root,
          className
        )}>
      {children}
    </animated.div>
  );
}


export default AnimatedFadeComponent