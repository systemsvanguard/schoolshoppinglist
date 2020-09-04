// src/components/CreateItem.js
import React, { useState } from 'react';

function CreateItem({ addItem }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addItem(value);
      setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={value}
            placeholder="Create a new Shopping Item ..."
            onChange={e => setValue(e.target.value)}
          />
        </form>
    );
}

export default CreateItem;
