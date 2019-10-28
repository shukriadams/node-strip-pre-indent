'use strict';

module.exports = function(html){
    let lines = html.split('\n'),
        out = [],
        clip = 0,
        reset = true;

    for (let line of lines){

        // find start start of <pre> block
        if (line.trim().toLowerCase().indexOf('<pre') !== -1)
            clip = line.toLowerCase().indexOf('<pre');

        // find end of <pre> block
        if (clip > 0 && line.indexOf('</pre>') !== -1)
            reset = true;

        if (clip > 0)
            line = line.substring(clip)

        if (reset){
            clip = 0;
            reset = false;
        }

        out.push(line);
    }

    return out.join('\n');
}
