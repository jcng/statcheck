import React, { Component } from 'react'
import ChampStats from './ChampStats'
import ChampSplash from './ChampSplash'
import { fetchChampData } from '../utility/DataSource'

class ChampOverview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            champData: {}
        }
    }

    componentDidMount() {
        fetchChampData("Lucian").then(
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

    render() {
        return (
            <div className="champ-overview-wrapper">
                <ChampSplash champId={this.state.champData.id}></ChampSplash>
                <h1 className="champ-title">{this.state.champData.id}, {this.state.champData.title}</h1>
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
            </div>
        )
    }
}

export default ChampOverview