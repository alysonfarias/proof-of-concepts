<template>
    <div>
      <h2>Group Status Tracker</h2>
      <WebSocket :url="websocketUrl" @message="handleWebSocketMessage" />
      <ul>
        <li v-for="group in groups" :key="group.id">
          {{ group.name }} - 
          <span :class="getStatusClass(group.status)">{{ group.status }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { WebSocket } from 'vue-websocket';
  
  export default {
    components: {
      WebSocket,
    },
    data() {
      return {
        groups: [],
        websocketUrl: 'ws://localhost:8080/',
      };
    },
    methods: {
      getStatusClass(status) {
        return {
          PENDING_REGISTRATION: 'pending',
          PENDING_UPDATED: 'pending',
          PENDING_DELETION: 'pending',
          REGISTERED: 'registered',
          DELETED: 'deleted',
        }[status] || '';
      },
      handleWebSocketMessage(message) {
        const updatedGroup = JSON.parse(message);
        const index = this.groups.findIndex(g => g.id === updatedGroup.id);
        if (index !== -1) {
          this.groups.splice(index, 1, updatedGroup);
        } else {
          this.groups.push(updatedGroup);
        }
      },
    },
    mounted() {
    // this.$options.sockets.groupStatusUpdate = (data) => {
    //   const initialGroups = JSON.parse(data);
    //   this.groups = initialGroups;
    //   console.log('Initial group data received:', this.groups);
    // };

    // Directly access the WebSocket instance to listen for events
    this.$refs.websocket.$socket.onopen = () => {
      console.log('WebSocket connection opened successfully');
    };

    this.$refs.websocket.$socket.onerror = (error) => {
      console.error('WebSocket error:', error);
      // Handle the error appropriately
    };
  },
  };
  </script>
  
  <style>
  /* Basic styling for status classes */
  .pending { color: orange; }
  .registered { color: green; }
  .deleted { color: red; }
  </style>
  