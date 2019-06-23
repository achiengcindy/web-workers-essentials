const worker = new Worker("../src/worker.js");

worker.onmessage = e => {
    const message = e.data;
    console.log(`[From Worker]: ${message}`);

    const reply = setTimeout(() => worker.postMessage("Marco!"), 3000);
};

// send message to worker.js

worker.postMessage("Marco!");