import React from "react";
import Message from "./Message";
import SongLyric from "./SongLyric";

const SongDetail = ({ search, lyric }) => {
  if (!lyric) return null;

  console.log(lyric);

  return (
    <>
      {/* <SongLyric title={search.song} lyrics={lyric.lyrics} /> */}
      <option></option>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: el artista no  existe '<em>${search.song}</em>'`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}

      {/* {bio.artists ? (
        <SongArtis artist={bio.artist} />
      ) : (
        <Message
          msg={`Error:La canción no existe '<em> ${search.artist} </em>'`}
          bgColor="#dc3545"
        />
      )} */}
    </>
  );
};

export default SongDetail;
