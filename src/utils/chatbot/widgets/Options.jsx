import React from "react"
import style from './Chatbot.module.scss';
const Options = (props) => {
    return (
        <div className={`${style.options}`}>
            <h1 className={`${style['options-header']}`}>{props.title}</h1>
            <div className={`${style['options-container']}`}>
                {props.options.map((option) => {
                    return (
                        <div
                            className={`${style['option-item']}`}
                            onClick={option.handler}
                            key={option.id}
                        >
                            {option.name}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default Options;