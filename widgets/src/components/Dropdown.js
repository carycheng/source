import React, { useState, useEffect } from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.addEventListener(
          "click",
          () => {
            setOpen(false);
          },
          { capture: true }
        );
    }, []);

    // Event Bubbling - Whenever an item is clicked, the browser creates an Event object.
    // The Event object describes the click, what element was clicked on, where the mouse is.
    // Browser hands off this event to React. React does a bit of processing and hands the Event object
    // to the onClick function as the first argument. The Event is then bubbled up to the next parent element
    // and if there is another onClick then it is invoked. onClick is invoked if there is a click handler.
    const renderedOptions = options.map((option) => {

        if (option.value === selected.value) {
            return null;
        }

        return (
            <div key={option.value} className="item" onClick={()=>onSelectedChange(option)}>
                {option.label}
            </div>
        );
    });

    return (
        <div className="ui form">
            <div className="field">
                <label className="label"> Select a Color </label>
                <div onClick={()=> setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active': ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Dropdown;