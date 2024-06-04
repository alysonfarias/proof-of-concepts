const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public')); // Serve static files

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('voiceInput', (data) => {
        // Speech-to-text processing here (e.g., using a library)
        const recognizedText = processVoiceInput(data);

        // Perform actions based on recognizedText
        const assistantResponse = handleCommand(recognizedText);

        socket.emit('assistantResponse', assistantResponse);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});


function processVoiceInput(transcript) {
    return transcript.toLowerCase(); // Basic processing (lowercase)
    // You can add more sophisticated NLU here
}

function handleCommand(command) {
    if (command.includes('hello')) {
        return 'Hello there!';
    } else if (command.includes('time')) {
        const now = new Date();
        return `The current time is ${now.toLocaleTimeString()}`;
    } // Add more command handling logic
    else {
        return "I didn't understand that. Could you please try again?";
    }
}

http.listen(3000, () => {
    console.log('Listening on port 3000');
});
