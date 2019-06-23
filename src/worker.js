onmessage = e => {
    const message = e.data;
    console.log(`[From Main]: ${message}`);

    // Sending a message from worker thread to main thread

    postMessage("Polo!");
};