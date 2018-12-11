import React from "react";

const Meals = ({ meals }) => (
  <div className="columns is-multiline is-mobile">
    {meals.map(meal => (
      <div key={meal.id} className="column is-3 ">
        <div className="card box is-paddingless">
          <div className="card-image">
            <figure className="image is-4by3">
              <a href={meal.URL}>
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
              </a>
            </figure>
          </div>
          <div className="card-content">{meal.URL}</div>
        </div>
      </div>
    ))}
  </div>
);

export default Meals;
