import React from "react";
import LoginButton from "./component/LoginButton";
import SignIn from "./component/SignIn";

const Header = () => {
  const session = true;
  return (
    <header className="sticky top-0 z-50 shadow-lg justify-center items-start p-8 bg-white">
      {/* left side - profile pic and name */}

      {/* sign in in check */}
      {!session ? (
        <SignIn />
      ) : (
        <>
          {/* user details */}

          <div className=" select-none justify-between flex items-center space-x-3 ">
            {/* logo */}
            <div className="flex space-x-3 items-center">
              <img
                src="https://avatars.githubusercontent.com/u/70838644?v=4"
                alt="profile pic"
                className="rounded-full h-14 w-14"
              />
              {/* name */}
              <div className="flex flex-col">
                <span>Logged in as</span>

                <span className="font-bold text-blue-400">Magesh</span>
              </div>
            </div>
            {/* sing out */}
            <LoginButton />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
