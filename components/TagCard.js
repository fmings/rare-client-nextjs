import React, { useEffect, useState } from 'react';
import { getAllTags } from '../api/tagData';

export default function TagCard() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getAllTags().then(setTags);
  });

  return (
    <div>
      {tags.map((t) => (<h1>{t.label}</h1>))}
    </div>
  );
}
