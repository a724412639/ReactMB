import React from 'react'
import styled from 'styled-components'
import { SETTING } from './settings'
import { DefaultAD, PublisherAD, InterstitialAD, RewardedAD } from './ad'

export default function RemoveBackGround({ navigation }) {
  return (
    <Container>
      <Box_1>
        <Box_2></Box_2>
      </Box_1>
      <Shadow_1 onPress={RewardedAD}>
        <Shadow_2>
          <View>
            <Text>121231121231</Text>
          </View>
        </Shadow_2>
      </Shadow_1>
      <Box_1 onPress={InterstitialAD}>
        <Box_2></Box_2>
      </Box_1>
      <DefaultAD />
      <PublisherAD />
    </Container>
  )
}

const View = styled.View`
  flex: 1;
  align-content: center;
  align-items: center;
  justify-content: center;
`

const Container = styled.View`
  flex: 1;
  background-color: ${SETTING.BACKGROUND};
  align-content: center;
  align-items: center;
  justify-content: center;
`

const Shadow_1 = styled.View`
  width: 300px;
  height: 100px;
  overflow: hidden;
  border-radius: 14px;
  box-shadow: -5px -6px 12px #ffffff;
`

const Shadow_2 = styled.View`
  width: 100%;
  height: 100%;
  border-color: ${SETTING.BACKGROUND};
  border-radius: 14px;
  border-width: 10px;
  overflow: hidden;
  box-shadow: 6px 3px 10px #b8c3c5;
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

const Text = styled.Text``
