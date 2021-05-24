import React, { Component } from 'react'
import { getChampAbilityIcon } from '../utility/DataSource'

class ChampAbility extends Component {
    render() {
        return (
            <div className="champ-ability-wrapper">
                ---
                <img src={ getChampAbilityIcon(this.props.abilityData.spellKey) }></img>
                <div className="champ-ability-name">{this.props.abilityData.name}</div>
                <div className="champ-ability-toolltip">{this.props.abilityData.tooltip}</div>
            </div>
        )
    }
}

export default ChampAbility