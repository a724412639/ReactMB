import styled from 'styled-components'
import React, { useState } from 'react'
import { IMAGE } from './images/images'
import Constants from 'expo-constants';
import color from 'color';
import { ScrollView, StyleSheet } from 'react-native'

const BACKGROUND = '#c1e7f0'
const RADIUS = 10;

function Home({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BACKGROUND,
      }}
    >
      <BodyCardBox>
        <BodyTitle>証明写真</BodyTitle>

        {BodyCardContent.map((BodyCardContent, index) => (
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
          
        ))}
      </BodyCardBox>
      

      <CategoryBox>
        <CategoryBoxTitle>カテゴリ</CategoryBoxTitle>

        {/* 各証明書類 */}
        
        <CategoryBoxCard1
          onPress={() => {
            navigation.navigate('Documents')
          }}
        >
          <CardTitleText>各証明書類</CardTitleText>
          <CardContentText>{TextContent.CategoryBoxCard1}</CardContentText>
        </CategoryBoxCard1>

        {/* 各パスポート証明 */}
        <CategoryBoxCard2
          onPress={() => {
            navigation.navigate('Passport')
          }}
        >
          <CardTitleText>国別ビザ写真</CardTitleText>
          <CardContentText>{TextContent.CategoryBoxCard2}</CardContentText>
        </CategoryBoxCard2>

        {/* カスタムサイズ */}
        <CategoryBoxCard3
          onPress={() => {
            navigation.navigate('CustomSize')
          }}
        >
          <CardTitleText>カスタムサイズ</CardTitleText>
          <CardContentText>{TextContent.CategoryBoxCard3}</CardContentText>
        </CategoryBoxCard3>
      </CategoryBox>

      <FootBox>
        <FootBoxTitile>ツール</FootBoxTitile>
        {FooterCardContent.map((FooterCardContent, index) => (
          <FootBoxCard
            key={index}
            onPress={() => {
              navigation.navigate(FooterCardContent.onPress)
            }}
          >
            <FootTitleText>{FooterCardContent.Title}</FootTitleText>
            <CardContentText>{FooterCardContent.Sabtitle}</CardContentText>
          </FootBoxCard>
        ))}
      </FootBox>

      <ADBanner>
        <Text>ADBanner</Text>
      </ADBanner>

        <Morph borderless style={{ marginTop: 20 }}>
          <Text style={styles.neumorphism}>Borderless</Text>
        </Morph>
        
    </ScrollView>
  )
}

// create a reusable component Morph
const Morph = ({ radius, style, revert, borderless, children }) => {
  const topStyles = StyleSheet.flatten([
    styles.morphTop,
    revert && {
      shadowColor: color(BACKGROUND)
        .darken(0.3)
        .alpha(0.5),
    },
    { borderRadius: radius || RADIUS },
    style,
  ]);

  const bottomStyles = StyleSheet.flatten([
    styles.morphBottom,
    revert && {
      shadowColor: color(BACKGROUND)
      .lighten(0.5)
      .alpha(0.5),
    },
    { borderRadius: radius || RADIUS },
  ]);

  const morphStyles = StyleSheet.flatten([
    styles.morph,
    borderless && { borderWidth: 0 },
    { borderRadius: radius || RADIUS },
  ]);

  return (
    <View style={topStyles}>
      <View style={bottomStyles}>
        <View style={morphStyles}>{children}</View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: BACKGROUND,
    paddingTop: Constants.statusBarHeight,
  },
  neumorphism: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  morph: {
    borderRadius: RADIUS,
    borderWidth: 1,
    backgroundColor: BACKGROUND,
    borderColor: color(BACKGROUND)
      .lighten(0.5)
      .alpha(0.2),
  },
  morphTop: {
    borderRadius: RADIUS,
    // box-shadow is equivalent to shadow style in React Native
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: color(BACKGROUND)
      .lighten(0.5)
      .alpha(0.5), // this should be lighter shadow
  },
  morphBottom: {
    borderRadius: RADIUS,
    // box-shadow is equivalent to shadow style in React Native
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: color(BACKGROUND)
      .darken(0.3)
      .alpha(0.5), // this should be darker shadow
  },
});



const View = styled.View``


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

// 类别区域
const CategoryBox = styled.View`
  height: 250px;
  width: 100%;
  margin: 10px 0px 0px 0px;
`

// 页脚区域
const FootBox = styled.View`
  height: 150px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  margin: 15px 0px 0px 0px;
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
  background: ${BACKGROUND};
  box-shadow:  5px 5px 10px #a0c0c7;
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
// body 卡片
const BodyCard = styled.TouchableOpacity`
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  border-radius: 14px;
  margin: 10px 5px 5px 5px;
  background:${BACKGROUND};
  box-shadow:  5px 5px 10px #a9c7d4;
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
  height: 40px;
  margin-left: 15px;
  line-height: 40px;
  font-size: 20px;
  font-weight: bold;
  justify-content: flex-start;
`
// 卡片标题
const CardTitleText = styled.Text`
  margin: 20px 0px 10px 10px;
  font-size: 20px;
  font-weight: bold;
`
// 卡片文字
const CardContentText = styled.Text`
  margin: 0px 0px 0px 10px;
  line-height: 22px;
`

// 类别卡片 通用属性
const CategoryBoxCard = styled.TouchableOpacity`
  flex-direction: column;
  position: absolute;
  align-content: center;
  justify-content: flex-start;
  border-radius: 14px;
  background: ${BACKGROUND};
  margin: 10px 10px 0px 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`
// 类别卡片  左 1
const CategoryBoxCard1 = styled(CategoryBoxCard)`
  top: 10%;
  left: 0;
  bottom: 0;
  width: 40%;
  height: 90%;
`
// 类别卡片  右 1
const CategoryBoxCard2 = styled(CategoryBoxCard)`
  top: 10%;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 40%;
`
// 类别卡片  右 2
const CategoryBoxCard3 = styled(CategoryBoxCard)`
  top: 60%;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 40%;
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
// 页脚卡片
const FootBoxCard = styled.TouchableOpacity`
  justify-content: center;
  align-content: center;
  background: white;
  width: 45%;
  height: 60%;
  border-radius: 14px;
  margin: 10px 5px 5px 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
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
