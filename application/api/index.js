import { AsyncStorage } from 'react-native'
import { Permissions, Notifications } from 'expo'

const NOTIFICATION_KEY = 'FlashCards:notification'

export function getDecks() {
    return AsyncStorage.getAllKeys()
        .then(keys => {
            //Remove NOTIFICATION_KEY to retrieve decks informations
            const adjustedKeys = keys.filter(key => key !== NOTIFICATION_KEY)
            return AsyncStorage.multiGet(adjustedKeys)
        })
}

export function getDeck(key) {
    return AsyncStorage.getItem(key)
}

export function addNewDeck({ key, deckInfo }) {
    const value = JSON.stringify(deckInfo)
    return AsyncStorage.setItem(key, value).then(() => { return deckInfo })
}

export function removeDeck(key) {
    return AsyncStorage.removeItem(key)
}

export function addQuestionToDeck({ key, questionObject }) {
    return AsyncStorage.getItem(key)
        .then(res => {
            const cardInfo = JSON.parse(res)
            if (cardInfo.questions) {
                cardInfo.questions.push(questionObject)
            } else {
                cardInfo.questions = []
                cardInfo.questions.push(questionObject)
            }
            AsyncStorage.setItem(key, JSON.stringify(cardInfo))
            return cardInfo.questions
        })
}

export function saveQuizBestResult({ key, quizResult }) {
    return AsyncStorage.getItem(key)
        .then(res => {
            const cardInfo = JSON.parse(res)
            if (cardInfo.bestResult) {
                if (cardInfo.bestResult < quizResult) cardInfo.bestResult = quizResult
            } else {
                cardInfo.bestResult = quizResult
            }
            AsyncStorage.setItem(key, JSON.stringify(cardInfo))
            return quizResult
        })
}

export function clearAll() {
    return AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
}

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(() => {
            Notifications.cancelAllScheduledNotificationAsync
        })
}

function createNotification() {
    return {
        title: '📚 Complete a quiz! 📚',
        body: '👋 Don\'t forget to answer one quiz today. This will improve your studies! 😃',
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'default',
            sticky: false
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then(data => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()
                            let time = new Date()
                            time.setDate(time.getDate() + 1)
                            time.setHours(18)
                            time.setMinutes(0)
                            time.setSeconds(0)
                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time,
                                    repeat: 'day',
                                }
                            )
                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
} 