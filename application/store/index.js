import { types } from "mobx-state-tree"
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
    .actions(self => ({
        addQuestion({ question, answer }) {
            self.questions.push({ question, answer })
        }
    }))

const DeckList = types
    .model("DeckList", {
        decks: types.array(Deck)
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
        addDeck({ title, description }) {
            self.decks.push({ title, description })
        }
    }))


const Store = DeckList.create()

export default Store