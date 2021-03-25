import React from "react";
import Upgrade from "../../../components/upgrade";
import Spinner from "react-bootstrap/Spinner"

export default class Clicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            tickMultiplier: 1,
            clickMultiplier: 1,
            tickspeed: 200,
            upgrades: new Map(),
            mode: "debug",
            saveTimer: 60,
            loading: true
        }
        this.renderUpgrades = this.renderUpgrades.bind(this);

    }

    async loadGameData() {
        return localStorage.getItem("gameData");
    }

    async componentDidMount() {
        console.log(await this.loadGameData())
        if(this.mode !== "debug") {
            setInterval(() => {
            }, this.state.tickspeed)
        }

        this.setState({loading: false});
    }

    componentDidUpdate() {
        console.log("updated");
    }

    renderUpgrades(name, id) {
        return (
            <Upgrade state={this.state} name={name} id={id}/>
        )
    }

    render() {
        if(this.state.loading) {
            return (
                <>
                    <Spinner animation="border" role="status">
                        <span>loading...</span>
                    </Spinner>
                    <style jsx>{`
                        * {
                            background-color: black;
                            color: white;
                        }
                    `}</style>
                </>
            )
        } else {
            return (
                <div>
                    <head>
                        <title>{this.state.clicks} Clicks</title>
                    </head>
                    <h1 className="clicks">You have {this.state.clicks} CLICKS</h1>
                    <button
                        className="cursor"
                        onClick={() => this.setState({clicks: this.state.clicks + (this.state.clickMultiplier * 10)})}
                    ><img src="/cursor1.jpg" alt="CURSOR"/></button>
                    <div className="upgrades">
                        {this.renderUpgrades("test", 1)}
                    </div>
    
                    <style jsx>{`
                        * {
                          text-align: center;
                        }
                        .upgrades {
                          display: block;
                        }
                        img {
                        width: 400px;
                        height: 300px;
                        }
                    `}</style>
                </div>
            )
        }
    }


}
