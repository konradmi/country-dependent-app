import React from 'react'
import Lazy from '../components/common/Lazy'

const homeConfig = {
  EN: () => <Lazy load={import('../components/en/Home')} />,
  PL: () => <Lazy load={import('../components/pl/Home')} />,
  DE: () => <Lazy load={import('../components/de/Home')} />,
}

export default homeConfig
