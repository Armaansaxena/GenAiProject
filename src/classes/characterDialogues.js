export const characterDialogues = {
  socrates: {
    responses: {
      greeting: [
        "Hello! How are you feeling today?",
        "Welcome. What would you like to discuss?",
      ],
      feelings: [
        "Okay Tell me About your feelings."
      ],
      good: [
        "That's encouraging. What recent experience made you feel this way?",
        "Joy is a sign of harmony. Can you share more about your happiness?",
      ],
      bad: [
        "I’m sorry to hear that. What troubles your mind today?",
        "Let us explore what brings you this sorrow. Please tell me more.",
      ],
      stressed: [
        // "Stress challenges the balance of the soul. What weighs heavy upon you?",
        "How do you find relief or calm when stress arises?",
      ],
      anxious: [
        "Anxieties are whispers of the unknown. What fears occupy your thoughts?",
        "Does your body tell you things your mind does not when anxiety visits?",
      ],
      sad: [
        "Sadness often reveals deeper truths. How long have these feelings stayed with you?",
        "What might help to lighten the burdens you carry?",
      ],
      angry: [
        "Anger can be a voice for justice. What injustice feels present in your life?",
        "How do you usually express or release this anger?",
      ],
      favourite: [
        "Oh! Nice What do you like to do "
      ],
      hangout: [
        "So you Hangout with your close Friends right. Then After that You feel relief and Calm"
      ],
      play: [
        "Okay So you like to play Games. Like Which type of Games Video games or Play outdoor games"
      ],
      coping: [
        "What methods have you tried in pursuit of peace?",
        "Are there people or practices that restore your calm?",
      ],
      support: [
        "Wisdom grows from seeking help. Who do you trust for support?",
        "Have you contemplated guidance beyond this dialogue, like therapy?",
      ],
      yes: [
        "From your reflections, it appears you are encountering your stress in a right way.",
        // "Your thoughts reveal [brief analysis], a common path in the journey towards clarity.",
      ],
      default: [
        "Pray, tell me more about this.",
        "How does this affect the harmony of your soul?",
        "What meaning does this hold for you?",
      ],
    },

    // Suggested conversational transitions (to be implemented in your app logic)
    transitions: {
      greeting: ["feeling good", "feeling bad", "stressed", "anxious", "sad", "angry"],
      good: ["coping"],
      bad: ["coping"],
      stressed: ["coping"],
      anxious: ["coping"],
      sad: ["coping"],
      angry: ["coping"],
      coping: ["support"],
      support: ["summary"],
      summary: [],  // conversation can end or restart from greeting
      default: [],  // fallback or loop prompts
    },
  },
};

/*
Usage notes:
- Start with greeting prompts.
- Based on user input, select one of the emotion categories.
- Follow with coping prompts.
- Then ask support prompts.
- Finally, move to summary prompts.
- Your app should use the 'transitions' map to know which prompt category to move to next.
- For example, after 'support' question and user answer, automatically proceed to 'summary'.
*/
