import React, { useState ,useEffect} from 'react';
import { supabase } from '../client';
import { useNavigate,useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditCreator = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase.from('creators').select('*').eq('id', id).single();
      setName(data.name);
      setUrl(data.url);
      setDescription(data.description);
      setImageURL(data.imageURL);
    };
    fetchCreator();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase
  .from('creators')
  .update({ name: name ,url:url,description:description,imageURL:imageURL})
  .eq('id', id)
  toast("Creator updated successfully!");
  navigate('/list');
  };

  return (
    <div style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="url" value={imageURL} onChange={(e) => setImageURL(e.target.value)} placeholder="Image URL (optional)" />
      <button type="submit">Update Creator</button>
    </form>
</div>
  );
};

export default EditCreator;