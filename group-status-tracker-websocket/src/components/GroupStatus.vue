<template>
  <div class="group-status">
    Group Status: <span :class="getStatusClass()">{{ groupStatus }}</span>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const groupStatus = ref('');

    onMounted(() => {
      const socket = new WebSocket('ws://localhost:3001'); // Same port as your backend
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === 'groupStatusUpdate') {
          groupStatus.value = data.data;
        }
      };
    });

    const getStatusClass = () => {
      return {
        PENDING_REGISTRATION: 'pending',
        PENDING_UPDATED: 'pending',
        PENDING_DELETION: 'pending',
        REGISTERED: 'registered',
        DELETED: 'deleted'
      }[groupStatus.value] || '';
    };

    return { groupStatus, getStatusClass };
  },
};
</script>