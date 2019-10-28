const stripIndent = require('strip-pre-indent');
    
let markup = `
    <html>
        <div>
            <pre>
                ....
            <pre>
        </div>
    </html>
`;

let stripped = stripIndent(markup);

console.log(stripped);