import React from "react";
import {renderToString} from 'react-dom/server'
import Routes from "../Routes";
import {StaticRouter} from 'react-router-dom'
import {renderRoutes} from "react-router-config";
import {Provider} from "react-redux";
import serialize from 'serialize'
export default (req, store) => {

    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                {renderRoutes(Routes)}
            </StaticRouter>
        </Provider>)

    return `
<html>
<head>
<title>COD Panel</title>
<link rel="stylesheet" href="main.css">
</head>
<body style="background-image: linear-gradient(#d7e4ed, #e4e8f1);">
<div id="root">${content}</div>
<script>
window.INITIAL_STATE=${JSON.stringify(store.getState())}
</script>
<script src="bundle.js"></script>
</body>
</html>`
}
