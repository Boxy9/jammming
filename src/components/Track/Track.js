import React, { useCallback } from "react";

import "./Track.css";

const Track = (props) => {
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>Remove from Playlist
        </button>
      );
    }
    else {
      return (
        <button className="Track-action" onClick={addTrack}>Add to Playlist
        </button>
      );
    }
  };

  const playTrack = () => {

    let frame = (
      <iframe className="Track-information"
        title={`Spotify Embed: ${props.track.name}`}
        src={`https://open.spotify.com/embed/track/${props.track.id}?utm_source=generator&theme=0`}
        width="100%"
        height="80px"
        style={{ Border: '0px' }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy" />
    );
    return frame;
  };

  return (
    <div className="Track">
      {playTrack()}{renderAction()}
    </div>
  );
};

export default Track;
