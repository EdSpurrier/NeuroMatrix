'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './AnimatedSlideComponent.module.css'
import { AnimatedSlideComponentProps } from './AnimatedSlideComponent.types'
import { useSpring, animated } from 'react-spring';

const AnimatedSlideComponent = ({
  children,
  className,
  active,
  fade,
  callback,
  duration = 0.25,
}: AnimatedSlideComponentProps) => {

  const slideAnimation = useSpring({
    bottom: active ? '0%' : '-100%',
    opacity: active || !fade ? 1 : 0,
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
          bottom: slideAnimation.bottom,
          opacity: slideAnimation.opacity,
          display: slideAnimation.opacity.to((o) => o === 0 ? 'none' : 'block'),
        }}
        className={clsx( 
          styles.root,
          className
        )}>
      {children}
    </animated.div>
  );
}


export default AnimatedSlideComponent