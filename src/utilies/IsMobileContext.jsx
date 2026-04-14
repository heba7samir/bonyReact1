import { createContext, useEffect, useState } from "react";

export const IsMobileContext = createContext();

export function IsMobileProvider({ children }) {
    const [ismobile, setismobile] = useState(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        // set أول قيمة
        setismobile(mediaQuery.matches);

        const checkmobile = (e) => {
            setismobile(e.matches);
        };

        mediaQuery.addEventListener("change", checkmobile);

        return () => {
            mediaQuery.removeEventListener("change", checkmobile);
        };
    }, []);

    return (
        <IsMobileContext.Provider value={{ ismobile }}>
            {children}
        </IsMobileContext.Provider>
    );
}