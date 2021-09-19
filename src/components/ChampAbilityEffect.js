import React, { Component } from 'react'
import ChampAbilityLeveling from './ChampAbilityLeveling'
import {styleStatColors} from '../utility/HelperFunctions'


class ChampAbilityEffect extends Component {
    abilityLevelingWrapper() {
        if (this.props.effectData.leveling) {
            const levelingList = this.props.effectData.leveling.map((attrib) =>
                <ChampAbilityLeveling levelingDataRaw={attrib} key={attrib.attribute} ></ChampAbilityLeveling>
            );
            return (
                <div className="champ-ability-effect-leveling-wrapper">
                    {levelingList}
                </div>
            )
        }
    }

    render() {
        return (
            <div className="champ-ability-effect">
                <div className="champ-ability-effect-description">{this.props.effectData.description}</div>
                {this.abilityLevelingWrapper()}
            </div>
        )
    }
}

export default ChampAbilityEffect