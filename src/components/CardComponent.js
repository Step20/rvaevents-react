import React, { FC } from "react";

const CardRender: FC<{
  image: string,
  title: string,
  tag: string,
  tag2: string,
  tag3: string,
  desc: string,
}> = ({ image, title, tag, tag2, tag3, desc, callback }) => {
  return (
    <div
      className="bc"
      onClick={() => {
        callback({ image, title, tag, tag2, tag3, desc });
      }}
    >
      <div className=" inline-block">
        <img
          style={{ borderRadius: ".5rem", marginBottom: "8rem" }}
          src={image}
          className="bc-img"
        />
      </div>
      <div className="bc-text inline-block">
        <div className="bc-title  text-center">
          <h4>{title}</h4>
        </div>
        <div className="bc-tag">
          <ul>
            <li>{tag}</li> <li>{tag2}</li> <li>{tag3}</li>
          </ul>
        </div>
        <div className="bc-desc ">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CardRender;
