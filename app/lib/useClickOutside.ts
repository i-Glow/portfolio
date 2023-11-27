import { useEffect, useRef } from "react";

export default function useClickOutside(state: any) {
  let domNode = useRef<any>(null);

  useEffect(() => {
    let handler = (e: any) => {
      if (!domNode.current?.contains(e.target)) {
        state();
      }
    };
    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  });

  return domNode;
}

// paste this where you want to use it:
//  let menuRef = useClickOutside(() => setIsOpen(false));
//  <el ref={menuRef} >something</>
