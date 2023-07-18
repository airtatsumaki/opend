import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { nft } from "../../../declarations/nft";
import { Principal } from "@dfinity/principal";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../../declarations/nft";

function Item(props) {
  
  const [itemObj, setItemObj] = useState({name: "no name", owner: "no owner", asset: "no asset"});

  const id = props.id;
  const princialId = Principal.fromText(id);
  const localHost = "http://localhost:8080/";
  const agent = new HttpAgent({
    host: localHost
  });
  
  useEffect(() => {
    loadNft();
  },[]);

  async function loadNft(){
    const nftActor = await Actor.createActor(idlFactory, {
      agent,
      canisterId: princialId
    });

    const itemName = await nftActor.getName();
    const itemOwner = await nftActor.getOwner();
    const itemAsset = await nftActor.getAsset();
    const imageAsset = new Uint8Array(itemAsset);
    const imageUrl = URL.createObjectURL(new Blob([imageAsset.buffer], {type: "images/png"}));
    setItemObj({
      name: itemName,
      owner: itemOwner.toText(),
      asset: imageUrl
    });
  }
  
  return (
    <div className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={itemObj.asset}
        />
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            {itemObj.name}<span className="purple-text"></span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Owner: {itemObj.owner}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
