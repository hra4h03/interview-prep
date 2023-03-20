import React from "react";
import axios from "axios";
import { API_URL, CLOUDINARY_BASE_URL, CLOUDINARY_FOLDER, CLOUDINARY_ID } from '../app/constants';

/* eslint-disable-next-line */
export interface FormProps { }

const INITIAL_USER = {
  title: "",
  description: "",
  categoryName: "",
  categoryImage: ""
};

export function Form(props: FormProps) {
  const [article, setArticle] = React.useState(INITIAL_USER);
  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    const isArticle = Object.values(article).every((el) => Boolean(el));
    isArticle ? setDisabled(false) : setDisabled(true);
  }, [article]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      article.categoryImage = `${CLOUDINARY_BASE_URL}/${CLOUDINARY_ID}/${CLOUDINARY_FOLDER}/${article.categoryName}.png`;
      console.log(article);
      const url = `${API_URL}/post`;
      const payload = { ...article };
      const response = await axios.post(url, payload);
      console.log('response ', response)
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
            value={article.categoryName}
            onChange={handleChange}
          >
            <option>javascript</option>
            <option>aws</option>
            <option>nodejs</option>
            <option>html</option>
            <option>react</option>
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
