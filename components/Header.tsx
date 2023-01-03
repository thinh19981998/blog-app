import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Image
          className="rounded-full"
          src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/50243797_336833603837512_3225063355991457792_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iFgAOhUrpTYAX9sDpkC&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfCliTE38p901lRYtCTxDWOu3FbSPpuReeIizrZ1R7UmAA&oe=63D2A781"
          width={50}
          height={50}
          alt="profile image"
        />
        <h1>Thinh Cowhat</h1>
      </div>
      <div className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center">
        <Link href="https://dpthinh.vercel.app/">Visit my portfolio</Link>
      </div>
    </header>
  );
};

export default Header;
