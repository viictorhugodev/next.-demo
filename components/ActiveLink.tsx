// import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

export const ActiveLink = ({ text, href }: { text: string; href: string }) => {

  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    // <Link href={href} passHref>
    //   <Link href={href} passHref legacyBehavior>
        // {/* <a style={style}>{text}</a> */}
        // <a href={href} style={style} onClick={handleClick}>
        //   {text}
        // </a>
    //   {/* </Link>
    // </Link> */}
    <a href={href} style={router.asPath === href ? style : undefined} onClick={handleClick}>
      {text}
    </a>
  );
};

