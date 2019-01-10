import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { MaterialCommunityIcons, MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

import DeckList from './screens/main/DeckList'
import AddDeck from './screens/main/AddDeck'
import DeckInfo from './screens/deck/DeckInfo'
import AddQuestion from './screens/deck/AddQuestion'
import StartQuiz from './screens/deck/StartQuiz'
import QuizQuestions from './screens/quiz/QuizQuestions'
import QuizResult from './screens/quiz/QuizResult'
import { statusColor, tabBarActive, tabBarInactive } from './config/colors'

const tabBarOptions = {
    activeTintColor: tabBarActive,
    inactiveTintColor: tabBarInactive,
}


const HomeView = createBottomTabNavigator(
    {
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: 'Deck List',
                tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={26} color={tintColor} />
            },
        },
        AddDeck: {
            screen: AddDeck,
            navigationOptions: {
                tabBarLabel: 'Add Deck',
                tabBarIcon: ({ tintColor }) => Platform.OS === 'ios' ? <Ionicons name='ios-add-circle' size={26} color={tintColor} /> : <Ionicons name='md-add-circle' size={26} color={tintColor} />
            },
        },
    },
    {
        tabBarOptions
    }
)

const DeckView = createBottomTabNavigator(
    {
        DeckInfo: {
            screen: DeckInfo,
            navigationOptions: {
                tabBarLabel: 'Deck Info',
                tabBarIcon: ({ tintColor }) => Platform.OS === 'ios' ? <Ionicons name='ios-information-circle' size={26} color={tintColor} /> : <Ionicons name='md-information-circle' size={26} color={tintColor} />
            },
        },
        AddQuestion: {
            screen: AddQuestion,
            navigationOptions: {
                tabBarLabel: 'Add Question',
                tabBarIcon: ({ tintColor }) => <MaterialIcons name='note-add' size={26} color={tintColor} />
            },
        },
        StartQuiz: {
            screen: StartQuiz,
            navigationOptions: {
                tabBarLabel: 'Start Quiz',
                tabBarIcon: ({ tintColor }) => <FontAwesome name='question-circle' size={26} color={tintColor} />
            },
        }
    },
    {
        tabBarOptions
    }
)

const QuizView = createStackNavigator({
    QuizQuestions: {
        screen: QuizQuestions,
        navigationOptions: {
            header: null
        }
    },
    QuizResult: {
        screen: QuizResult,
        navigationOptions: {
            header: null
        }
    },
})

export const AppScreens = createStackNavigator(
    {
        Home: {
            screen: HomeView,
            navigationOptions: {
                header: null
            }
        },
        Deck: {
            screen: DeckView,
            navigationOptions: {
                title: 'Deck info'
            }
        },
        Quiz: {
            screen: QuizView,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: statusColor,
            },
            headerTintColor: '#fff',
        },
    }
)