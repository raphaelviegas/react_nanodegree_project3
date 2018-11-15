
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import DeckList from './screens/main/DeckList'
import AddDeck from './screens/main/AddDeck'
import DeckInfo from './screens/deck/DeckInfo'
import AddQuestion from './screens/deck/AddQuestion'
import StartQuiz from './screens/deck/StartQuiz'
import QuizQuestion from './screens/quiz/QuizQuestion'
import QuizResult from './screens/quiz/QuizResult'


const HomeView = createBottomTabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Show Decks',
        },
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
        },
    },
})

const DeckView = createBottomTabNavigator({
    DeckInfo: {
        screen: DeckInfo,
        navigationOptions: {
            tabBarLabel: 'Deck Info',
        },
    },
    AddQuestion: {
        screen: AddQuestion,
        navigationOptions: {
            tabBarLabel: 'Add Question',
        },
    },
    StartQuiz: {
        screen: StartQuiz,
        navigationOptions: {
            tabBarLabel: 'Start Quiz',
        },
    },
})

const QuizView = createStackNavigator({
    Home: {
        screen: QuizQuestion,
        navigationOptions: {
            header: null
        }
    },
    Result: {
        screen: QuizResult,
        navigationOptions: {
            header: null
        }
    },
})

export const AppScreens = createStackNavigator({
    Home: {
        screen: HomeView,
        navigationOptions: {
            header: null
        }
    },
    Deck: {
        screen: DeckView,
    },
    Quiz: {
        screen: QuizView,
        navigationOptions: {
            header: null
        }
    }
})