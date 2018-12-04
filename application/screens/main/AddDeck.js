import React from 'react';
import BasicView from '../../components/BasicView'
import PageTitle from '../../components/PageTitle'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { headerFontColor, defaultBackgroundColor, defaultFontColor } from '../../config/colors'



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

    render() {
        const { deckName, deckDescription } = this.state
        return (
            <BasicView justifyContent="flex-start">
                <PageTitle headerFontColor={headerFontColor}>AddDeck Screen</PageTitle>
                <CustomInput label="Deck Name" value={deckName} onChange={(text) => this.updateInput('deckName', text)} />
                <CustomInput label="Deck Description" value={deckDescription} onChange={(text) => this.updateInput('deckDescription', text)} />
                <CustomButton
                    backgroundColor={defaultBackgroundColor}
                    fontColor={defaultFontColor}
                    small={true}
                    onPress={() => console.log('Add Deck buttom is pressed')}
                >Add Deck</CustomButton>
            </BasicView>
        );
    }
}
