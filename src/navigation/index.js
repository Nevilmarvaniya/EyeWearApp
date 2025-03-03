import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage1 from '../screen/LandingPage1';
import LandingPage2 from '../screen/LandingPage2';
import LandingPage3 from '../screen/LandingPage3';
import Login from '../screen/Login';
import BottomTabs from "../bottomNavigation/index"
import ProductList from '../screen/productList';
import ProductDetails from '../screen/ProductDetails';
import ProductCart from '../screen/ProductCart';
import CheckOutPage from '../screen/CheckOutPage';
import PaymentScreen from '../screen/PaymentScreen';
import ForgotPassword from '../screen/ForogtPassword';
import OtpScreen from "../screen/OtpScreen";
import FilterData from '../screen/FilterData/Index';
import WishlistScreen from '../screen/wishlist';
import MyAddressScreen from '../screen/MyAddressScreen';
import AddAddress from '../screen/AddAddress';
import Notification from '../screen/Notification';
import FaqScreen from '../screen/FAQ';
import WalletScreen from '../screen/Wallet';
import HelpScreen from '../screen/Help';
import EditProfile from '../screen/EditProfile';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="LandingPage1" component={LandingPage1} />
            <Stack.Screen name="LandingPage2" component={LandingPage2} />
            <Stack.Screen name="LandingPage3" component={LandingPage3} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name="ProductList" component={ProductList} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="ProductCart" component={ProductCart} />
            <Stack.Screen name="CheckOutPage" component={CheckOutPage} />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="FilterData" component={FilterData} />
            <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
            <Stack.Screen name="MyAddressScreen" component={MyAddressScreen} />
            <Stack.Screen name="AddAddress" component={AddAddress} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="FaqScreen" component={FaqScreen} />
            <Stack.Screen name="WalletScreen" component={WalletScreen} />
            <Stack.Screen name="HelpScreen" component={HelpScreen} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation