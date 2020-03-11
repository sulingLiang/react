import React, { lazy, Suspense } from 'react';

const Context = lazy(() => slowImport(import('./context'), 1000))
const ContextType = lazy(() => slowImport(import('./contextType'), 2000))

const slowImport = (func, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(func)
    }, time)
  })
}

const lazyAndSuspense = () => {
  return (
    <div>
      <p>lazy 和 suspense</p>
      <Suspense fallback={<div>loading...</div>}>
        <Context />
        <ContextType />
      </Suspense>
    </div>
  )
}

export default lazyAndSuspense
