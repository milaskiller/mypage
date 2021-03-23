import React from "react"

export default class Upgrade extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        cost: 100 * (this.props.state.upgrades.size ? this.props.state.upgrades.size : this.props.state.upgrades.size + 1),
                        count: 0,
                        expo: Math.floor(3 * (props.id ? props.id : 1)),
                        type: this.props.type,
                }
        }

        Buy() {
                if(this.props.state.clicks >= this.state.cost) {
                    console.log("buying")
                    this.props.state.clickMultiplier += this.props.state.clickMultiplier + this.props.id
                    this.props.state.clicks -= this.state.cost
                    return this.setState({cost: this.state.cost * this.state.expo, count: this.state.count + 1})
                }

        }

        Sell() {

        }

        render() {
                return(
                    <div>
                        <h4>{this.props.name}</h4>
                        <ul>
                            <li>Price: {this.state.cost}</li>
                            <li>Count: {this.state.count}</li>
                        </ul>
                        <button onClick={() => this.Buy()}>Buy</button>
                        <button onClick={() => this.Sell()}>Sell</button>

                        <style jsx>{`
                          div {
                            border: 1px solid blue;
                            width: 15%;
                          }
                        `}</style>
                    </div>
                )
        }
}
