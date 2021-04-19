import React, { Component } from 'react'

class ChampAbility extends Component {
    render() {
        return (
            <div className="champ-ability-wrapper">
                <div className="champ-ability-name">{this.props.abilityData.name}</div>
                <div className="champ-ability-description">{this.props.abilityData.description}</div>
            </div>
        )
    }
}

export default ChampAbility