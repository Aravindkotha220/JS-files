// Button selection logic
document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const siblings = this.parentElement.querySelectorAll('.option-btn');
      siblings.forEach(sib => sib.classList.remove('selected'));
      this.classList.add('selected');
    });
  });
  
  // Inspire me function (simple idea generator)
  function inspireText() {
    const ideas = [
      "What do you hope to achieve in a year?",
      "Write about your current self – hopes, fears, dreams.",
      "Remind your future self how strong you are.",
      "Describe a perfect day today – so they remember.",
      "What advice do you have for the future you?"
    ];
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    const textArea = document.getElementById("letterArea");
    textArea.value = randomIdea + "\n\n" + textArea.value;
  }
  
  document.querySelector('a[href*="Invite"]').addEventListener("click", function (e) {
    e.preventDefault();
    alert("Invite a friend functionality is coming soon!");
  });

  document.addEventListener("DOMContentLoaded", function () {
    const invite = document.querySelector('.fm-list1 span:nth-child(5)');
    if (invite) {
      invite.addEventListener('click', () => {
        alert("Invite a friend feature coming soon!");
      });
    }
  });
  