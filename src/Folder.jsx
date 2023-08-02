import React, { useState } from 'react';

const Folder = ({ explorer }) => {
  const [data, setData] = useState(explorer);

  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
  };

  if (explorer.isFolder) {
    return (
      <div>
        <div className="accordion-section">
          <div className="accordion">
            <div
              className="accordian-heading"
              onClick={() => {
                handleClick();
              }}
            >
              <div className="left">{explorer.name}</div>
              <div className="right">
                <span class="material-symbols-outlined">
                  {expand ? 'expand_more' : 'chevron_right'}
                </span>
              </div>
            </div>
            <div
              className="accordian-description"
              style={{ display: expand ? 'block' : 'none' }}
            >
              {explorer.items.map((item) => {
                return <Folder explorer={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="accordian-heading">
        <div className="left">{explorer.name}</div>
        <div className="right">
          <span class="material-symbols-outlined">
            {expand ? 'expand_more' : 'chevron_right'}
          </span>
        </div>
      </div>
    );
  }
};

export default Folder;
