import React, {Component} from 'react'

class ChampAbilityEffect extends Component {
    render() {
        return (
            <div className="champ-ability-effect-description">{this.props.effectData.description}</div>
        )
    }
}

export default ChampAbilityEffect