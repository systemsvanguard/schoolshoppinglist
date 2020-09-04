// src/components/Item.js
import React from 'react';

function Item({ item, index, completeItem, removeItem }) {
    return (
      <div className="styleItem has-text-left" style={{textDecoration:item.isDone ? "line-through" : "" }}>
		    <button className="button is-link" onClick={() => completeItem(index)}>
			    <span className="icon is-small">
			      <i className="fas fa-check"></i>
			    </span>
			    <span>Done</span>
		    </button>
		    <button className="button is-danger" onClick={() => removeItem(index)}>
			    <span>Delete</span>
			    <span className="icon is-small">
			      <i className="fas fa-trash-alt"></i>
			    </span>
		    </button>
            <span className="styleItem">{item.title}</span>
        </div>
    );
}

export default Item;
