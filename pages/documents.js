import React from 'react'
import styled from 'styled-components'
import { ScrollView } from 'react-native'
import { SETTING } from './settings'

// 各种证件大小

export default function Documents({ navigation }) {
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
    Title: '自動車運転免許申請',
    SubTitle: '3 * 2.4cm',
    PhotoWidth: 3,
    PhotoHeight: 2.4,
  },
  {
    Title: '実用英語技能検定受験（1～3級）',
    SubTitle: '3 * 2.4cm',
    PhotoWidth: 3,
    PhotoHeight: 2.4,
  },
  {
    Title: '通信士免許申請（陸上無線技術士・特殊無線技士）',
    SubTitle: '3 * 2.4cm',
    PhotoWidth: 3,
    PhotoHeight: 2.4,
  },
  {
    Title: 'アマチュア無線技士免許申請',
    SubTitle: '3 * 2.4cm',
    PhotoWidth: 3,
    PhotoHeight: 2.4,
  },
  {
    Title: 'インテリアコーディネーター受験',
    SubTitle: '3 * 2.4cm',
    PhotoWidth: 3,
    PhotoHeight: 2.4,
  },
  {
    Title: 'ネイリスト技能検定試験受験',
    SubTitle: '3 * 2.4cm',
    PhotoWidth: 3,
    PhotoHeight: 2.4,
  },
  {
    Title: '電気通信主任技術者受験',
    SubTitle: '3 * 2.4cm',
    PhotoWidth: 3,
    PhotoHeight: 2.4,
  },
  {
    Title: '工事担任者試験',
    SubTitle: '3 * 2.4cm',
    PhotoWidth: 3,
    PhotoHeight: 2.4,
  },
  {
    Title: 'ボイラー技師試験',
    SubTitle: '3 * 2.4cm',
    PhotoWidth: 3,
    PhotoHeight: 2.4,
  },
  {
    Title: 'ボイラー技師免許交付',
    SubTitle: '3 * 2.4cm',
    PhotoWidth: 3,
    PhotoHeight: 2.4,
  },
  {
    Title: '衛生管理者申請',
    SubTitle: '3 * 2.4cm',
    PhotoWidth: 3,
    PhotoHeight: 2.4,
  },
  {
    Title: '管理業務主任者試験受験',
    SubTitle: '3 * 2.4cm',
    PhotoWidth: 3,
    PhotoHeight: 2.4,
  },
  {
    Title: '税理士受験',
    SubTitle: '2.8 * 2.4cm',
    PhotoWidth: 2.8,
    PhotoHeight: 2.4,
  },
  {
    Title: '雇用保険受託申請（ハローワーク）',
    SubTitle: '3 * 2.5cm',
    PhotoWidth: 3,
    PhotoHeight: 2.5,
  },
  {
    Title: '一般履歴書',
    SubTitle: '4 * 3cm',
    PhotoWidth: 4,
    PhotoHeight: 3,
  },
  {
    Title: '在留審査手続き（在留カード）',
    SubTitle: '4 * 3cm',
    PhotoWidth: 4,
    PhotoHeight: 3,
  },
  {
    Title: '情報処理技術者免許受験',
    SubTitle: '4 * 3cm',
    PhotoWidth: 4,
    PhotoHeight: 3,
  },
  {
    Title: '身体障害者申請',
    SubTitle: '4 * 3cm',
    PhotoWidth: 4,
    PhotoHeight: 3,
  },
  {
    Title: '行政書士受験',
    SubTitle: '4 * 3cm',
    PhotoWidth: 4,
    PhotoHeight: 3,
  },
  {
    Title: '国家公務員採用試験',
    SubTitle: '4 * 3cm',
    PhotoWidth: 4,
    PhotoHeight: 3,
  },
  {
    Title: '電気工事士免状交付',
    SubTitle: '4 * 3cm',
    PhotoWidth: 4,
    PhotoHeight: 3,
  },
  {
    Title: 'パスポート申請',
    SubTitle: '4.5 * 3.5cm',
    PhotoWidth: 4.5,
    PhotoHeight: 3.5,
  },
  {
    Title: 'taspo申請',
    SubTitle: '4.5 * 3.5cm',
    PhotoWidth: 4.5,
    PhotoHeight: 3.5,
  },
  {
    Title: '電気工事士受験',
    SubTitle: '4.5 * 3.5cm',
    PhotoWidth: 4.5,
    PhotoHeight: 3.5,
  },
  {
    Title: '珠算能力検定受験（1級）',
    SubTitle: '4.5 * 3.5cm',
    PhotoWidth: 4.5,
    PhotoHeight: 3.5,
  },
  {
    Title: '技術士・技術士補申請',
    SubTitle: '4.5 * 3.5cm',
    PhotoWidth: 4.5,
    PhotoHeight: 3.5,
  },
  {
    Title: '中小企業診断士受験',
    SubTitle: '4.5 * 3.5cm',
    PhotoWidth: 4.5,
    PhotoHeight: 3.5,
  },
  {
    Title: '総合旅行業務取扱管理者試験',
    SubTitle: '4.5 * 3.5cm',
    PhotoWidth: 4.5,
    PhotoHeight: 3.5,
  },
  {
    Title: '弁理士受験',
    SubTitle: '4.5 * 3.5cm',
    PhotoWidth: 4.5,
    PhotoHeight: 3.5,
  },
  {
    Title: '危険物取扱者免状',
    SubTitle: '4.5 * 3.5cm',
    PhotoWidth: 4.5,
    PhotoHeight: 3.5,
  },
  {
    Title: '消防設備士免状',
    SubTitle: '4.5 * 3.5cm',
    PhotoWidth: 4.5,
    PhotoHeight: 3.5,
  },
  {
    Title: '理容師・美容師国家試験受験',
    SubTitle: '4.5 * 3.5cm',
    PhotoWidth: 4.5,
    PhotoHeight: 3.5,
  },
  {
    Title: '不動産鑑定士試験受験（電子申請）',
    SubTitle: '4.5 * 3.5cm',
    PhotoWidth: 4.5,
    PhotoHeight: 3.5,
  },
  {
    Title: '不動産鑑定士試験受験（郵送）',
    SubTitle: '4.5 * 3.5cm',
    PhotoWidth: 4.5,
    PhotoHeight: 3.5,
  },
  {
    Title: '社会保険労務士受験',
    SubTitle: '4.5 * 3.5cm',
    PhotoWidth: 4.5,
    PhotoHeight: 3.5,
  },
  {
    Title: '司法試験受験',
    SubTitle: '4.5 * 3.5cm',
    PhotoWidth: 4.5,
    PhotoHeight: 3.5,
  },
  {
    Title: '気象予報士免許受験',
    SubTitle: '4.5 * 3.5cm',
    PhotoWidth: 4.5,
    PhotoHeight: 3.5,
  },
  {
    Title: '測量士・測量士補受験',
    SubTitle: '4.5 * 3.5cm',
    PhotoWidth: 4.5,
    PhotoHeight: 3.5,
  },
  {
    Title: '国外運転免許申請',
    SubTitle: '5 * 4cm',
    PhotoWidth: 5,
    PhotoHeight: 4,
  },
  {
    Title: '司法書士受験',
    SubTitle: '5 * 5cm',
    PhotoWidth: 5,
    PhotoHeight: 5,
  },
  {
    Title: '土地家屋調査士受験',
    SubTitle: '5 * 5cm',
    PhotoWidth: 5,
    PhotoHeight: 5,
  },
  {
    Title: '医師国家試験受験',
    SubTitle: '6 * 4cm',
    PhotoWidth: 6,
    PhotoHeight: 4,
  },
  {
    Title: '看護師国家試験受験',
    SubTitle: '6 * 4cm',
    PhotoWidth: 6,
    PhotoHeight: 4,
  },
  {
    Title: '臨床検査技師国家試験受験',
    SubTitle: '6 * 4cm',
    PhotoWidth: 6,
    PhotoHeight: 4,
  },
  {
    Title: '診療放射線技師国家試験受験',
    SubTitle: '6 * 4cm',
    PhotoWidth: 6,
    PhotoHeight: 4,
  },
  {
    Title: '管理栄養士国家試験受験',
    SubTitle: '6 * 4cm',
    PhotoWidth: 6,
    PhotoHeight: 4,
  },
  {
    Title: '歯科衛生士国家試験受験',
    SubTitle: '6 * 4cm',
    PhotoWidth: 6,
    PhotoHeight: 4,
  },
  {
    Title: '自動車整備士免許技能検定受験',
    SubTitle: '6 * 4.5cm',
    PhotoWidth: 6,
    PhotoHeight: 4.5,
  },
]
