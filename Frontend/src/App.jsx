import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  const [error, SetError] = useState();
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/users");
        const result = await response.json();
        setUser(result);
        SetError(false);
      } catch (error) {
        setUser([]);
        SetError(true);
        console.error("An error occours while fetching the data ::", error);
      } finally {
        SetLoading(false);
      }
    })();
  });

  return (
    <div className="bg-slate-900 py-5">
      {loading == true ? (
        <h1 text-white text-center w-full text-5xl font-semibold py-5>
          Loading...
        </h1>
      ) : (
        <div className="flex flex-col gap-10">
          {error != false ? (
            <h1 className="text-white text-center w-full text-5xl font-semibold py-5">
              Unable to fetch data
            </h1>
          ) : (
            <h1 className="text-white text-center w-full text-5xl font-semibold py-5">
              User Profile
            </h1>
          )}
          <div className="flex justify-center items-center flex-wrap gap-10 px-5">
            {error != true || user.length != 0
              ? user.map((item) => (
                  <div
                    key={item.id}
                    className="w-72 flex justify-center items-center flex-col gap-6 border-2 border-gray-400 px-6 py-10 rounded-3xl"
                  >
                    <div>
                      <img
                        src={item.profile_image}
                        alt="profile"
                        className="rounded-full"
                      />
                    </div>
                    <div className="text-white text-xl w-full flex flex-col">
                      <h1>
                        {item.first_name} {item.last_name}
                      </h1>
                      <p>{item.email}</p>
                      <p>{item.gender}</p>
                      <p>{item.company}</p>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
