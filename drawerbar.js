import * as React from 'react'
import styled from 'styled-components'
import { Feather, AntDesign } from '@expo/vector-icons'
import { SETTING } from './pages/settings'

export default function DrawerBar({ navigation }) {
  return (
    <Content>
      <HeaderShadow>
        <Header></Header>
      </HeaderShadow>

      {MenuContent.map((MenuContent, index) => (
        <Shadow key={index}>
          <Button
            key={index}
            onPress={() => navigation.navigate(MenuContent.Navigate)}
          >
            {MenuContent.Icon}
            {MenuContent.Title}
          </Button>
        </Shadow>
      ))}
    </Content>
  )
}

const Content = styled.View`
  flex-grow: 1;
  width: 100%;
  height: 550px;
  justify-content: flex-end;
  align-items: center;
`

const HeaderShadow = styled.View`
  width: 80%;
  height: 200px;
  box-shadow: ${SETTING.BoxShadow_1};
  margin: 0px 0px 10px 0px;
`

const Header = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  border-radius: 14px;
  background: ${SETTING.BACKGROUND};
  box-shadow: ${SETTING.BoxShadow_2};
`

const Shadow = styled.View`
  width: 80%;
  height: 50px;
  margin: 5px 5px 10px 5px;
  box-shadow: ${SETTING.BoxShadow_1};
`

const Button = styled.TouchableOpacity`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 0px 10px;
  border-radius: 15px;
  background: ${SETTING.BACKGROUND};
  box-shadow: ${SETTING.BoxShadow_2};
`

const Text = styled.Text`
  margin: 0px 0px 0px 10px;
  font-size: 14px;
  font-weight: bold;
`

const MenuContent = [
  {
    Navigate: 'Questions',
    Icon: <AntDesign name="questioncircleo" size={24} color="black" />,
    Title: <Text>よくある質問</Text>,
  },
  {
    Navigate: 'Coment',
    Icon: <Feather name="star" size={24} color="black" />,
    Title: <Text>アプリを評価する</Text>,
  },
  {
    Navigate: 'Share',
    Icon: <AntDesign name="sharealt" size={24} color="black" />,
    Title: <Text>アプリをシェアする</Text>,
  },
  {
    Navigate: 'Policy',
    Icon: <AntDesign name="lock1" size={24} color="black" />,
    Title: <Text>プライバシーポリシー</Text>,
  },
  {
    Navigate: 'AboutAPP',
    Icon: <AntDesign name="exclamationcircleo" size={24} color="black" />,
    Title: <Text>このアプリについて</Text>,
  },
]
