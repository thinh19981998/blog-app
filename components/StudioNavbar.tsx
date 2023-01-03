import Link from 'next/link';
import React from 'react';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#fbab0a] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#fbab0a] mr-2" />
          Go to website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
