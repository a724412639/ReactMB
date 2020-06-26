import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import StackHome from './stack'
import DrawerBar from './drawerbar'
import { NotifierWrapper } from 'react-native-notifier'

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: '#deebed' }}>
      <DrawerBar {...props} />
    </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NotifierWrapper>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="StackHome" component={StackHome} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NotifierWrapper>
  )
}
