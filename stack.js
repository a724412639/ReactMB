import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import styled from 'styled-components'
import { createStackNavigator } from '@react-navigation/stack'
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import Home from './pages/home'
import TakePhoto from './pages/takephoto'
import OpenCamera from './pages/camera'
import HelpContent from './pages/helppage'
import CustomSize from './pages/customsize'
import Passport from './pages/passport'
import Documents from './pages/documents'
import ChangeImageSize from './pages/changeiamgesize'
import RemoveBackGround from './pages/removebackground'
import Questions from './pages/questions'
import Coment from './pages/coment'
import Share from './pages/share'
import Policy from './pages/policy'
import AboutAPP from './pages/aboutapp'
import Modal from 'react-native-modal'
import { SETTING } from './pages/settings'
const Stack = createStackNavigator()

export default function StackHome({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  // 中间文字
  function HeaderTitle(Title) {
    return <HeaderTitleText>{Title}</HeaderTitleText>
  }

  // 左上角菜单按钮
  function HeaderLeftButton() {
    return (
      <HeaderShadow>
        <HeaderLeftIcon onPress={() => navigation.openDrawer()}>
          <AntDesign name="menuunfold" size={30} color="black" />
        </HeaderLeftIcon>
      </HeaderShadow>
    )
  }

  // 右上角帮助按钮
  function HeaderRightButton() {
    return (
      <HeaderShadow>
        <Modal isVisible={isModalVisible}>
          <HelpBox>
            <HelpContent />
            <HelpBoxButton onPress={toggleModal}>
              <Text>OK!</Text>
            </HelpBoxButton>
          </HelpBox>
        </Modal>
        <HeaderRightIcon onPress={toggleModal}>
          <MaterialCommunityIcons
            name="help-circle-outline"
            size={30}
            color="black"
          />
        </HeaderRightIcon>
      </HeaderShadow>
    )
  }

  function BackUpButton(props) {
    return (
      <HeaderShadow>
        <HeaderLeftIcon
          {...props}
          onPress={() => {
            navigation.navigate('Home')
          }}
        >
          <MaterialIcons name="arrow-back" size={30} color="black" />
        </HeaderLeftIcon>
      </HeaderShadow>
    )
  }

  return (
    <>
      <Stack.Navigator>
        {/* 主页 */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: HeaderTitle('証明写真'),
            headerLeft: HeaderLeftButton,
            headerRight: HeaderRightButton,
            headerStyle: styles.header,
          }}
        />

        {/* 拍照 */}
        <Stack.Screen
          name="TakePhoto"
          component={TakePhoto}
          options={{
            headerLeft: (props) => <BackUpButton />,
            headerStyle: styles.header,
          }}
        />
        {/* 自定义尺寸 */}
        <Stack.Screen
          name="CustomSize"
          component={CustomSize}
          options={{
            headerLeft: (props) => <BackUpButton />,
            headerStyle: styles.header,
          }}
        />
        {/* 各种护照 */}
        <Stack.Screen
          name="Passport"
          component={Passport}
          options={{
            headerLeft: (props) => <BackUpButton />,
            headerStyle: styles.header,
          }}
        />
        {/* 各种文件 */}
        <Stack.Screen
          name="Documents"
          component={Documents}
          options={{
            headerLeft: (props) => <BackUpButton />,
            headerStyle: styles.header,
          }}
        />
        {/* 删除背景 */}
        <Stack.Screen
          name="RemoveBackGround"
          component={RemoveBackGround}
          options={{
            headerLeft: (props) => <BackUpButton />,
            headerStyle: styles.header,
          }}
        />
        {/* 调整图片大小 */}
        <Stack.Screen
          name="ChangeImageSize"
          component={ChangeImageSize}
          options={{
            headerLeft: (props) => <BackUpButton />,
            headerStyle: styles.header,
          }}
        />
        {/* 帮助按钮 */}
        <Stack.Screen
          name="Questions"
          component={Questions}
          options={{
            headerLeft: (props) => <BackUpButton />,
            headerStyle: styles.header,
          }}
        />
        {/* 评价页面 */}
        <Stack.Screen
          name="Coment"
          component={Coment}
          options={{
            headerLeft: (props) => <BackUpButton />,
            headerStyle: styles.header,
          }}
        />
        {/* 分享页面 */}
        <Stack.Screen
          name="Share"
          component={Share}
          options={{
            headerLeft: (props) => <BackUpButton />,
            headerStyle: styles.header,
          }}
        />
        {/* 隐私政策 */}
        <Stack.Screen
          name="Policy"
          component={Policy}
          options={{
            headerLeft: (props) => <BackUpButton />,
            headerStyle: styles.header,
          }}
        />
        {/* 关于APP */}
        <Stack.Screen
          name="AboutAPP"
          component={AboutAPP}
          options={{
            headerLeft: (props) => <BackUpButton />,
            headerStyle: styles.header,
          }}
        />
        {/* 打开相机 */}
        <Stack.Screen name="OpenCamera" component={OpenCamera} />
      </Stack.Navigator>
    </>
  )
}

const HeaderShadow = styled.View`
  box-shadow: ${SETTING.BoxShadow_1};
`

const HeaderLeftIcon = styled.TouchableOpacity`
  width: 60px;
  height: 40px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 5px 10px;
  background: ${SETTING.BACKGROUND};
  box-shadow: ${SETTING.BoxShadow_2};
`
const HeaderRightIcon = styled.TouchableOpacity`
  width: 60px;
  height: 40px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin: 0px 10px 5px 0px;
  background: ${SETTING.BACKGROUND};
  box-shadow: ${SETTING.BoxShadow_2};
`
// Header 标题
const HeaderTitleText = styled.Text`
  font-size: 20px;
`
// 帮助按钮弹窗
const HelpBox = styled.View`
  flex-grow: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  /* background-color: #f0f3f5; */
`
const HelpBoxButton = styled.TouchableOpacity`
  width: 50%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 14px;
  background-color: #f0f3f5;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin: 10px 0px 0px 0px;
`

const Text = styled.Text`
  font-size: 20px;
`

const styles = StyleSheet.create({
  header: {
    backgroundColor: SETTING.BACKGROUND,
  },
})
