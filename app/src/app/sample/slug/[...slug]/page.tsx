'use client'
import { usePathname, useRouter } from "next/navigation";

export default function Slug() {
  const pathname = usePathname();
  const router = useRouter();

  console.log(pathname);
  console.log(router);

  return (
    <div>
        링크 : { pathname }
    </div>
  );
}
