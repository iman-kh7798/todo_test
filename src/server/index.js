import React from "react";
import {renderToString} from 'react-dom/server'
import Content from '../content'
export default ()=>{

    const content = renderToString(<div><Content/></div>)

return `
<html lang="fa">
<head>
<title>COD Panel</title>
<link rel="stylesheet" href="main.css">
</head>
<body>
<div id="root">${content}</div>
<script src="bundle.js"></script>
</body>
</html>`
}
