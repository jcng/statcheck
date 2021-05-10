import React, {Component} from "react"
import {getChampSplashSrc} from "../utility/DataSource"

class ChampSplash extends Component {
    render() {
        let champSplash = getChampSplashSrc(this.props.champName)
        return (
            <div className="champ-hero-splash">
                <img alt={this.props.altText} src={champSplash}></img>
            </div>
        )
    }
}

export default ChampSplash