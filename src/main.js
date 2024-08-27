import { initializeHero } from './hero.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeHero();

    const startBtn = document.getElementById('start-btn') as HTMLButtonElement;
    const stopBtn = document.getElementById('stop-btn') as HTMLButtonElement;
    const chatDiv = document.getElementById('chat') as HTMLDivElement;

    let isListening = false;
    let socket: WebSocket | null = null;

    const connect = () => {
        socket = new WebSocket('wss://evi-typescript-example-m2z3.vercel.app/ws/ws');

        socket.onopen = () => {
            console.log('WebSocket connection opened');
        };

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'transcription') {
                addMessage(`You: ${message.text}`, 'user');
            } else if (message.type === 'bot_response') {
                addMessage(`Bot: ${message.text}`, 'bot', message.emotion);
            }
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
            isListening = false;
            startBtn.disabled = false;
            stopBtn.disabled = true;
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
    };

    const disconnect = () => {
        if (socket) {
            socket.close();
        }
    };

    const addMessage = (text: string, sender: 'user' | 'bot', emotion?: { type: string; percentage: number }) => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}`;
        messageElement.textContent = text;

        if (emotion) {
            const emotionElement = document.createElement('span');
            emotionElement.className = 'emotion';
            emotionElement.textContent = `${emotion.type}: ${emotion.percentage}%`;
            messageElement.appendChild(emotionElement);
        }

        chatDiv.appendChild(messageElement);
        chatDiv.scrollTop = chatDiv.scrollHeight;
    };

    startBtn.addEventListener('click', () => {
        if (!isListening) {
            isListening = true;
            connect();
            startBtn.disabled = true;
            stopBtn.disabled = false;
            addMessage('Listening...', 'system');
        }
    });

    stopBtn.addEventListener('click', () => {
        if (isListening) {
            isListening = false;
            disconnect();
            startBtn.disabled = false;
            stopBtn.disabled = true;
            addMessage('Stopped listening.', 'system');
        }
    });

    // Initialize microphone
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
            const mediaRecorder = new MediaRecorder(stream);
            let audioChunks: Blob[] = [];

            mediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                if (socket && socket.readyState === WebSocket.OPEN) {
                    socket.send(audioBlob);
                }
                audioChunks = [];
            };

            setInterval(() => {
                if (isListening) {
                    mediaRecorder.stop();
                    mediaRecorder.start();
                }
            }, 5000);
        })
        .catch((error) => {
            console.error('Error accessing microphone:', error);
        });
});
