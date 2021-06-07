import React, { Component } from 'react'

// Helper function to convert modifier objects into strings
// Takes an object with two attributes: values and units
const parseModifiers = (modObj) => {
    if (modObj) {
        let baseValue = modObj.values.join(" / ")
        return baseValue
    }
}

const LevelingModifier = (props) => {
    if (props.modifier) {
        let modifierString = parseModifiers(props.modifier)
        return(
            <div className="leveling-modifier">{modifierString}</div>
        )
    }
    else {
        return null
    }
}

class ChampAbilityLeveling extends Component {
    render() {
        return (
            <div className="champ-ability-effect-leveling">
                <div className="leveling-attribute-name">{this.props.levelingDataRaw.attribute}</div>
                <LevelingModifier modifier={this.props.levelingDataRaw.modifiers[0]}></LevelingModifier>
            </div>
        )
    }
}

export default ChampAbilityLeveling