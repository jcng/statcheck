import React, { Component } from 'react'
import { getChampAbilityIcon } from '../utility/DataSource'
import ChampAbilityEffect from './ChampAbilityEffect'
import {styleStatColors} from '../utility/HelperFunctions'


class ChampAbility extends Component {
    render() {
        // unpack ability data for ease of reference
        let abilityKey = this.props.abilityDataRaw[0]; // e.g. QWER
        let abilityData = this.props.abilityDataRaw[1][0]; // the actual detailed ability data

        const abilityEffectList = abilityData.effects.map((effect, index) =>
            <ChampAbilityEffect effectData={effect} key={index} ></ChampAbilityEffect>
        );

        return (
            <div className="champ-ability-wrapper">
                ---
                <img src={ getChampAbilityIcon(abilityKey.toLowerCase()) }></img>
                <div className="champ-ability-name">{abilityData.name}</div>
                <div className="champ-ability-blurb">{abilityData.blurb}</div>
                <div className="champ-abilities-effect-wrapper">
                    {abilityEffectList}
                </div>
            </div>
        )
    }
}

export default ChampAbility