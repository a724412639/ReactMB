import styled from 'styled-components'
import React, { useState } from 'react'
import { IMAGE } from './images/images'
import { ScrollView, StyleSheet } from 'react-native'
import { SETTING } from './settings'

function Home({ navigation }) {
  return (
    <Back>
      <ScrollView
        bouncesZoom={true}
        centerContent={true}
        alwaysBounceVertical={true}
        directionalLockEnabled={true}
        showsVerticalScrollIndicator={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          width: '100%',
          paddingBottom: 30,
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor: SETTING.BACKGROUND,
        }}
      >
        <BodyCardBox>
          <BodyTitle>証明写真</BodyTitle>

          {BodyCardContent.map((BodyCardContent, index) => (
            <BodyCardShadow key={index}>
              <BodyCard
                key={index}
                onPress={() => {
                  navigation.navigate('TakePhoto', {
                    PhotoTitle: BodyCardContent.Title,
                    PhotoWidth: BodyCardContent.PhotoWidth,
                    PhotoHeight: BodyCardContent.PhotoHeight,
                  })
                }}
              >
                <CardImage source={BodyCardContent.Icon}></CardImage>
                <CardTitle>{BodyCardContent.Title}</CardTitle>
                <CardSubTitle>{BodyCardContent.SubTitle}</CardSubTitle>
              </BodyCard>
            </BodyCardShadow>
          ))}
        </BodyCardBox>

        <CategoryBox>
          <CategoryBoxTitle>カテゴリ</CategoryBoxTitle>

          <CategoryBoxLeft>
            <Box_1_Shadow>
              <Box_1
                onPress={() => {
                  navigation.navigate('Documents')
                }}
              >
                <CardTitleText>各証明書類</CardTitleText>
                <CardContentText>
                  {TextContent.CategoryBoxCard1}
                </CardContentText>
              </Box_1>
            </Box_1_Shadow>
          </CategoryBoxLeft>

          <CategoryBoxReight>
            <Box_2_Shadow>
              <Box_2
                onPress={() => {
                  navigation.navigate('Passport')
                }}
              >
                <CardTitleText>国別ビザ写真</CardTitleText>
                <CardContentText>
                  {TextContent.CategoryBoxCard2}
                </CardContentText>
              </Box_2>
            </Box_2_Shadow>

            <Box_3_Shadow>
              <Box_3
                onPress={() => {
                  navigation.navigate('CustomSize')
                }}
              >
                <CardTitleText>カスタムサイズ</CardTitleText>
                <CardContentText>
                  {TextContent.CategoryBoxCard3}
                </CardContentText>
              </Box_3>
            </Box_3_Shadow>
          </CategoryBoxReight>
        </CategoryBox>

        <FootBox>
          <FootBoxTitile>ツール</FootBoxTitile>
          {FooterCardContent.map((FooterCardContent, index) => (
            <FootBoxCardShadow key={index}>
              <FootBoxCard
                key={index}
                onPress={() => {
                  navigation.navigate(FooterCardContent.onPress)
                }}
              >
                <FootTitleText>{FooterCardContent.Title}</FootTitleText>
                <CardContentText>{FooterCardContent.Sabtitle}</CardContentText>
              </FootBoxCard>
            </FootBoxCardShadow>
          ))}
        </FootBox>

        {/* <ADBanner>
          <Text>ADBanner</Text>
        </ADBanner> */}
      </ScrollView>
    </Back>
  )
}

const Back = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 10px 0px;
  margin: 0px 0px 30px 0px;
  background-color: ${SETTING.BACKGROUND};
`

// 类别区域
const CategoryBox = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  height: 250px;
  width: 100%;
  margin: 10px 0px 0px 0px;
  padding: 0px 10px 0px 0px;
`
const CategoryBoxLeft = styled.View`
  height: 100%;
  width: 50%;
`
const CategoryBoxReight = styled.View`
  height: 100%;
  width: 50%;
  margin-top: 10px;
  padding: 0px 5px 0px 0px;
`
const Box_1_Shadow = styled.TouchableOpacity`
  box-shadow: ${SETTING.BoxShadow_1};
  margin: 20px;
`
const Box_1 = styled.TouchableOpacity`
  height: 200px;
  width: 150px;
  border-radius: 14px;
  background-color: ${SETTING.BACKGROUND};
  box-shadow: ${SETTING.BoxShadow_2};
`

const Box_2_Shadow = styled.TouchableOpacity`
  box-shadow: ${SETTING.BoxShadow_1};
  margin: 10px 0px;
`
const Box_2 = styled.TouchableOpacity`
  height: 90px;
  width: 100%;
  border-radius: 14px;
  background-color: ${SETTING.BACKGROUND};
  box-shadow: ${SETTING.BoxShadow_2};
`
const Box_3_Shadow = styled.TouchableOpacity`
  box-shadow: ${SETTING.BoxShadow_1};
  margin: 10px 0px;
`
const Box_3 = styled.TouchableOpacity`
  height: 90px;
  width: 100%;
  border-radius: 14px;
  background-color: ${SETTING.BACKGROUND};
  box-shadow: ${SETTING.BoxShadow_2};
`

// AD
const ADBanner = styled.View`
  flex: 1;
  width: 90%;
  height: 350px;
  display: flex;
  align-items: center;
  align-content: center;
  border-radius: 14px;
  margin: 10px 10px 10px 10px;
  background: ${SETTING.BACKGROUND};
  box-shadow: ${SETTING.BoxShadow_2};
`

// body区域
const BodyCardBox = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;

  margin: 10px 0px 0px 0px;
`

// body标题
const BodyTitle = styled.Text`
  width: 100%;
  height: 30px;
  margin-left: 30px;
  line-height: 40px;
  font-size: 20px;
  font-weight: bold;
  justify-content: flex-start;
`
// body 卡片外部阴影
const BodyCardShadow = styled.View`
  box-shadow: ${SETTING.BoxShadow_1};
`

// body 卡片
const BodyCard = styled.TouchableOpacity`
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  border-radius: 14px;
  margin: 10px 5px 5px 5px;
  background: ${SETTING.BACKGROUND};
  box-shadow: ${SETTING.BoxShadow_2};
`
// card iamge
const CardImage = styled.Image`
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 60%;
`
const CardTitle = styled.Text``

const CardSubTitle = styled.Text``

// 类别标题
const CategoryBoxTitle = styled.Text`
  width: 100%;
  height: 30px;
  margin-left: 15px;
  line-height: 40px;
  font-size: 20px;
  font-weight: bold;
  justify-content: flex-start;
`

// 卡片标题
const CardTitleText = styled.Text`
  margin: 10px 0px 10px 10px;
  font-size: 20px;
  font-weight: bold;
`
// 卡片文字
const CardContentText = styled.Text`
  margin: 0px 0px 0px 10px;
  line-height: 22px;
`
// 页脚区域
const FootBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  margin: 15px 0px 0px 0px;
`
// 页脚标题
const FootBoxTitile = styled.Text`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  margin-left: 15px;
  line-height: 40px;
  font-size: 20px;
  font-weight: bold;
  justify-content: flex-start;
`
const FootBoxCardShadow = styled.View`
  height: 40%;
  width: 45%;
  margin: 20px 0px;
  box-shadow: ${SETTING.BoxShadow_1};
`

// 页脚卡片
const FootBoxCard = styled.TouchableOpacity`
  justify-content: center;
  align-content: center;
  height: 80px;
  border-radius: 14px;
  background-color: ${SETTING.BACKGROUND};
  box-shadow: ${SETTING.BoxShadow_2};
`

const FootTitleText = styled.Text`
  margin: 5px 0px 10px 10px;
  font-size: 20px;
  font-weight: bold;
`

const Text = styled.Text`
  text-align: center;
  line-height: 200px;
`

const BodyCardContent = [
  {
    Icon: IMAGE.ICON_MENU,
    Title: '一般履歴書',
    SubTitle: '4*3cm',
    PhotoWidth: 4,
    PhotoHeight: 3,
  },
  {
    Icon: IMAGE.ICON_MENU,
    Title: 'パスポート',
    SubTitle: '4*3.5cm',
    PhotoWidth: 4,
    PhotoHeight: 3.5,
  },
  {
    Icon: IMAGE.ICON_MENU,
    Title: '自動車運転免許',
    SubTitle: '3*2.4cm',
    PhotoWidth: 3,
    PhotoHeight: 2.4,
  },
  {
    Icon: IMAGE.ICON_MENU,
    Title: '雇用保険受託',
    SubTitle: '3*2.5cm',
    PhotoWidth: 3,
    PhotoHeight: 2.5,
  },
  {
    Icon: IMAGE.ICON_MENU,
    Title: '秘書技能検定',
    SubTitle: '3*3cm',
    PhotoWidth: 4,
    PhotoHeight: 3,
  },
  {
    Icon: IMAGE.ICON_MENU,
    Title: '在留カード',
    SubTitle: '4*3cm',
    PhotoWidth: 4,
    PhotoHeight: 3,
  },
]

const TextContent = {
  CategoryBoxCard1: `情報処理技術者免許受験\n国家公務員試験\n簿記検定受験\n....`,
  CategoryBoxCard2: `アメリカ/フランス/イギリス...`,
  CategoryBoxCard3: `カスタムサイズで作成する.`,
  FootBoxCard1: `背景を削除する`,
  FootBoxCard2: `画像サイズを調整する`,
}

const FooterCardContent = [
  {
    Title: '背景を除く',
    Sabtitle: '背景を削除する',
    BackgroundImage: 'null',
    onPress: 'RemoveBackGround',
  },
  {
    Title: '画像サイズ調整',
    Sabtitle: '画像サイズを調整する',
    BackgroundImage: 'null',
    onPress: 'ChangeImageSize',
  },
]

export default Home
