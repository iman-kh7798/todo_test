import React from "react";
import App from "./content";

export default [
    {
        ...App,
        routes:
            [
                {
                    ...App,
                    path:'/',
                    exact:true
                }
            ]
    }
]
