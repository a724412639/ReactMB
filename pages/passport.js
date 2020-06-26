import React from 'react'
import styled from 'styled-components'
import { ScrollView } from 'react-native'
import { SETTING } from './settings'

export default function Passport({ navigation }) {
  return (
    <Back>
      <ScrollView
        bouncesZoom={true}
        centerContent={true}
        alwaysBounceVertical={true}
        directionalLockEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor: SETTING.BACKGROUND,
          paddingBottom: 20,
        }}
      >
        {Cards.map((Cards, index) => (
          <Shadow key={index}>
            <Button
              key={index}
              onPress={() => {
                navigation.navigate('TakePhoto', {
                  PhotoTitle: Cards.Title,
                  PhotoWidth: Cards.PhotoWidth,
                  PhotoHeight: Cards.PhotoHeight,
                })
              }}
            >
              <Title>{Cards.Title}</Title>
              <SubTitle>{Cards.SubTitle}</SubTitle>
            </Button>
          </Shadow>
        ))}
      </ScrollView>
    </Back>
  )
}

const Back = styled.View`
  flex: 1;
  background-color: ${SETTING.BACKGROUND};
`

const Shadow = styled.View`
  width: 90%;
  height: 60px;
  margin: 25px 5px 0px 5px;
  box-shadow: ${SETTING.BoxShadow_1};
`

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${SETTING.BACKGROUND};
  border-radius: 14px;
  box-shadow: ${SETTING.BoxShadow_2};
  padding: 0px 0px 0px 10px;
`

const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin: 5px 0px 3px 3px;
`

const SubTitle = styled.Text`
  color: #848489;
  margin: 0px 0px 3px 4px;
`
const Cards = [
  {
    Title: 'アメリカ',
    SubTitle: '5.1 * 5.1cm',
    PhotoWidth: 5.1,
    PhotoHeight: 5.1,
  },
  {
    Title: 'タイ',
    SubTitle: '3.5 * 4.5cm',
    PhotoWidth: 3.5,
    PhotoHeight: 4.5,
  },
  {
    Title: 'インド',
    SubTitle: '5 * 5cm',
    PhotoWidth: 5,
    PhotoHeight: 5,
  },
  {
    Title: 'フィリピン',
    SubTitle: '3.5 * 4.5cm',
    PhotoWidth: 3.5,
    PhotoHeight: 4.5,
  },
  {
    Title: 'マラーシア',
    SubTitle: '3.5 * 4.5cm',
    PhotoWidth: 3.5,
    PhotoHeight: 4.5,
  },
  {
    Title: 'ロシア',
    SubTitle: '3.5 * 4.5cm',
    PhotoWidth: 3.5,
    PhotoHeight: 4.5,
  },
  {
    Title: 'オーストラリア',
    SubTitle: '3.5 * 4.5cm',
    PhotoWidth: 3.5,
    PhotoHeight: 4.5,
  },
  {
    Title: 'シンガポール',
    SubTitle: '3.5 * 4.5cm',
    PhotoWidth: 3.5,
    PhotoHeight: 4.5,
  },
  {
    Title: '韓国',
    SubTitle: '3.5 * 4.5cm',
    PhotoWidth: 3.5,
    PhotoHeight: 4.5,
  },
  {
    Title: 'ベドナム',
    SubTitle: '4 * 6cm',
    PhotoWidth: 4,
    PhotoHeight: 6,
  },
  {
    Title: 'ニュージーランド',
    SubTitle: '3.5 * 4.5cm',
    PhotoWidth: 3.5,
    PhotoHeight: 4.5,
  },
  {
    Title: 'フィンランド',
    SubTitle: '3.5 * 4.5cm',
    PhotoWidth: 3.5,
    PhotoHeight: 4.5,
  },
  {
    Title: 'ベルギー',
    SubTitle: '3.5 * 4.5cm',
    PhotoWidth: 3.5,
    PhotoHeight: 4.5,
  },
  {
    Title: 'オーストリア',
    SubTitle: '3.5 * 4.5cm',
    PhotoWidth: 3.5,
    PhotoHeight: 4.5,
  },
]
