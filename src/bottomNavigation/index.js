import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home/index';
import Explore from '../screen/Explore/index';
import ThreeDView from '../screen/3dTry/index';
import Order from '../screen/Order/index';
import Profile from "../screen/Profile/index";
import colors from '../utils/colors';
import { horizontalScale, moderateScale } from '../utils/responsiveSize';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress, focused }) => (
  <TouchableOpacity
    activeOpacity={1}
    style={styles.customButton}
    onPress={onPress}
  >
    <View
      style={[
        styles.customButtonInner,
        {
          backgroundColor: focused ? colors.blue : colors.white,
          borderColor: colors.blue,
          borderWidth: focused ? 0 : 1,
        },
      ]}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const DefaultTabBarButton = ({ children, onPress, accessibilityState }) => {
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.defaultTabButton}>
      {children}
    </TouchableOpacity>
  );
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          switch (route.name) {
            case 'Home':
              iconSource = focused
                ? require('../assets/HomeBlue.png')
                : require('../assets/HomeBlack.png');
              break;
            case 'Explore':
              iconSource = focused
                ? require('../assets/ExploreBlue.png')
                : require('../assets/ExploreBlack.png');
              break;
            case 'ThreeDView':
              iconSource = focused
                ? require('../assets/GlassWhite.png')
                : require('../assets/GlassBlue.png');
              break;
            case 'Order':
              iconSource = focused
                ? require('../assets/OrderBlue.png')
                : require('../assets/OrderBlack.png');
              break;
            case 'Profile':
              iconSource = focused
                ? require('../assets/ProfileBlue.png')
                : require('../assets/ProfileBlack.png');
              break;
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
            />
          );
        },
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarButton: (props) => <DefaultTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarButton: (props) => <DefaultTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="ThreeDView"
        component={ThreeDView}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} focused={props.accessibilityState.selected} />,
          tabBarLabel: ({ focused }) => (
            <View style={styles.customLabelContainer}>
              <Text style={[styles.customLabel, focused && styles.customLabelFocused]}>3D Try on</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarButton: (props) => <DefaultTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarButton: (props) => <DefaultTabBarButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: horizontalScale(70),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  customButton: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButtonInner: {
    width: horizontalScale(60),
    height: horizontalScale(60),
    borderRadius: horizontalScale(35),
    backgroundColor: '#E63B36',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultTabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customLabelContainer: {
    position: 'absolute',
    bottom: -18,
    alignItems: 'center',
  },
  customLabel: {
    fontSize: moderateScale(11),
    color: '#888',
  },
  customLabelFocused: {
    color: colors.blue,
    fontSize: moderateScale(11),
  },
});
