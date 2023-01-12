import React from 'react'
import { IContainer } from './container.types'

import styles from './container.module.scss'

export const Container = ({ children, className }: IContainer) => {
    const classNames = [styles['container']].join(' ')
    return (
        <div className={classNames}>
            <div className={[styles["children"], className].join(' ')}>
                {children}
            </div>
        </div>
  )
}