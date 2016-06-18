'use strict';

module.exports = {
    parse: function (src) {
        let date      = undefined;
        let lines     = src.trim().split('\n');
        let lineIndex = 0;

        for (let line of lines) {
            if (line.startsWith('.Dd ')) {
                date = line;
                break;
            }

            ++lineIndex;
        }

        console.log(lineIndex, date);
    }
};
