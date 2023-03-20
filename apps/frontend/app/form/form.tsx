import React from "react";
import axios from "axios";
import { API_URL } from '../constants/index';

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
    console.log(article)
    try {
      const url = `${API_URL}/create`;
      const payload = { ...article };
      payload.categoryImage = `${process.env.CLOUDINARY_BASE_URL}/${article.categoryName}.png`
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
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Text</label>
          <textarea
            className="form-control"
            placeholder="text"
            name="text"
            value={article.text}
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            className="form-control"
            placeholder="category"
            name="categoryName"
            value={article.categoryName}
            required
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={disabled}>
          Create
        </button>
      </form>
    </div>
  );
}

export default Form;
