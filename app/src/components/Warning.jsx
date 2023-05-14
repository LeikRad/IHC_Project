import React from "react";

const Warning = (props) => {
    const color = props.color;
    const message = props.message;

    if (color == "alert-success") {
        return (
            <div className="toast toast-end">
                <div className="alert alert-success">
                    <div>
                        <span>{message}</span>
                    </div>
                </div>
            </div>
        )
    }else if(color == "alert-error"){
        return (
            <div className="toast toast-end">
                <div className="alert alert-error">
                    <div>
                        <span>{message}</span>
                    </div>
                </div>
            </div>
        )
    }else if(color == "alert-warning"){
        return (
            <div className="toast toast-end">
                <div className="alert alert-warning">
                    <div>
                        <span>{message}</span>
                    </div>
                </div>
            </div>
        )
    }else if(color == "alert-info"){
        return (
            <div className="toast toast-end">
                <div className="alert alert-info">
                    <div>
                        <span>{message}</span>
                    </div>
                </div>
            </div>
        )
    }else if(color == "alert-primary"){
        return (
            <div className="toast toast-end">
                <div className="alert alert-primary">
                    <div>
                        <span>{message}</span>
                    </div>
                </div>
            </div>
        )
    }else if(color == "alert-secondary"){
        return (
            <div className="toast toast-end">
                <div className="alert alert-secondary">
                    <div>
                        <span>{message}</span>
                    </div>
                </div>
            </div>
        )
    }else if(color == "alert-accent"){
        return (
            <div className="toast toast-end">
                <div className="alert alert-accent">
                    <div>
                        <span>{message}</span>
                    </div>
                </div>
            </div>
        )
    }else if(color == "alert-neutral"){
        return (
            <div className="toast toast-end">
                <div className="alert alert-neutral">
                    <div>
                        <span>{message}</span>
                    </div>
                </div>
            </div>
        )
    }
    };

    export default Warning;