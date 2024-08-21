import React, { useEffect, useState } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard.jsx';
import { toast } from 'react-toastify';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from('creators').select('*');
      setCreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <div
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          display:'flex'
        }}
      >
      {creators.length ? (
        creators.map((creator,i) => <CreatorCard key={creator.id} index={i} creator={creator} />)
      ) : (
        <p>No creators found</p>
      )}
    </div>
  );
};

export default ShowCreators;