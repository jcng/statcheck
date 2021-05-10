import React, { Component } from 'react'
import ChampStats from './ChampStats'
import ChampSplash from './ChampSplash'
import ChampAbility from './ChampAbility'
import { fetchChampDataCDragon } from '../utility/DataSource'

class ChampOverview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            champData: {}
        }
    }

    componentDidMount() {
        fetchChampDataCDragon("236").then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    champData: result
                })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    // Loop through available ability data and return ChampAbility components in a warpper
    ChampAbilityWrapper() {
        if (this.state.champData.spells) {
            const abilityList = this.state.champData.spells.map((ability) => 
                <ChampAbility abilityData={ability}></ChampAbility>
            );
            return (
                <div className="champ-abilities-wrapper">
                    {abilityList}
                </div>
            )
        }
    }

    render() {
        return (
            <div className="champ-overview-wrapper">
                <ChampSplash champName={this.state.champData.alias} altText={this.state.champData.name + " splash art"}></ChampSplash>
                <h1 className="champ-title">{this.state.champData.name}, {this.state.champData.title}</h1>
                <div className="champ-stats-wrapper">
                    <ChampStats stat="hp"></ChampStats>
                    <ChampStats stat="hpperlevel"></ChampStats>
                    <ChampStats stat="mp"></ChampStats>
                    <ChampStats stat="mpperlevel"></ChampStats>
                    <ChampStats stat="movespeed"></ChampStats>
                    <ChampStats stat="armor"></ChampStats>
                    <ChampStats stat="armorperlevel"></ChampStats>
                    <ChampStats stat="spellblock"></ChampStats>
                    <ChampStats stat="spellblockperlevel"></ChampStats>
                    <ChampStats stat="attackrange"></ChampStats>
                    <ChampStats stat="hpregen"></ChampStats>
                    <ChampStats stat="hpregenperlevel"></ChampStats>
                    <ChampStats stat="mpregenperlevel"></ChampStats>
                    <ChampStats stat="crit"></ChampStats>
                    <ChampStats stat="critperlevel"></ChampStats>
                    <ChampStats stat="attackdamage"></ChampStats>
                    <ChampStats stat="attackdamageperlevel"></ChampStats>
                    <ChampStats stat="attackspeedperlevel"></ChampStats>
                    <ChampStats stat="attackspeed"></ChampStats>
                </div>
                {this.ChampAbilityWrapper()}
            </div>
        )
    }
}

export default ChampOverview