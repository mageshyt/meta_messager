import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="flex flex-col space-y-4 items-center ">
      {/* for not login state */}
      {/* image */}
      <div className="flex gap-3 items-center">
        <Image
          src="https://links.papareact.com/jne"
          alt="logo"
          width={50}
          height={10}
        ></Image>

        <span className="text-2xl text-blue-400">
          Welcome to Meta Messenger
        </span>
      </div>

      {/* sign in */}
      <Link href="/login" className=" hover:bg-blue-400 bg-blue-500 px-4 py-2">
        Sing In
      </Link>
    </div>
  );
};

export default SignIn;
