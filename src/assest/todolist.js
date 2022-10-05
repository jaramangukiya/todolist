import React from "react";
import Listing from "./listing";

export default class Todolist extends React.Component {
    render() {
        const Todotask = [
            {
                id:1,
                task:"task 1",
            },
            {
                id:2,
                task:"task 2",
            }
        ]
        return (
            <div className="container">
                <h1 className="text-center mt-4">To do list</h1>
                <div className="input-group my-4">
                    <input type="text" placeholder="New Task" className="form-control" id="task"></input>
                    <input type="button" value="Add" className="input-group-text text-bg-primary border border-2 border-primary"></input>
                </div>
                <div>
                    {
                        Todotask.map((value, index) => {
                            return <Listing item={value} />
                        })
                    }
                </div>
                
            </div>
        )
    }
}