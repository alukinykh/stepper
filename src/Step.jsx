import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const theme = {
  defaultColor: '#dbdbdb',
  completeColor: '#5125da',
}

const WrapStep = styled.div`
    display: table-cell;
    position: relative;
    width: 200px;
    padding-top: 40px;
`
const WrapCircle = styled.div`
    position: relative;
    margin: 0 20px;
`

const Circle = styled.div`
    width: ${props => props.size || 20}px;
    height: ${props => props.size || 20}px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 50%;
    padding: 1px;
    display: block;
    opacity: 1;
    border: 8px solid ${props => (props.complete ? theme.completeColor : theme.defaultColor)};
    transition-property: border;
    transition-duration: 2s;
`

const Label = styled.div`
    color: ${props => (props.complete ? theme.completeColor : theme.defaultColor)};
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: -40px;
    width: 100%;
    text-align: center;
    transition-property: color;
    transition-duration: 2s;
`

const LineLeft = styled.div`
    position: absolute;
    top: 55px;
    height: 8px;
    background-color: ${props => (props.complete ? theme.completeColor : theme.defaultColor)};
    right: 50%;
    margin-left: 12px;
    opacity: 1;
    width: 100%;
    z-index: -1;
    transition-property: background-color;
    transition-duration: 2s;
`

const Step = ({
  label, isFirst, complete,
}) => (
  <WrapStep>
    {!isFirst && <LineLeft complete={complete} />}
    <WrapCircle>
      <Circle size={20} complete={complete} />
      <Label complete={complete}>{label}</Label>
    </WrapCircle>
  </WrapStep>
)

Step.propTypes = {
  label: PropTypes.string.isRequired,
  isFirst: PropTypes.bool.isRequired,
  complete: PropTypes.bool.isRequired,
}

export default Step
