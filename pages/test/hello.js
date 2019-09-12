import React, { Component } from 'react'

class Hello extends Component {
    static async getInitialProps(context) {
        return {
            name : 'Sarah Connor'
        };
    }
    render() {
        return (
            <div>
                <p>HI, MY NAME IS <strong>{this.props.name}</strong> I AM A CLASS BASED COMPONENT, USING getInitialProps LIFE CYCLE METHOD.</p>
            </div>
        )
    }
}

export default Hello
