import Link from "next/link";
import React from "react";

const Logo = () => {
  const image = "https://i.ibb.co/pvYQc5Sp/indugrow-logo.webp";

  return (
    <Link href="/" className="text-2xl font-bold text-primary-green">
      {image ? (
        <img src={image} alt="Logo" width={250} height={80} />
      ) : (
        <h1 className="text-3xl">INDUGROW</h1>
      )}
    </Link>
  );
};

export default Logo;
