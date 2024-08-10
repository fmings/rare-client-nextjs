import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useRouter } from 'next/router';
import { createTag } from '../../api/tagData';

const initialState = {
  Id: 0,
  Label: '',
};

export default function TagForm({ tagObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTag(formInput).then(() => router.push('/tag/tags'));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-black mt-5">{tagObj.id ? 'Update' : 'Create'} Tag</h2>

      {/* TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Tag Label" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a label"
          name="label"
          value={formInput.label}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Button type="submit">{tagObj.id ? 'Update' : 'Create'} Tag</Button>
    </Form>
  );
}

TagForm.propTypes = {
  tagObj: PropTypes.shape({
    id: PropTypes.bool,
    Label: PropTypes.string,
  }),
};

TagForm.defaultProps = {
  tagObj: initialState,
};
