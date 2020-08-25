import React from "react";

export default function Searchbox() {
  return (
    <div className="Searchbox">
      <form>
        <input type="search" placeholder="Enter a city" />
        <input id="Submitbutton" type="submit" value="Enter" />
      </form>
    </div>
  );
}