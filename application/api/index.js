import { AsyncStorage } from 'react-native'

export function getDecks() {
    return AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiGet(keys))
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
        })
}

export function clearAll() {
    return AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
}
