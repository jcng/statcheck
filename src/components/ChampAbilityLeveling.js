import React, { Component } from 'react'
import {homogenousArray} from '../utility/HelperFunctions'

// Helper function to convert modifier objects into strings
// Takes an object with two attributes: values and units
const parseModifiers = (modObj) => {
    if (modObj) {
        if (homogenousArray(modObj.values)) {
            return modObj.values[0] + modObj.units[0]
        }
        else {
            let baseValue = modObj.values.join(" / ")
            return baseValue + modObj.units[0]
        }
    }
}

const LevelingModifier = (props) => {
    if (props.modifier) {
        // base values are at index 0, all values after are ratios
        let modifierString = parseModifiers(props.modifier[0]);

        let ratioArray = []
        for (var i = 1; i < props.modifier.length; i++) {
            ratioArray.push(parseModifiers(props.modifier[i]))
        }
        const ratioList = ratioArray.map((ratio) => 
            <span>(+ {ratio})</span>
        )
        
        return(
            <div className="leveling-modifier">
                <span>{modifierString}</span>
                {ratioList.length > 0 && ratioList}
            </div>
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
                <LevelingModifier modifier={this.props.levelingDataRaw.modifiers}></LevelingModifier>
            </div>
        )
    }
}

export default ChampAbilityLeveling