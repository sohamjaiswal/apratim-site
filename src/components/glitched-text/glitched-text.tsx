import React from 'react'
import { IGlitchedTextProps } from './glitched-text.types'

import styles from './glitched-text.module.scss'

export const GlitchedText = ({ label }: IGlitchedTextProps) => {
  return (
    <h1 className={styles["glitch"]}>
          <span aria-hidden="true">
              {label}
          </span>
            {label}
          <span aria-hidden="true">
            {label}
          </span>
    </h1>
  )
}