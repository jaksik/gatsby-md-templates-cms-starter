import React, { Component } from "react"
import Cover from "./cover-img"
import "./style.css"

class Photography extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.handleScroll = this.handleScroll.bind(this);
        this.state={
            animate: null,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', e => this.handleScroll(e));
    }

    componentWillUnmount() {
        this.state.animate=null
    }

    handleScroll = (e) => {
        this.state.animate = this.refs.animate
        let yPosition = (String(e.currentTarget.scrollY / 6) + "px")
        this.state.animate.style.bottom = yPosition
    }

    render() {

        return (
            <div className="animate" ref="animate" style={{ position: `relative` }} >
                <div style={{ position: `absolute`, width: `100%` }}>
                    <Cover />
                </div>
                <div style={{ width: `100%` }}>
                    <h1>animate</h1>
                </div>
            </div>
        )
    }
}

export default Photography