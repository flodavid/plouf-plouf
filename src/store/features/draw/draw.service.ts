import Router from 'next/router'

import { drawSlice } from './draw.slice'
import { drawIndex, drawToSlug } from './helpers'
import Values from './types/Values.type'
import { store } from '../../store'
import { animationSlice } from '../animation/animation.slice'
import Draw from './types/Draw.type'


export function drawValueAndStartAnimation(values: Values, previousValues: Values) {
  const drawnIndex = drawIndex(values)
  store.dispatch(animationSlice.actions.reset())
  const newDraw: Draw = {
    values,
    previousValues,
    drawnIndex,
  }
  store.dispatch(drawSlice.actions.setDraw(newDraw))
  const slug = drawToSlug(newDraw)
  Router.push('/r', `/r#${slug}`)
}

/**
 * Reinsert drawn values into the values, then reset drawn ones
 * @param draw The draw containing values and drawn values
 */
export function reinsertValues(draw: Draw) {
  const values = draw.values.concat(draw.previousValues)
  const previousValues: Array<string> = []
  const drawnIndex = draw.drawnIndex
  const newDraw: Draw = {
    values,
    previousValues,
    drawnIndex
  }

  store.dispatch(drawSlice.actions.setDraw(newDraw))
  const slug = drawToSlug(newDraw)
  Router.push('/r', `/r#${slug}`)
}
