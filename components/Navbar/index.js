import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavbarContainer } from "../../styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link href="/">
        <Image src="/home.svg" alt="Home" width={30} height={30} />
      </Link>
      <Link href="favorites">
        <Image src="/star.svg" alt="Favorite" width={30} height={30} />
      </Link>
      <Link href="todo">
        <Image src="/checklist.svg" alt="Todo" width={30} height={30} />
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
