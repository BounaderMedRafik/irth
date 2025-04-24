import { navLinks } from "@/db/data";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className=" w-full fixed top-0 left-0 z-50 ">
      <div className=" wrapper flex items-center justify-between py-1.5 px-2 bg-background/50 backdrop-blur-xl rounded-b-xl border-x border-b border-foreground/5">
        <div>
          <img className=" size-12" src="/brand/irth_logo_no_pj.png" alt="" />
        </div>

        <div className="flex items-center  divide-x ">
          {navLinks.map((item, i) => (
            <Link key={i} href={item.link}>
              <div className="flex items-center gap-2 px-3">
                <div>{item.icon}</div>
                <div className=" text-sm">{item.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
