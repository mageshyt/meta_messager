"use client";
const LoginButton = () => {
  return (
    <button
      onClick={() => {
        console.log("Sign out");
      }}
      className=" hover:bg-blue-500 transform transition-all duration-150 bg-blue-400 px-4 py-3 rounded-md"
    >
      Sign out
    </button>
  );
};

export default LoginButton;
