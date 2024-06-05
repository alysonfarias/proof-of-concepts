<template>
  <div class="chat-container">
    <GroupStatus /> 
    <div v-if="!isConnected">
      <div class="modal-background">
        <div class="modal-content">
          <form @submit.prevent="connectToChat">
            <h3>Enter your name to start chatting</h3>
            <input type="text" v-model="username" placeholder="Enter your name" />
            <button type="submit">Connect</button>
          </form>
        </div>
      </div>
    </div>

    <div v-else class="chat-window">
      <div class="messages-container">
        <div 
          v-for="(message, index) in messages"
          :key="index"
          :class="{ 'left-bubble': message.username === username, 'right-bubble': message.username !== username }"
        >
          <b>{{ message.username }}</b>: <em>{{ message.message }}</em>
        </div>
      </div>
      <div class="chat-input">
        <form @submit.prevent="sendMessage">
          <input type="text" v-model="newMessage" placeholder="Write message..." />
          <button type="submit"><i class="bi bi-send"></i></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import GroupStatus from './GroupStatus.vue';

export default {
  setup() {
    const username = ref('');
    const newMessage = ref('');
    const messages = ref([]);
    const isConnected = ref(false);

    const socket = new WebSocket('ws://localhost:3001');

    socket.onmessage = (event) => {
      messages.value.push(JSON.parse(event.data));
    };

    const connectToChat = () => {
      if (username.value.length > 0) {
        isConnected.value = true;
      }
    };

    const sendMessage = () => {
      if (newMessage.value.trim() === '') return;

      const messageData = { username: username.value, message: newMessage.value };
      socket.send(JSON.stringify(messageData));
      messages.value.push(messageData);
      newMessage.value = '';
    };

    return { username, newMessage, messages, isConnected, connectToChat, sendMessage, GroupStatus };
  },
  components: {
    GroupStatus, // Register the GroupStatus component
  }
};
</script>
