
import express from "express";

export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;

    res.json({
        answer
    })
});

// for tests we dont need to expose any resource of system , jest itself figureout how to hit the end points and for starting server we have bin.ts (binary) where we mention about port exposition

// without exposing any end oint run npm run test here we simulate server with ssuperset library by udersstanding thr routing structure

// we can use axios when we expose any port but we dont know where test will run wether be it git github so we  use superset library and exporting app variable from index so supertest can aceess and run test

// we dont expose port in index ocz if test once start in on eterminal it doesnt allow another instance of test run in another terminal as port has been occupied by the initial one so we move port logic to another file