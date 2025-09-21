import { characterDialogues } from './characterDialogues';

export default class SimpleDialogueManager {
    constructor(scene) {
        this.scene = scene;
        this.dialogueBox = null;
        this.activePhilosopher = null;
        this.isStreaming = false;
        this.playerInput = '';
        this.isAwaitingInput = false;
        this.escKey = scene.input.keyboard.addKey('ESC');
    }

    initialize(dialogueBox) {
        this.dialogueBox = dialogueBox;
    }

    startDialogue(philosopher) {
        this.activePhilosopher = philosopher;
        this.playerInput = '';
        this.isAwaitingInput = true;
        this.dialogueBox.show("Welcome. What would you like to discuss?");
    }

    handleKeyPress(event) {
        if (event.key === 'Escape') {
            this.closeDialogue();
            return;
        }

        if (event.key === 'Enter' && this.playerInput.trim() !== '') {
            this.processPlayerInput();
        } else if (event.key === 'Backspace') {
            this.playerInput = this.playerInput.slice(0, -1);
            this.updateInputDisplay();
        } else if (event.key.length === 1) {
            this.playerInput += event.key;
            this.updateInputDisplay();
        }
    }

    processPlayerInput() {
        const input = this.playerInput.toLowerCase();
        const responses = characterDialogues[this.activePhilosopher.id].responses;
        
        // Find matching response based on keywords
        let response = responses.default[Math.floor(Math.random() * responses.default.length)];
        
        for (const [keyword, possibleResponses] of Object.entries(responses)) {
            if (input.includes(keyword)) {
                response = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
                break;
            }
        }

        // Show the conversation
        this.dialogueBox.show(`You: ${this.playerInput}\n\n${this.activePhilosopher.name}: ${response}`);
        
        // Reset for next input
        this.playerInput = '';
        this.isAwaitingInput = true;
    }

    continueDialogue() {
        if (!this.isInDialogue()) return;
        
        // If we're waiting for input, show the input prompt
        if (this.isAwaitingInput) {
            this.updateInputDisplay();
        } else {
            // If not waiting for input, start a new dialogue prompt
            this.playerInput = '';
            this.isAwaitingInput = true;
            this.dialogueBox.show("What would you like to tell me?");
        }
    }

    updateInputDisplay() {
        if (this.isAwaitingInput) {
            this.dialogueBox.show(`${this.dialogueBox.text.text.split('\n\n')[0]}\n\n> ${this.playerInput}`);
        }
    }

    closeDialogue() {
        this.dialogueBox.hide();
        this.activePhilosopher = null;
        this.playerInput = '';
        this.isAwaitingInput = false;
    }

    isInDialogue() {
        return this.dialogueBox && this.dialogueBox.isVisible();
    }
}