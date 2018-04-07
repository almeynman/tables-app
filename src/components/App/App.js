import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'

NativeTachyons.build(
  {
    /* REM parameter is optional, default is 16 */
    // rem: screenWidth > 340 ? 18 : 16
  },
  StyleSheet,
)

// const tables = {
//   Лекарства: {
//     Аспирин: {
//       1: true,
//       2: true,
//       3: false,
//       4: false,
//       5: true,
//     },
//     Аналгин: {
//       1: false,
//       2: true,
//       3: true,
//       4: false,
//       5: false,
//     },
//   },
//   Уборка: {
//     Полы: {
//       Среда0: true,
//       Пятница0: true,
//       Понедельник0: true,
//       Среда1: true,
//       Пятница1: true,
//       Понедельник1: true,
//     },
//   },
// }

export default NativeTachyons.wrap(() => (
  <View cls="flx-i bg-white aic jcc">
    <Text>Hello World</Text>
  </View>
))
