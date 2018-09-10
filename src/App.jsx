import React from 'react'
import Stepper from './Stepper'

const steps = [
  {
    id: 1,
    label: 'One',
  },
  {
    id: 2,
    label: 'Two',
  },
  {
    id: 3,
    label: 'Three',
  },
  {
    id: 4,
    label: 'Four',
  },
  {
    id: 5,
    label: 'Five',
  },
  {
    id: 6,
    label: 'Six',
  },
  {
    id: 7,
    label: 'Seven',
  },
]

const App = () => (<Stepper steps={steps} />)

export default App
