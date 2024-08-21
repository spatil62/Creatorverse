import React, { useState } from 'react';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

const AddCreator = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('creators').insert([{ name, url, description, imageURL }]);
    navigate('/');
  };

  return (
    <div style={{justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column',alignContent:'center'}}>
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="url" value={imageURL} onChange={(e) => setImageURL(e.target.value)} placeholder="Image URL (optional)" />
      <button type="submit">Add Creator</button>
    </form>
    </div>
  );
};

export default AddCreator;