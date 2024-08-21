import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Home = () => {
  
    const navigate = useNavigate();
  return (
    <div
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          display:'flex'
        }}
      >
      <button onClick={()=>{navigate(`/list`)}} style={{marginRight:15,minWidth:100,borderColor:'#9bd7f6'}}>Creator List</button>
      <button onClick={()=>{navigate(`/add`)}} style={{minWidth:100,borderColor:'#9bd7f6'}}>Add Creator</button>
        
    </div>
  );
};

export default Home;