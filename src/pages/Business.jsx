import { Fragment, useEffect, useState } from "react";
import CardForNews from "../components/CardForNews";
import axios from "axios";
import PropTypes from "prop-types";
import { ENDPOINT, APIKEY, PAGE_LIMIT } from "../constants";

const Business = () => {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    document.querySelector("head title").textContent = "MEGA NEWS | Business";
  });
  useEffect(() => {
    const getData = async () => {
      try {
        let { data } = await axios(
          `${ENDPOINT}category=business&q=${search}&pageSize=${PAGE_LIMIT}&page=${page}&apiKey=${APIKEY}`
        );
        let { data: totalData } = await axios(
          `${ENDPOINT}category=business&q=${search}&apiKey=${APIKEY}`
        );
        setPost(data.articles);
        setTotal(totalData.totalResults);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [search, page]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const getPage = (key) => {
    setPage(1);
    setPage(key);
  };
  let items = [];
  for (let i = 1; i <= Math.ceil(total / PAGE_LIMIT); i++) {
    items.push(
      <li className="pagination" onClick={() => getPage(i)} key={i}>
        {i}
      </li>
    );
  }
  let pagination = total > PAGE_LIMIT && <div className="page">{items}</div>;
  return (
    <Fragment>
      <section>
        <div className="container">
          <div className="header-search">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search anything"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1
            style={{
              textAlign: "center",
              color: "blueviolet",
              fontSize: "30px",
              paddingBottom: "20px",
            }}
          >
            Total: {total}
          </h1>
          <div className="post-item">
            {post.map((el, index) => {
              return <CardForNews key={index} {...el} />;
            })}
          </div>
          <div>{pagination}</div>
        </div>
      </section>
    </Fragment>
  );
};

CardForNews.propTypes = {
  search: PropTypes.string,
};

export default Business;
