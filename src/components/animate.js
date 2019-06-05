import React, { Component } from "react"
import Cover from "./cover-img"
import "./style.css"

class Photography extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        // this.prev;
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            scrollY: null,
            top: 1,
        }
    }

    componentDidMount() {
        const prev = window.scrollY;
        window.addEventListener('scroll', e => this.handleScroll(e));
    }

    handleScroll = (e) => {
        console.log("e page y offset", e.currentTarget.pageYOffset)
        console.log(" screen y", e.currentTarget.screenY)
        console.log("scroll y", e.currentTarget.scrollY)
        console.log("page top", e.currentTarget.visualViewport.pageTop)

        if (this.state.scrollY === null) {
            this.state.scrollY = e.currentTarget.scrollY
        }

        const window = e.currentTarget;
        var hello = this.refs.hello
        this.state.top = e.currentTarget.scrollY / 6
        if (this.prev > window.scrollY) {
            // console.log("scrolling up");
                    //    this.state.top = this.state.top - 3 
        }
        else if (this.prev < window.scrollY) {
            // console.log("scrolling down");
                    // this.state.top = this.state.top + 3 

        }
        let bag = (String(this.state.top) + "px")
        hello.style.bottom = bag

        this.prev = window.scrollY;
        // console.log(hello.scrollTop)
        // let bag = (String(this.state.top) + "px")
        // if (this.state.top < 100) {
        //     this.state.top = this.state.top + 3 

        // }
        // hello.style.bottom = bag
    }

    toggle = () => {
        console.log(this.state.top)

    }

    render() {

        return (
            <div className="hello" ref="hello" style={{ position: `relative` }} >
                <div style={{ position: `absolute`, width: `100%`}}>
                    <Cover />
                </div>
                <div style={{ width: `100%`}}>
                    <h1>HEllo</h1>
                </div>
            </div>
        )
    }
}

export default Photography