import React from "react";
import axios from "axios";
import { API_URL, CLOUDINARY_BASE_URL, CLOUDINARY_ID } from '../app/constants';

/* eslint-disable-next-line */
export interface FormProps { }

const INITIAL_USER = {
  title: "",
  text: "",
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
      article.categoryImage = `${CLOUDINARY_BASE_URL}/${CLOUDINARY_ID}/${article.categoryName}.png`;
      console.log(article);
      const url = `${process.env.API_URL}/create`;
      const payload = { ...article };
      const response = await axios.post(url, payload);
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="create-article-form">
      <h2>Create article</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            name="title"
            value={article.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Text</label>
          <textarea
            className="form-control"
            placeholder="Description"
            name="text"
            value={article.text}
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
            <option>reactjs</option>
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
