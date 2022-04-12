import * as React from 'react'
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'

import { HeaderProps } from './types'

export const Header: React.FunctionComponent<HeaderProps> = ({
  label = 'Header Title',

  navigationType = 'DRAWER',
  onBackPress,
  // isCloseNavigation,
}) => {
  // const navigation = useNavigation()

  const MenuIconButton: React.FC = () => {
    // const onPress = () => navigation.dispatch(DrawerActions.toggleDrawer())
    return (
      // <Ripple onPress={onPress}>
      //   <IconView name={'hamburger_menu'} />
      // </Ripple>
      <Pressable>
        <Text>Menu</Text>
      </Pressable>
    )
  }

  const BackIconContainer: React.FC = () => {
    // const onPress = () => {
    //   if (preventDefault) {
    //     onBackPress?.()
    //   } else {
    //     navigation.goBack()
    //   }
    // }
    return (
      <Pressable onPress={onBackPress}>
        <Text>Exit</Text>
      </Pressable>
    )
  }
  const LeftButtonContainer: React.FC = () => {
    switch (navigationType) {
      case 'DRAWER':
        return <MenuIconButton />
      default:
        return <BackIconContainer />
    }
  }
  const mainStyles: ViewStyle = { height: 60 }
  return (
    <View style={styles.main}>
      <View style={[mainStyles]}>
        {/* <StackItem
          verticalAlign={'flex-start'}
          childrenGap={10}
          horizontal={RenderMainContainer ? true : false}
          style={styles.container}>
          <LeftButtonContainer />
          {RenderMainContainer ? (
            <RenderMainContainer />
          ) : !hideLabel ? (
            <TextView
              animated
              weight="bold"
              variant={FontSizes.xlarge}
              style={textAnimatedStyles}>
              {label}
            </TextView>
          ) : null}
        </StackItem> */}
        <LeftButtonContainer />
        <Text>{label}</Text>
      </View>
      {/* <View center style={styles.leftContainerStyles}>
        {RenderLeftContainer ? <RenderLeftContainer /> : undefined}
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
  },
  container: {
    position: 'absolute',
    zIndex: 200,
    paddingHorizontal: 20,
    paddingTop: 20,
    top: 0,
  },
  leftContainerStyles: {
    position: 'absolute',
    right: 20,
    height: 60,
  },
  baseMainContainerStyle: {
    height: 60,
  },
})
