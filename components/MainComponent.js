import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Home from './HomeComponent';

const MenuNavigator = createStackNavigator({
    Menu: {screen: Menu},
    DishDetail: { screen: DishDetail}
}, {
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
})

const HomeNavigator = createStackNavigator({
    Home: {screen: Home},
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
})

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }
    }
    
}, {
    drawerBackgroundColor: '#D1C4E9'
})


class Main extends Component {

    render() { //paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight 
        return (
            <View style={{ flex: 1}}> 
                <MainNavigator />
            </View>
        );
    }

}

export default Main;