# Node-strip-pre-indent

Nodejs module for removing document-level indentation for <pre> blocks.

    <html>
        <div>
            <pre>
                ....
            <pre>
        </div>
    </html>

becomes

    <html>
        <div>
    <pre>
        ....
    <pre>
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
                <pre>
            </div>
        </html>
    `;

    let stripped = stripIndent(markup);

## Why?

The official HTML5 spec for <pre> has a critical design failure which treats all whitespace in the <pre> block as formating and will show this in the browser. UYnfortunately, your HTML document's own indentation counts as formating too.

## License

MIT. 