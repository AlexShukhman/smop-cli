const test = require('../utils/test');

async function parth(args) {
    try {
        const r = args.repo || args.r;
        const e = args.entry_point || args.e;
        const t = args.type || args.t;
        const p = args.parth || args.p;

        await test(r,e,t,p);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = parth;