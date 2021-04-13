import React, {Component} from "react"
import {getChampSplashSrc} from "../utility/DataSource"

class ChampSplash extends Component {
    render() {
        let champSplash = getChampSplashSrc(this.props.champId)
        return (
            <div className="champ-hero-splash">
                <img src={champSplash}></img>
            </div>
        )
    }
}

export default ChampSplash