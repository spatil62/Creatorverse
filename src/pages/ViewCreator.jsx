import React, { useEffect, useState } from 'react';
import { supabase } from '../client';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ViewCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase.from('creators').select('*').eq('id', id).single();
      setCreator(data);
    };
    fetchCreator();
  }, [id]);

  const handleDelete = async () => {
    await supabase.from('creators').delete().eq('id', id);
    toast("Creator updated successfully!");
    navigate('/list');
  };

  if (!creator) return <p>Loading...</p>;

  return (
    <div style={{display:'flex',justifyContent:'center',textAlign:'center'}}>
    <div style={{width:500, borderColor:'#454647',borderWidth:1,borderStyle:'solid',padding:15,borderRadius:5}}>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name}  resizeMode={'contain'} style={{height:200,width:200}} />}
      <div style={{fontSize:22, fontWeight:'bold',marginTop:10}}>{creator.name}</div>
      <div style={{fontSize:16}}>{creator.description}</div>
      <div style={{flexDirection:'row',marginTop:15}}>
        <button onClick={()=>window.open(`${creator.url}`,'_blank')} style={{paddingTop:10,paddingBottom:10,fontSize:12,marginRight:15,minWidth:100,borderColor:'#9bd7f6'}}>Visit {creator.name}</button>
        <button onClick={()=>{navigate(`/edit/${creator.id}`)}} style={{paddingTop:8,paddingBottom:8,fontSize:12,marginRight:10, minWidth:100,borderColor:'#9bd7f6'}}>Edit</button>
        <button onClick={handleDelete} style={{paddingTop:10,paddingBottom:10,fontSize:12,marginRight:10,minWidth:100,borderColor:'#9bd7f6'}}>Delete Creator</button>
      </div>
      </div>
    </div>
  );
};

export default ViewCreator;