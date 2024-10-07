
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
