import React from 'react'
import c from 'classnames'
import css from './App.module.scss'

function App() {
  return (
    <div className={css.container}>
      <div className={css.title}>
        <span className={css.titleContent}>Grid 布局</span>
      </div>
      <div className={css.gridContainer}>
        <div
          className={c(css.gridItem, css.grid1)}
          style={{ backgroundColor: '#009922' }}
        >
          1
        </div>
        <div
          className={c(css.gridItem, css.grid2)}
          style={{ backgroundColor: '#00FF22' }}
        >
          2
        </div>
        <div
          className={c(css.gridItem, css.grid3)}
          style={{ backgroundColor: '#FF1122' }}
        >
          3
        </div>
        <div
          className={c(css.gridItem, css.grid4)}
          style={{ backgroundColor: '#991199' }}
        >
          4
        </div>
        <div
          className={c(css.gridItem, css.grid5)}
          style={{ backgroundColor: '#0011FF' }}
        >
          5
        </div>
        <div
          className={c(css.gridItem, css.grid6)}
          style={{ backgroundColor: '#FF11FF' }}
        >
          6
        </div>
        <div
          className={c(css.gridItem, css.grid7)}
          style={{ backgroundColor: '#0000FF' }}
        >
          7
        </div>
        <div
          className={c(css.gridItem, css.grid8)}
          style={{ backgroundColor: '#AA11FF' }}
        >
          8
        </div>
        <div
          className={c(css.gridItem, css.grid9)}
          style={{ backgroundColor: '#33FF99' }}
        >
          9
        </div>
      </div>
    </div>
  )
}

export default App
