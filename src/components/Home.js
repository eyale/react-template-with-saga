import React, {Component} from 'react';
import SimpleForm from './SimpleForm';
import {Header} from 'semantic-ui-react';


export default class Home extends Component {
    yahooWidget = () => {
        const {query} = this.props.weather;

        if (query && query.results) {
            const html = query.results.channel.item.description.replace(/(<!\[CDATA\[|]]>)/g, '')
            return (
                <div>
                    <br/>
                    <Header as='h3' textAlign='center'>
                        {query.results.channel.description}
                    </Header>
                    <div dangerouslySetInnerHTML={{__html: html}}/>
                </div>
            )
        }
        return false;
    }

    render() {
        return (
            <div>
                <SimpleForm/>
                {this.yahooWidget()}
            </div>
        );
    }
}
