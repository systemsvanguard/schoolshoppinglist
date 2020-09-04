// src/components/SchoolItem.js
import React, { useState, useEffect } from 'react';
import CreateItem from './CreateItem';
import Item from './Item';

function SchoolItem() {
    const [itemsRemaining, setItemsRemaining] = useState(0);
    const [items, setItems] = useState([
      { isDone: true , title: "Backpack with laptop compartment ~ 1" },
      { isDone: true , title: "Lightweight Laptop ~ 1"},
      { isDone: false, title: "Multi-subject notebooks ~ 7"},
      { isDone: false, title: "Black sneakers with non-marking soles ~ 1 pair"},
	    { isDone: false, title: "Coloured Index Cards ~ 4 packs" },
	    { isDone: false, title: "Erasable ink pens - multiple ink colours ~ 9 pens"}
    ]);

    useEffect(() => { setItemsRemaining(items.filter(item => !item.isDone).length) });

    const addItem = title => {
      const newItems = [...items, { title, isDone: false }];
      setItems(newItems);
    };

    const completeItem = index => {
      const newItems = [...items];
      newItems[index].isDone = true;
      setItems(newItems);
    };

    const removeItem = index => {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
    };

    return (
        <div className="itemBackground">
        <div className="itemFrame has-background-success">
				<div className="title has-text-centered has-text-link has-text-weight-bold is-size-2">School Shopping List</div>
				<div className="title has-text-centered has-text-danger has-text-weight-bold is-size-3">{itemsRemaining} Items Remaining</div>

				<div className="addItem" >
				  <CreateItem addItem={addItem} />
				</div>

				<div className="styleItem">
				  {items.map((item, index) => (
					<Item
					  item={item}
					  index={index}
					  completeItem={completeItem}
					  removeItem={removeItem}
					  key={index}
					/>
				  ))}
				</div>
			</div>
		</div>
    );
}

export default SchoolItem;
