import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, CLOUDINARY_BASE_URL, CLOUDINARY_FOLDER, CLOUDINARY_ID } from '../app/constants';

/* eslint-disable-next-line */
export interface FormProps { }

const getCategories = () => fetch(`${API_URL}/categories`).then(data => data.json());

const INITIAL_USER = {
  title: "",
  description: "",
  categoryName: "",
  categoryImage: ""
};

export function Form(props: FormProps) {
  const [article, setArticle] = React.useState(INITIAL_USER);
  const [disabled, setDisabled] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const isArticle = Object.values(article).every((el) => Boolean(el));
    isArticle ? setDisabled(false) : setDisabled(true);
    getCategories().then(categories => setCategories(categories))
  }, [article]);

const handleChange = (e) => {
  const { name, value } = e.target;
  setArticle((prevState) => ({ ...prevState, [name]: value }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      article.categoryImage = `${CLOUDINARY_BASE_URL}/${CLOUDINARY_ID}/${CLOUDINARY_FOLDER}/${article.categoryName}.png`;
      const url = `${API_URL}/post`;
      const payload = { ...article };
      console.log('payload ', payload);
      const response = await axios.post(url, payload);
      if (response.status === 200) {
        alert('Article posted successfully!')
      }
    } catch (error) {
      alert(error?.response?.data?.message)
      console.log(error?.response?.data)
    }
  };
  return (
    <div className="create-article-form">
      <h2>Create article</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="description"
            className="form-control"
            placeholder="Full Name"
            name="title"
            value={article.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            placeholder="Description"
            name="description"
            value={article.description}
            rows="10"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            className="form-control"
            placeholder="category name"
            name='categoryName'
            defaultValue={article.categoryName}
            onChange={handleChange}
          >
            {categories.map((item) => <option key={item._id}>{item.categoryName}</option>)}
          </select>
        </div>

        {/* <button type="submit" disabled={disabled}> */}
        <button type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default Form;
