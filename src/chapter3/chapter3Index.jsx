import React from 'react'
import Context from './context'
import ContextType from './contextType'
import LazyAndSuspense from './lazyAndSuspense'
import MemoDemo from './memo'

const Chapter3Index = () => {
  return (
    <div>
      <h2>第三章</h2>
      <Context />
      <ContextType />
      <LazyAndSuspense />
      <MemoDemo />
    </div>
  )
}

export default Chapter3Index;