import React from 'react'

export const Tag: React.FC<{ tag: string }> = ({ tag }) => {
    return (
      <div
        style={{
          minHeight: "70%",
          margin: "0.3rem 0.3rem",
          padding: "0.5rem 1rem",
          backgroundColor: "rgb(201, 236, 249)",
          borderRadius: "0.3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color : 'darkblue',
        }}
      >
        {tag}
      </div>
    );
  };