import * as HTTP from "http";
import * as mul from "multiparty";

const sleep = async (duration: number) => new Promise<number>((resolve, reject) => {
    setTimeout(() => resolve(Date.now()), duration);
});

const randomNum = (num: number) => {
    return Math.round(num * Math.random());
};

const randomPick = <T>(list: T[], num: number, sum: T[] = []): T[] => {
    if (num <= 0) { return sum; }
    return randomPick(list, num - 1, sum.concat(list[randomNum(list.length - 1)]));
};

const send = (statusCode: number, data: Record<string, any>, res: HTTP.ServerResponse) => {
    res.statusCode = statusCode;
    res.end(JSON.stringify(data));
};

export const config = {
    port: 3001,
    matches: {
        "get::/api-test": async (req: HTTP.IncomingMessage, res: HTTP.ServerResponse) => {
            send(200, { test: true }, res);
        },
        "post::/api/messenger/p2p/highlight(d)": async (req: HTTP.IncomingMessage, res: HTTP.ServerResponse) => {
            await sleep(1000);
            send(200, { code: 0 }, res);
        },
        "post::/api/messenger/p2p/send/json(d)": async (req: HTTP.IncomingMessage, res: HTTP.ServerResponse) => {
            const form = new mul.Form();
            form.parse(req, async (err, fields, files) => {
                await sleep(500);
                send(200, {
                    code: 0,
                    data: {
                        message_id: `${Math.random()}`.slice(2),
                        group_id: fields.group_id[0],
                        message_type: 0,
                        created_at: 0,
                        additionalProp1: {}
                    }
                }, res);
            });
        },
        "post::/api/messenger/p2p/send/file(d)": async (req: HTTP.IncomingMessage, res: HTTP.ServerResponse) => {
            const form = new mul.Form();
            form.parse(req, async (err, fields, files) => {
                await sleep(1500);
                send(200, {
                    code: 0,
                    data: {
                        message_id: `${Math.random()}`.slice(2),
                        group_id: fields.group_id[0],
                        message_type: 0,
                        created_at: 0,
                        additionalProp1: {}
                    }
                }, res);
            });
        },
        "post::/api/messenger/groups/list(d)": async (req: HTTP.IncomingMessage, res: HTTP.ServerResponse) => {
            const form = new mul.Form();
            form.parse(req, async (err, fields, files) => {
                await sleep(1500);
                send(200, {
                    code: 0,
                    data: {
                        list: new Array(50).fill(0).map((v, i) => (
                            {
                                group_id: `${Math.random()}`,
                                group_type: randomPick([0, 1, 1, 1], 1)[0],
                                group_data: {
                                    nickname: randomPick(["Mike", "John", "William", "Dan", "Trump"], 2).join(" ") + `_(${i})`,
                                    gender: randomPick(["m", "w", "ts", "tv"], 1),
                                    age: randomPick([20, 30, 40, 50], 1),
                                    payclass: randomPick(["normal", "vip", "premium"], 1).join(""),
                                    uid: Math.random(),
                                    avatar: "https://loremflickr.com/240/240?random=1",
                                    title: "Group title" + i,
                                    users: [
                                        {
                                            nickname: randomPick(["Mike", "John", "William", "Dan", "Trump"], 2).join(" ") + `_(${i})`,
                                            gender: randomPick(["m", "w", "ts", "tv"], 1),
                                            age: randomPick([20, 30, 40, 50], 1),
                                            payclass: randomPick(["normal", "vip", "premium"], 1).join(""),
                                            uid: Math.random(),
                                        },
                                        {
                                            nickname: randomPick(["Mike", "John", "William", "Dan", "Trump"], 2).join(" ") + `_(${i})`,
                                            gender: randomPick(["m", "w", "ts", "tv"], 1),
                                            age: randomPick([20, 30, 40, 50], 1),
                                            payclass: randomPick(["normal", "vip", "premium"], 1).join(""),
                                            uid: Math.random(),
                                        },
                                    ],
                                },
                                unread_count: randomNum(10),
                                highlight: randomPick([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2], 1)[0],
                                pin: 0,
                                mine_status: 0,
                                peer_status: randomNum(4),
                                last_updated: new Date(Date.now() - Number(randomNum(24)) * 60 * 60 * 1000).getTime(),
                                rate: 0,
                                last_message: {
                                    message_type: randomPick([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 5, 4], 1)[0],
                                    message_data: { content: randomPick("abcdefghijklmnopqrst".split(""), randomNum(10) + 1).join("") },
                                    created_at: new Date(Date.now() - Number(randomNum(24)) * 60 * 60 * 1000).getTime(),
                                },
                                additionalProp1: {}
                            }
                        )),
                        next: 0
                    }
                }, res);
            });
        },
        "post::/api/messenger/messages/list(d)": async (req: HTTP.IncomingMessage, res: HTTP.ServerResponse) => {
            const form = new mul.Form();
            let chunks = "";
            req.on("data", (chunk) => chunks = chunks + chunk);
            req.on("end", async () => {
                const reqBody = JSON.parse(chunks);
                console.log("___", reqBody);
                await sleep(1500);
                send(200, {
                    code: 0,
                    data: {
                        list: new Array(50).fill(0).map((v, i) => (
                            {
                                author: { uid: randomPick([`${Math.random()}`, "5000441"], 1)[0] },
                                nickname: randomPick(["Jon", "Tet", "mOCK"], 1)[0],
                                group_id: reqBody.group_id,
                                message_id: `${Math.random()}`,
                                message_type: randomPick([0, 0, 0, 0, 3], 1)[0],
                                created_at: new Date(Date.now() - Number(randomNum(24)) * 60 * 60 * 1000).getTime(),
                                message_data: {
                                    content: randomPick("John,or,and,with,not,good,\n,bad,mike,\n,run,pick,goes,watch".split(","), randomNum(50) + 1).join(" "),
                                    blob_url: `https://picsum.photos/100?r=${Math.random()}`,
                                    blob_obj: { type: "image/jpg", name: "test" },
                                    preview: `https://picsum.photos/100?r=${Math.random()}`,
                                },
                            }
                        )).sort((a, b) => a.created_at - b.created_at),
                        peer_last_read: new Date(Date.now() - Number(randomNum(24)) * 60 * 60 * 1000).getTime(),
                    },
                }, res);
            });
        },
        "post::/api/messenger/p2p/highlight/check(d)": async (req: HTTP.IncomingMessage, res: HTTP.ServerResponse) => {
            await sleep(500);
            send(200, {
                code: 0,
                data: {
                    status: randomPick([0, 1, 2], 1)[0],
                    points: randomPick([100, 200, 300, 150], 1)[0],
                },
            }, res);
        },
        "post::/api/messenger/group/create": async (req: HTTP.IncomingMessage, res: HTTP.ServerResponse) => {
            send(200, {
                code: 0,
                data: {
                    group_id: `${Math.random()}`,
                    group_type: 0,
                    group_data: {
                        nickname: randomPick(["Mike", "John", "William", "Dan", "Trump"], 2).join(" "),
                        gender: randomPick(["m", "w", "ts", "tv"], 1),
                        age: randomPick([20, 30, 40, 50], 1),
                        payclass: randomPick(["normal", "vip", "premium"], 1).join(""),
                        uid: Math.random(),
                        avatar: "https://loremflickr.com/240/240?random=1",
                        title: "New created group" + Date.now(),
                        users: [
                            {
                                nickname: randomPick(["Mike", "John", "William", "Dan", "Trump"], 2).join(" "),
                                gender: randomPick(["m", "w", "ts", "tv"], 1),
                                age: randomPick([20, 30, 40, 50], 1),
                                payclass: randomPick(["normal", "vip", "premium"], 1).join(""),
                                uid: Math.random(),
                            },
                            {
                                nickname: randomPick(["Mike", "John", "William", "Dan", "Trump"], 2).join(" "),
                                gender: randomPick(["m", "w", "ts", "tv"], 1),
                                age: randomPick([20, 30, 40, 50], 1),
                                payclass: randomPick(["normal", "vip", "premium"], 1).join(""),
                                uid: Math.random(),
                            },
                        ],
                    },
                    unread_count: 0,
                    highlight: 0,
                    pin: 0,
                    mine_status: 0,
                    peer_status: 0,
                    last_updated: Date.now(),
                    rate: 0,
                    additionalProp1: {}
                }
            }, res);
        },
    },
};
