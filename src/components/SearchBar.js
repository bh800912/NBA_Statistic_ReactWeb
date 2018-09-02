import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';

window.nba = nba;

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(({fullName}) => fullName),
        });
        console.log(this.state.dataSource);
    }

    onSelect = (value) => {
        console.log('onSelect', value);
        this.props.loadPlayerInfo(value);
    }

    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                className = "search-bar"
                dataSource={dataSource}
                size="large"
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="input here"
            >
                <Input suffix={<Icon type="search"  />} />
            </AutoComplete>
        );
    }
}