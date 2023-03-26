import React from 'react';
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <ul className='nav_container'>
        <Link passHref href={`/`}><li>Home</li></Link>
        <Link passHref href={`/about`}><li>About</li></Link>
        <Link passHref href={`/blogpost`}><li>Blog</li></Link>
        <Link passHref href={`/contact`}><li>Contact</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;