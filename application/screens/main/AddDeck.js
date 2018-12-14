import React from 'react';
import BasicView from '../../components/BasicView'
import PageTitle from '../../components/PageTitle'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { headerFontColor, defaultBackgroundColor, defaultFontColor } from '../../config/colors'
import { addNewDeck } from '../../api'

export default class AddDeck extends React.Component {

    state = {
        deckName: '',
        deckDescription: ''
    }

    updateInput = (key, value) => {
        this.setState(() => ({
            [key]: value
        }))
    }

    addDeck = () => {
        const { deckName, deckDescription } = this.state
        const deckInfo = {
            title: deckName,
            description: deckDescription
        }
        //Call action
        //addNewDeck({ key: deckName, deckInfo })

        //Clear state
        this.setState(() => ({
            deckName: '',
            deckDescription: ''
        }))

        //Go to Deck Page
    }

    render() {
        const { deckName, deckDescription } = this.state
        return (
            <BasicView justifyContent="center">
                <PageTitle headerFontColor={headerFontColor}>Add new deck</PageTitle>
                <CustomInput label="Deck Name" value={deckName} onChange={(text) => this.updateInput('deckName', text)} />
                <CustomInput label="Deck Description" value={deckDescription} onChange={(text) => this.updateInput('deckDescription', text)} />
                <CustomButton
                    backgroundColor={defaultBackgroundColor}
                    fontColor={defaultFontColor}
                    small={true}
                    onPress={this.addDeck}
                >Add Deck</CustomButton>
            </BasicView>
        );
    }
}
