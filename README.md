# Node-strip-pre-indent

Nodejs module for removing document-level indentation for &#x3C;pre&#x3E; blocks.

    <html>
        <div>
            <pre>
                ....
            </pre>
        </div>
    </html>

becomes

    <html>
        <div>
    <pre>
        ....
    </pre>
        </div>
    </html>

## Install

    npm install strip-indent

## Use

    const stripIndent = require('strip-pre-indent');
    
    let markup = `
        <html>
            <div>
                <pre>
                    ....
                </pre>
            </div>
        </html>
    `;

    let stripped = stripIndent(markup);

## Why?

The official HTML5 spec for &#x3C;pre&#x3E; has a critical design failure which treats all whitespace in the &#x3C;pre&#x3E; block as formating and will show this in the browser. Unfortunately, your HTML document's own indentation counts as formating too.

## License

MIT. 
