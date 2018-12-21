import { types, getParent, destroy } from "mobx-state-tree"
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
        fetchAddQuestion({ key, questionObject }) {
            API.addQuestionToDeck({ key, questionObject }).then(() => {
                self.addQuestion(questionObject)
            })
        },
        fetchRemoveFeck(key) {
            API.removeDeck(key).then(() => {
                getParent(self, 2).removeDeck(self)
            })
        },
        addQuestion({ question, answer }) {
            self.questions.push({ question, answer })
        }
    }))

const DeckList = types
    .model("DeckList", {
        decks: types.array(Deck),
    })
    .actions(self => ({
        fetchDecks() {
            API.getDecks().then(res => {
                res.map(item => {
                    const deckInfo = JSON.parse(item[1])
                    self.addDeck(deckInfo)
                })
            })
        },
        fetchAddDeck({ key, deckInfo }) {
            API.addNewDeck({ key, deckInfo }).then(() => {
                self.addDeck(deckInfo)
            })
        },
        addDeck(deckInfo) {
            self.decks.push({ ...deckInfo })
        },
        removeDeck(deck) {
            destroy(deck)
        }
    }))
    .views(self => ({
        deckInfo(title) {
            return self.decks.filter(deck => deck.title === title)
        }
    }))

const Store = DeckList.create()

export default Store