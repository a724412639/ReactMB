import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { SETTING } from './settings'
import * as ImagePicker from 'expo-image-picker'
import { Dimensions, Button, ImageBackground } from 'react-native'
import { ImageManipulator } from 'expo-image-crop'

export default function ChangeImageSize({ navigation }) {
  const [state, setState] = useState({
    isVisible: false,
    uri:
      'https://i.pinimg.com/originals/39/42/a1/3942a180299d5b9587c2aa8e09d91ecf.jpg',
  })
  const { uri, isVisible } = state
  const { width, height } = Dimensions.get('window')

  function onToggleModal() {
    const { isVisible } = state
    setState({ isVisible: !isVisible })
  }

  return (
    <Container>
      <Button
        title="Open Image Editor"
        onPress={() => setState({ isVisible: true })}
      />
      <ImageManipulator
        photo={{ uri }}
        isVisible={isVisible}
        onPictureChoosed={({ uri: uriM }) => setState({ uri: uriM })}
        onToggleModal={onToggleModal}
      />
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: ${SETTING.BACKGROUND};
  align-content: center;
  align-items: center;
  justify-content: center;
`

const Box_1 = styled.TouchableOpacity`
  box-shadow: ${SETTING.BoxShadow_1};
  margin: 20px;
`

const Box_2 = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 25px;
  background: ${SETTING.BACKGROUND};
  box-shadow: ${SETTING.BoxShadow_2};
`
