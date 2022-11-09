import React from "react";

const Start = () => {
  return (
    <div>
      <hr />
      <div className="hero  rounded my-10">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <img
            src="https://img.freepik.com/premium-photo/soccer-ball-world-cup-qatar-2022-3d-illustration_298175-190.jpg?w=2000"
            className="max-w-sm rounded-lg shadow-2xl mx-5"
            alt=""
          />
          <div className="mx-5">
            <h1 className="text-4xl font-bold">Countdown to Qatar 2022!</h1>
            <p className="py-6">
              As we count down to the start of the global showpiece in Qatar on{" "}
              <br />
              20 November, FIFA+ is showcasing 100 of the greatest moments in{" "}
              <br />
              FIFA World Cup history.
            </p>
            <button className="btn btn-secondary">More Info</button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Start;
