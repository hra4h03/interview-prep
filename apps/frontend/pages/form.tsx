import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, CLOUDINARY_BASE_URL, CLOUDINARY_FOLDER, CLOUDINARY_ID } from '../app/constants';

/* eslint-disable-next-line */
export interface FormProps { }

const getCategories = () => fetch(`${API_URL}/categories`).then(data => data.json());

const INITIAL_FORM_DATA = {
  title: "",
  description: "",
  categoryName: "",
  categoryImage: ""
};

export function Form(props: FormProps) {
  const [formData, setFormData] = React.useState(INITIAL_FORM_DATA);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    getCategories().then(categories => {
      setCategories(categories);
      setFormData((prevState) => ({ ...prevState, categoryName: categories[0].categoryName, categoryId: categories[0]._id }));
    })
  }

  const selectedIdOnChange = (e, attr) => {
    const { name, value } = e.target;
    const idChosen = e.target.children[e.target.selectedIndex]?.getAttribute(attr)
    setFormData((prevState) => ({ ...prevState, [name]: value, categoryId: idChosen }));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      formData.categoryImage = `${CLOUDINARY_BASE_URL}/${CLOUDINARY_ID}/${CLOUDINARY_FOLDER}/${formData.categoryName}.png`;
      const url = `${API_URL}/post`;
      const payload = { ...formData };
      console.log('payload ', payload);
      const response = await axios.post(url, payload);
      if (response.status === 200) {
        alert('form data posted successfully!')
      }
    } catch (error) {
      alert(error?.response?.data?.message)
      console.log(error?.response?.data)
    }
  };
  return (
    <div className="create-article-form">
      <h2>Create formData</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input required type="description" className="form-control" placeholder="Full Name"
            name="title" value={formData.title} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea required className="form-control" placeholder="Description" name="description"
            value={formData.description} rows="10" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select className="form-control" placeholder="category name"
            name='categoryName' defaultValue={formData.categoryName}
            onChange={(e) => selectedIdOnChange(e, 'data-id')}>
            {categories.map((item) => <option key={item._id} data-id={item._id}>{item.categoryName}</option>)}
          </select>
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Form;
