import * as React from 'react'
import styled from 'styled-components'
import { ScrollView } from 'react-native'
import { SETTING } from './settings'

export default function TakePhoto({ route, navigation }) {
  const { PhotoTitle, PhotoWidth, PhotoHeight } = route.params
  return (
    <Back>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: SETTING.BACKGROUND,
        }}
      >
        {/* 展示模块 */}
        <DemoShadow>
          <Demo></Demo>
        </DemoShadow>

        {/* body */}

        <PhotoBar>
          <PhotoBarTitle>
            <PhotoBarTitleText>{PhotoTitle}</PhotoBarTitleText>
          </PhotoBarTitle>

          <PhotoBarBody>
            <PhotoBarBodyText>
              {PhotoWidth}*{PhotoHeight}cm
            </PhotoBarBodyText>
          </PhotoBarBody>

          <PhotoBarFooter>
            <ButtonShadow>
              <PhotoBarFooterButton>
                <Text>写真を選択する</Text>
              </PhotoBarFooterButton>
            </ButtonShadow>

            <ButtonShadow>
              <PhotoBarFooterButton>
                <Text>写真を撮る</Text>
              </PhotoBarFooterButton>
            </ButtonShadow>
          </PhotoBarFooter>
        </PhotoBar>

        {/* AD */}
        <ADBar>
          <Text>AD</Text>
        </ADBar>
      </ScrollView>
    </Back>
  )
}

const Text = styled.Text`
  text-align: center;
`

const DemoShadow = styled.View`
  width: 90%;
  height: 400px;
  margin: 30px 10px 20px 10px;
  box-shadow: ${SETTING.BoxShadow_1};
`

const Demo = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 14px;
  background-color: ${SETTING.BACKGROUND};
  box-shadow: ${SETTING.BoxShadow_2};
`

const PhotoBar = styled.View`
  width: 90%;
  height: 200px;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  border-radius: 14px;
  margin: 10px 10px 10px 10px;
  background-color: ${SETTING.BACKGROUND};
`

const PhotoBarTitle = styled.View`
  width: 100%;
  height: 30%;
  align-items: center;
  align-content: center;
  justify-content: center;
`

const PhotoBarTitleText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`
const PhotoBarBody = styled.View`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`
const PhotoBarBodyText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`

const PhotoBarFooter = styled.View`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`
const ButtonShadow = styled.View`
  width: 35%;
  height: 60%;
  margin: 10px 5px 5px 5px;
  box-shadow: ${SETTING.BoxShadow_1};
`

const PhotoBarFooterButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
  border-radius: 14px;
  background: ${SETTING.BACKGROUND};
  box-shadow: ${SETTING.BoxShadow_2};
`

const ADBar = styled.View`
  width: 90%;
  height: 100px;
  align-items: center;
  align-content: center;
  justify-content: center;
  background: white;
  border-radius: 14px;
  margin: 10px 10px 10px 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`
const Back = styled.View`
  flex: 1;
  background-color: ${SETTING.BACKGROUND};
`
