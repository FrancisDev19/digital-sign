import React from "react";
import Link from "next/link";

const LanguageSwitcher = () => {
  return (
    <>
      <Link href="/" locale="en">
        Ingles
      </Link>
      <Link href="/" locale="es">
        Español
      </Link>
    </>
  );
};

export default LanguageSwitcher;
