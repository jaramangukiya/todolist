import React from "react";

export default class Listing extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <ul className="list-group" >
                <li className="list-group-item  my-1"><a href="#" className="text-decoration-none text-capitalize">{item.task}</a></li>
            </ul>
        )
    }
}