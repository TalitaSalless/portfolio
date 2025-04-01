import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedName() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Desenvolvedora Front-end"],  
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return <span ref={el}></span>;
}
