import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Stepper from './Stepper'

const mockSteps = [
  { id: 699, label: 'First Item' },
  { id: 6879, label: 'Seconf Item' },
  { id: 2, label: 'Third Item' },
  { id: 89, label: 'Forth Item' },
]

it('renders component', () => {
  const component = renderer.create(<Stepper steps={mockSteps} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


describe('Stepper component', () => {
  let stepper

  beforeEach(() => {
    jest.resetAllMocks()
    stepper = mount(<Stepper steps={mockSteps} />)
  })

  test('change current step', () => {
    expect(stepper.state().currentStep).toBe(0)
    const button = stepper.find('button')
    button.props().onClick()
    expect(stepper.state().currentStep).toBe(1)
    button.props().onClick()
    expect(stepper.state().currentStep).toBe(2)
  })

  test('check props of first step', () => {
    const firstStep = stepper.find('Step').first().props()
    expect(firstStep.id).toEqual(mockSteps[0].id)
    expect(firstStep.label).toEqual(mockSteps[0].label)
    expect(firstStep.complete).toEqual(false)
    expect(firstStep.isFirst).toEqual(true)
  })
})
