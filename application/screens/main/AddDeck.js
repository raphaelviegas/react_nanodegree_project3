import React from 'react';
import BasicView from '../../components/BasicView'
import PageTitle from '../../components/PageTitle'
import CustomInput from '../../components/CustomInput'
import { headerFontColor } from '../../config/colors'

export default class AddDeck extends React.Component {
    render() {
        return (
            <BasicView>
                <PageTitle headerFontColor={headerFontColor}>AddDeck Screen</PageTitle>
                <CustomInput >Testando...</CustomInput>
            </BasicView>
        );
    }
}
