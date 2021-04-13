// Individual Listings of stats

import React, { Component } from 'react'
import {champData} from '../utility/DataSource'

class ChampStats extends Component {

    // Mapping for user-friendly names of stat names
    // Maybe split this of into its own file if it's referenced elsewhere
    statNameMappings = {
        "hp": "HP",
        "hpperlevel": "HP/Level",
        "mp": "MP",
        "mpperlevel": "MP/Level",
        "movespeed": "Movespeed",
        "armor": "AR",
        "armorperlevel": "AR/Level",
        "spellblock": "MR",
        "spellblockperlevel": "MR/Level",
        "attackrange": "Range",
        "hpregen": "HP Regen",
        "hpregenperlevel": "HP Regen/Level",
        "mpregen": "MP Regen",
        "mpregenperlevel": "MP Regen/Level",
        "crit": "Crit Chance",
        "critperlevel": "Crit Chance/Level",
        "attackdamage": "AD",
        "attackdamageperlevel": "AD/Level",
        "attackspeedperlevel": "AS/Level",
        "attackspeed": "AS"
    };
    render() {
        return <div className="champ-stats">{this.statNameMappings[this.props.stat]}: {champData.stats[this.props.stat]}</div>
    }
}

export default ChampStats