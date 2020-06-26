import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { SETTING } from './settings'

export default function CustomSize({ navigation }) {
  const [inputHeightValue, setInputHeightValue] = useState('')
  const [inputWidthValue, setInputWidthValue] = useState('')
  const [button, setButton] = useState(false)

  function chickInput() {
    Keyboard.dismiss()
    switch (true) {
      case inputWidthValue < 10:
        setInputWidthValue('10')
      case inputWidthValue > 100:
        setInputWidthValue('100')
      case inputHeightValue < 10:
        setInputHeightValue('10')
      case inputHeightValue > 100:
        setInputHeightValue('100')
    }
    setButton(true)
  }

  function dissButton() {
    setButton(false)
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={chickInput}>
        <Body>
          <SizeBox>
            <LeftBox>
              <SizeBoxTitle>
                <Text>横(mm)</Text>
              </SizeBoxTitle>
              <Input>
                <Shadow_1>
                  <Shadow_2>
                    <View>
                      <TextInput
                        keyboardType="number-pad"
                        placeholder={'10-100'}
                        value={inputWidthValue}
                        maxLength={4}
                        onFocus={dissButton}
                        onChangeText={(text) => {
                          const newText = text.replace(/[^\d]+/, '')
                          setInputWidthValue(newText)
                        }}
                      />
                    </View>
                  </Shadow_2>
                </Shadow_1>
              </Input>
            </LeftBox>
            <ReightBox>
              <SizeBoxTitle>
                <Text>高(mm)</Text>
              </SizeBoxTitle>
              <Input>
                <Shadow_1>
                  <Shadow_2>
                    <View>
                      <TextInput
                        keyboardType="number-pad"
                        placeholder={'10-100'}
                        textAlign={'center'}
                        value={inputHeightValue}
                        defaultValue="10"
                        maxLength={4}
                        onFocus={dissButton}
                        onChangeText={(text) => {
                          const newText = text.replace(/[^\d]+/, '')
                          setInputHeightValue(newText)
                        }}
                      />
                    </View>
                  </Shadow_2>
                </Shadow_1>
              </Input>
            </ReightBox>
          </SizeBox>
          <ButtonShadow>
            {button && (
              <Button
                onPress={() => {
                  navigation.navigate('TakePhoto', {
                    PhotoTitle: 'カスタムサイズ',
                    PhotoWidth: inputWidthValue / 10,
                    PhotoHeight: inputHeightValue / 10,
                  })
                }}
              >
                <Text>画像処理</Text>
              </Button>
            )}
          </ButtonShadow>
        </Body>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const SizeBoxTitle = styled.View`
  height: 50%;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
`

const Input = styled.View`
  height: 50%;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: center;
`

const SizeBox = styled.View`
  width: 75%;
  height: 200px;
  flex-direction: row;
`

const LeftBox = styled.View`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
`
const ReightBox = styled.View`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
`

const View = styled.View`
  flex: 1;
  align-content: center;
  align-items: center;
  justify-content: center;
`

const Shadow_1 = styled.View`
  width: 130px;
  height: 70px;
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

const Body = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-bottom: 200px;
`

const TextInput = styled.TextInput`
  padding: 5px 5px;
  text-align: center;
  width: 50%;
`

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background-color: ${SETTING.BACKGROUND};
`

const Text = styled.Text`
  text-align: center;
`

const ButtonShadow = styled.View`
  width: 50%;
  height: 10%;
  box-shadow: ${SETTING.BoxShadow_1};
`
const Button = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  border-radius: 14px;
  margin: 20px 5px 5px 5px;
  background-color: ${SETTING.BACKGROUND};
  box-shadow: ${SETTING.BoxShadow_2};
`
