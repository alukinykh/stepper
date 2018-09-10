import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Step from './Step'

const WrapStepper = styled.div`
    display: flex;
    flex-dirextion: row;
`
const Button = styled.button`
  background: #ffffff;
  color: #5125da;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #5125da;
  border-radius: 3px;
`;

class Stepper extends PureComponent {
    constructor (props) {
        super(props)
        this.state = {
            currentStep: 0
        }
    }

    handleChangeStep = () => {
        if(this.state.currentStep < this.props.steps.length) {
            this.setState({ currentStep: this.state.currentStep + 1 })
        }
    }

  render() {
    const { steps } = this.props
    return (
      <WrapStepper>
        {steps.slice(0, 5).map((step, index) => (
          <Step
            {...step}
            key={step.id} 
            complete={index < this.state.currentStep ? true : false}
            isFirst={index === 0} 
            currentStep={this.state.currentStep}
        />
        ))}
        <Button onClick={this.handleChangeStep}>Next</Button>
      </WrapStepper>
    )
  }
}

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object),
}

Stepper.defaultProps = {
  steps: [{
    id: 0,
    label: 'Step 0',
  },
  {
    id: 1,
    label: 'Step 1',
  }],
}

export default Stepper
