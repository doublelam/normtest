import * as HTTP from "http";
import { config } from "./config";
// import * as querystring from "querystring";
// import * as bodyParser from "body-parser";
import { URL } from "url";
export type Handler = (req: HTTP.IncomingMessage, res: HTTP.ServerResponse) => any;

const handleMatches = ((matches: Record<string, Handler>) => {
    const matchesMap = new Map<string, { method: string; handler: Handler }>();
    const keys = Object.keys(matches);
    keys.forEach((key) => {
        const handler = matches[key];
        const [method, route] = key.split("::");
        matchesMap.set(key, {
            method,
            handler,
        });
    });
    return matchesMap;
})(config.matches);

HTTP.createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, Accept");
    res.setHeader("Content-Type", "application/json;charset=UTF-8");
    if (req.method.toLowerCase() === "options") {
        res.statusCode = 200;
        res.end("success");
        return;
    }
    const { url, method } = req;
    const { pathname } = new URL(`http://${req.headers.host}${url}`);
    const sym = `${method.toLowerCase()}::${pathname}`;
    if (handleMatches.has(sym)) {
        const match = handleMatches.get(sym);
        match.handler(req, res);
        return;
    }
    const httpRequest = HTTP.request({
        host: "http://gold.leo.poppen2.lab",
        path: url,
        method,
        headers: {
            "Content-Type": req.headers["content-type"] || "application/json;charset=UTF-8",
            "Cookie": req.headers.cookie || "",
            "Accept-Language": req.headers["accept-language"] || "en",
            "Accept": req.headers.accept || "application/json",
            "User-Agent": req.headers["user-agent"],
            // "Accept-Encoding": req.headers["accept-encoding"],
            "Host": "gold.leo.poppen2.lab",
            "Origin": "http://gold.leo.poppen2.lab",
            "Connection": req.headers.connection,
            "Referer": req.headers.referer || "http://gold.leo.poppen2.lab",
            "Content-Length": req.headers["content-length"] || 0,
        },
    }, (resp) => {
        let c = "";
        resp.on("data", (chunk) => c = c + chunk);
        resp.on("end", () => {
            res.statusCode = resp.statusCode;
            res.statusMessage = resp.statusMessage;
            res.end(c);
        });
    }).on("error", e => {
        console.error(e);
        res.statusCode = 500;
        res.end();
    });
    if (method === "get") { return; }
    let rq = "";
    req.on("data", (chunk) => rq = rq + chunk);
    req.on("end", () => {
        httpRequest.write(rq);
        httpRequest.end();
    });
}).listen(config.port);
