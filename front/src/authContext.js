import { createContext } from "react";

const authContext = createContext(
    {
        authenticated: false,
        user: null,
    }
);

export default authContext;