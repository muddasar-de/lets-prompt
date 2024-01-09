"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const isUserLoggedIn = true;

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
  });

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Let's Share</p>
      </Link>
      {/* Desktop Setting */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5 ">
            <Link href={"/create-prompt"} className="black_btn">
              Create Post
            </Link>
            <button type="button" className="outline_btn" onClick={signOut}>
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                alt="prfile"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <div>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </div>
        )}
      </div>
      {/* Mobile Setting */}
      {isUserLoggedIn ? (
        <div className="sm:hidden flex relative">
          <Image
            src="assets/images/logo.svg"
            alt="logo"
            width={37}
            height={37}
            className="rounded-full"
            onClick={() => {
              setToggleDropdown((prev) => !prev);
            }}
          />
          {toggleDropdown && (
            <div className="dropdown">
              <Link
                href={"/profile"}
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                My Profile
              </Link>
              <Link
                href={"/create-prompt"}
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Create Prompt
              </Link>
              <button
                type="button"
                className="black_btn"
                onClick={() => {
                  setToggleDropdown(false);
                  signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={"provider.name"}
                onClick={signIn(provider.id)}
                className="black_btn"
              >
                Sign In
              </button>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;