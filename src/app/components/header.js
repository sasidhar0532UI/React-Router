import React from 'react';
export default class Header extends React.Component {

    handleChange(e) {
        const title = e.target.value;
        this
            .props
            .changeTitle(title);
    }
    changeme(e) {
        const inputvalue = e.target.value;
        console.log(inputvalue.length);
        var but = this.refs.button1;
        if (inputvalue.length < 5) {
            but.disabled = true;
        } else {
            but.disabled = false;
        }

    }
    clickme(e) {
        alert("hi there");

    }
    render() {

        return (
            <div>
                <h1>{this.props.title}
                </h1>
                <input
                    value={this.props.title}
                    onChange={this
                    .handleChange
                    .bind(this)}/>
                <input
                    onChange={this
                    .changeme
                    .bind(this)}/>
                <button
                    ref="button1"
                    onClick={this
                    .clickme
                    .bind(this)}>Sign up</button>

            </div>
        );
    }
}
