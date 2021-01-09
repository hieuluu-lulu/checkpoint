import React, { useState } from "react";
import songList from "../list.js";

function List({ songList,index }) {
  return (
    <div>
      <ul>
        <li>{index+1} . {songList}</li>
      </ul>
    </div>
  );
}
function GetListSong() {
  const listTitle = songList.map((songs) => {
    return songs.title;
  });
  
  // const [song] = useState([
  //     songList.map((songs) => {
  //         return songs.title;
  //     }),
  // ]);
  return (
    <div>
      {listTitle.map((songList,index) => (
        <List 
            songList={songList} 
            index={index}
        />
      ))}
    </div>
  );
}
export default GetListSong;
