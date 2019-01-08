import React from 'react';
import { observer, inject } from "mobx-react";
import BasicView from '../../components/BasicView'
import PageTitle from '../../components/PageTitle'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { headerFontColor, defaultBackgroundColor, defaultFontColor } from '../../config/colors'
import { Alert } from 'react-native'

class AddDeck extends React.Component {

    state = {
        deckName: '',
        deckDescription: '',
        showErrorMessage: false
    }

    _updateInput = (key, value) => {
        this.setState(() => ({
            [key]: value
        }))
    }

    _addDeck = () => {
        const { deckName, deckDescription } = this.state
        if (deckName === '') {
            this.setState({
                showErrorMessage: true
            })
        } else {
            const deckInfo = {
                title: deckName,
                description: deckDescription
            }
            if (this._checkDeckKey(deckInfo)) {
                //Call action
                this.props.store.fetchAddDeck({ key: deckName, deckInfo }).then(() => {
                    //Go to Deck Page
                    this.props.navigation.navigate('Deck', { key: deckName })
                })

                //Clear state
                this.setState(() => ({
                    deckName: '',
                    deckDescription: '',
                    showErrorMessage: false
                }))
            } else {
                Alert.alert('Deck already exists', 'This deck name already exists. Please select another value.')
            }
        }
    }

    _checkDeckKey = (deckInfo) => {
        const auxiliar = this.props.store.decks.filter(deck => deck.title === deckInfo.title).length
        return (auxiliar === 0)
    }

    render() {
        const { deckName, deckDescription, showErrorMessage } = this.state
        const deckInfo = {
            title: deckName,
            description: deckDescription
        }
        this._checkDeckKey(deckInfo)
        return (
            <BasicView justifyContent="center">
                <PageTitle headerFontColor={headerFontColor}>Add new deck</PageTitle>
                <CustomInput label="Deck Name" showErrorMessage={showErrorMessage} value={deckName} onChange={(text) => this._updateInput('deckName', text)} />
                <CustomInput label="Deck Description" value={deckDescription} onChange={(text) => this._updateInput('deckDescription', text)} />
                <CustomButton
                    backgroundColor={defaultBackgroundColor}
                    fontColor={defaultFontColor}
                    small={true}
                    onPress={this._addDeck}
                >Add Deck</CustomButton>
            </BasicView>
        );
    }
}

export default inject('store')(observer(AddDeck))
