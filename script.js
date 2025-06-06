<script>
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatBox = document.getElementById('chat-box');

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const message = chatInput.value.trim();
    if (!message) return;

    const msgDiv = document.createElement('div');
    msgDiv.textContent = message;
    msgDiv.classList.add('chat-bubble');

    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    chatInput.value = '';
    chatInput.focus();
  });
</script>
