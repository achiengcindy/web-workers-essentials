const worker = new Worker("../src/worker.js");

worker.onmessage = e => {
    const message = e.data;
    console.log(`[From Worker]: ${message}`);
};

// send message to worker.js

worker.postMessage("Marco!");