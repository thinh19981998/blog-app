import Image from 'next/image';

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        width={50}
        height={50}
        src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/50243797_336833603837512_3225063355991457792_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iFgAOhUrpTYAX9sDpkC&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfCliTE38p901lRYtCTxDWOu3FbSPpuReeIizrZ1R7UmAA&oe=63D2A781"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
