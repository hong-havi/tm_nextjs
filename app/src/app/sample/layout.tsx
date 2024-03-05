'use client'
import Link from 'next/link'
import { Suspense } from "react";
import Loading  from "./loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
        <div className="NavBar">
            <Link href="/" className="NavButton">홈</Link>
            <Link href="/sample/slug/a/1/2/3" className="NavButton">링크캡쳐</Link>
            <div>
                <div>Route 그룹</div>
                <Link href="/sample/free" className="NavButton">자유</Link> |
                <Link href="/sample/qna" className="NavButton">QNA</Link> |
                <Link href="/sample/qna2" className="NavButton">QNA2</Link> |
                <Link href="/sample/props" className="NavButton">props</Link> |
                <Link href="/sample/event1" className="NavButton">이벤트1</Link> |
                <Link href="/sample/event2" className="NavButton">이벤트2</Link> |
                <Link href="/sample/state" className="NavButton">상태관리</Link> |
                <Link href="/sample/zustand" className="NavButton">zustand</Link> |
                <Link href="/sample/redux-simple" className="NavButton">redux-simple</Link> |
                <Link href="/sample/redux" className="NavButton">redux</Link>
            </div>
        </div>
        <Suspense fallback={ <Loading></Loading> }>
            <div className="contents">
                {children}
            </div>
        </Suspense>
    </>
  );
}
