import {React,useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const CreatorCard = ({ creator,index }) => {
  const navigate = useNavigate()
  const cardGap = 40;
    const cardWidth = (window.innerWidth - cardGap * 3) / 2;
  return (
    <div style={{borderWidth:1,borderStyle:'solid', borderColor:'#454647',borderRadius:5,padding:10,width: cardWidth, marginTop: cardGap,
                marginLeft: index % 2 !== 0 ? cardGap : 0,justifyContent: 'center',
                alignItems: 'center'}}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1 }}>
          {creator.imageURL && (
            <img src={creator.imageURL} alt={creator.name} style={{height:150,width:150}} />
          )}
        </div>
        <div style={{ flex: 3, marginLeft:10}}>
          <div style={{fontSize:18, fontWeight:'bold'}}>{creator.name}</div>
          <div style={{fontSize:14}}>{creator.description}</div>
        </div>
      </div>
      <div style={{marginTop:15,textAlign:'right'}}>
        <button onClick={()=>window.open(`${creator.url}`,'_blank')} style={{paddingTop:8,paddingBottom:8,fontSize:12,marginRight:10,minWidth:100,borderColor:'#9bd7f6'}}>Visit</button>
        <button onClick={()=>{navigate(`/edit/${creator.id}`)}} style={{paddingTop:8,paddingBottom:8,fontSize:12,marginRight:10, minWidth:100,borderColor:'#9bd7f6'}}>Edit</button>
        <button onClick={()=>{navigate(`/creator/${creator.id}`)}} style={{paddingTop:8,paddingBottom:8,fontSize:12, minWidth:100,borderColor:'#9bd7f6'}}>View Details</button>
      </div>
    </div>
  );
};

export default CreatorCard;
