import React from "react";

const Start = () => {
  return (
    <div>
      <div className="hero bg-slate-100 rounded my-10">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <img
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl mx-5"
            alt=""
          />
          <div className="mx-5">
            <h1 className="text-4xl font-bold">Sports PhotoGrapher Office!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda{" "}
              <br />
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
