import { types, getParent, destroy, flow } from "mobx-state-tree"
import * as API from '../api'

const Question = types
    .model("Question", {
        question: types.string,
        answer: types.string
    })

const Deck = types
    .model("Deck", {
        title: types.string,
        description: types.string,
        questions: types.optional(types.array(Question), []),
        bestResult: types.optional(types.string, '-'),
    })
    .views(self => ({
        get numOfQuestions() {
            return self.questions.length
        }
    }))
    .actions(self => ({
        fetchAddQuestion: flow(function* fetchAddQuestion({ key, questionObject }) {
            try {
                const questions = yield API.addQuestionToDeck({ key, questionObject })
                self.questions = questions.map(question => {
                    return { ...question }
                })

            } catch (error) {
                console.error("Failed to fetch decks", error)
            }
        }),
        fetchRemoveDeck: flow(function* fetchRemoveDeck(key) {
            try {
                const removedDeck = yield API.removeDeck(key)
                getParent(self, 2).removeDeck(self)
            } catch (error) {
                console.error("Failed to remove deck", error)
            }
        })
    }))

const DeckList = types
    .model("DeckList", {
        decks: types.array(Deck),
    })
    .actions(self => ({
        fetchDecks: flow(function* fetchDecks() {
            try {
                const decks = yield API.getDecks()
                self.decks = decks.map(item => {
                    const deckInfo = JSON.parse(item[1])
                    return { ...deckInfo }
                })
            } catch (error) {
                console.error("Failed to fetch decks", error)
            }
        }),
        fetchAddDeck: flow(function* fetchAddDeck({ key, deckInfo }) {
            try {
                const deck = yield API.addNewDeck({ key, deckInfo })
                self.decks.push({ ...deck })
            } catch (error) {
                console.error("Failed to add new deck", error)
            }
        }),
        removeDeck(deck) {
            destroy(deck)
        }
    }))
    .views(self => ({
        deckInfo(key) {
            return self.decks.filter(deck => deck.title === key)
        }
    }))

const Store = DeckList.create()

export default Store