import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { getAllCategories } from '../../api/tagData';
import { createPost, updatePost } from '../../api/postsData';

const initialState = {
  id: 0,
  userId: 0,
  categoryId: 0,
  title: '',
  publicationDate: '',
  imageUrl: '',
  content: '',
  approved: false,
};

function PostForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  // const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
  // getAllTags().then(setTags);
    getAllCategories().then(setCategories);
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (p) => {
    p.preventDefault();
    // ADDED PAYLOAD VARIABLE, ADDED USERID AND PUBLICATION DATE KEYS - NEED TO FETCH USER ID AND REPLACE THE TEST CONSTANT BELOW; NEED TO ALSO ENSURE PUBLICATIONDATE IS PULLING IN CORRECT DATE/TIME DATA, CURRENT VALUE IS A DUMMY FOR TESTING
    const payload = { ...formInput, userId: 1, publicationDate: Date.now };
    console.warn(payload);
    if (obj.id) {
      updatePost(payload).then(() => router.push('/posts'));
    } else {
      createPost(payload).then(() => router.push('/posts'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Post</h2>

      <FloatingLabel controlId="floatingInput1" label="Post Title" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Post Title"
          name="title"
          value={formInput.title}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Post Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="imageUrl"
          // CHANGED DOT NOTATION TO IMAGE URL VERSUS IMAGE
          value={formInput.imageUrl}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Article Content" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Article content"
          name="content"
          value={formInput.content}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Category">
        <Form.Select
          aria-label="Category"
          name="categoryId"
          onChange={handleChange}
          className="mb-3"
          // CHANGED KEY TO FORMINPUT VERSUS OBJ
          value={formInput.categoryId}
          required
        >
          <option value="">Select an Category</option>
          {
          categories.map((a) => (
            <option
              key={a.id}
              value={a.id}
            >
              {a.label}
            </option>
          ))
        }
        </Form.Select>
      </FloatingLabel>

      <Button type="submit">{obj.id ? 'Update' : 'Create'} Post</Button>
    </Form>
  );
}

PostForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    categoryId: PropTypes.number,
    title: PropTypes.string,
    publicationDate: PropTypes.string,
    imageUrl: PropTypes.string,
    content: PropTypes.string,
    approved: PropTypes.bool,
  }),
};

PostForm.defaultProps = {
  obj: initialState,
};

export default PostForm;
