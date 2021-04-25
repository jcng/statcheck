import React, { Component } from 'react'

class ChampAbility extends Component {
    render() {
        return (
            <div className="champ-ability-wrapper">
                ---
                <div className="champ-ability-name">{this.props.abilityData.name}</div>
                <div className="champ-ability-toolltip">{this.props.abilityData.tooltip}</div>
            </div>
        )
    }
}

export default ChampAbility