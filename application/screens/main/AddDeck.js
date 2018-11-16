import React from 'react';
import BasicView from '../../components/BasicView'
import PageTitle from '../../components/PageTitle'
import { headerFontColor } from '../../config/colors'

export default class AddDeck extends React.Component {
    render() {
        return (
            <BasicView>
                <PageTitle headerFontColor={headerFontColor}>AddDeck Screen</PageTitle>
            </BasicView>
        );
    }
}
