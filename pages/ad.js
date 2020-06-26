import React from 'react'
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'expo-ads-admob'

function bannerError(e) {
  console.log('Ad Fail error ', e)
}

// 一般横幅广告
export function DefaultAD() {
  return (
    <AdMobBanner
      bannerSize="fullBanner"
      adUnitID={ADID.banner}
      onDidFailToReceiveAdWithError={(e) => bannerError(e)}
    />
  )
}

// 横幅广告
export function PublisherAD() {
  return (
    <PublisherBanner
      bannerSize="fullBanner"
      adUnitID={ADID.publisher_banner}
      onDidFailToReceiveAdWithError={(e) => bannerError(e)}
    />
  )
}
//
export function InterstitialAD() {
  AdMobInterstitial.setAdUnitID(ADID.interstitial) // Test ID, Replace with your-admob-unit-id
  AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true })
  AdMobInterstitial.showAdAsync()
}

export function RewardedAD() {
  AdMobRewarded.setAdUnitID(ADID.rewarded) // Test ID, Replace with your-admob-unit-id
  AdMobRewarded.requestAdAsync()
  AdMobRewarded.showAdAsync()
}

export const ADID = {
  banner: __DEV__
    ? 'ca-app-pub-3940256099942544/6300978111'
    : Platform.select({
        ios: 'ca-app-pub-7852386630268649/4667721440', // iOS
        android: 'ca-app-pub-7852386630268649/4667721440', // android
      }),
  publisher_banner: __DEV__
    ? 'ca-app-pub-3940256099942544/6300978111'
    : Platform.select({
        ios: 'ca-app-pub-7852386630268649/4776081392', // iOS
        android: 'ca-app-pub-7852386630268649/4776081392', // android
      }),
  interstitial: __DEV__
    ? 'ca-app-pub-3940256099942544/1033173712'
    : Platform.select({
        ios: 'ca-app-pub-7852386630268649/5977482424', // iOS
        android: 'ca-app-pub-7852386630268649/5977482424', // android
      }),
  rewarded: __DEV__
    ? 'ca-app-pub-3940256099942544/5224354917'
    : Platform.select({
        ios: 'ca-app-pub-7852386630268649/3011805095', // iOS
        android: 'ca-app-pub-7852386630268649/3011805095', // android
      }),
}
