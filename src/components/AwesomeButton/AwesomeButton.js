import React from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'
import style from './AwesomeButton.style'

const AwesomeButton = props => (
  <TouchableHighlight
    onPress={props.onPress}
    style={StyleSheet.flatten([style.container, props.style])}
  >
    <Text style={StyleSheet.flatten([style.text, props.textStyle])}>{props.children}</Text>
  </TouchableHighlight>
)

AwesomeButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  style: PropTypes.shape(),
  textStyle: PropTypes.oneOfType([PropTypes.shape, PropTypes.array]),
}

AwesomeButton.defaultProps = {
  style: undefined,
  textStyle: undefined,
}

export default AwesomeButton
