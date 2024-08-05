// Test file (e.g., chatroom.test.js)
import ChatRoom from './chatRoom'
import User from './user'
describe("ChatRoom and User", () => {
    let chatroom, user1, user2;

    beforeEach(() => {
        // Create a fresh chatroom for each test
        chatroom = new ChatRoom();
        user1 = new User("Alice", chatroom);
        user2 = new User("Bob", chatroom);
    });

    it("should log messages with the correct format", () => {
        // Mock or spy on the console.log function to capture output
        const consoleSpy = jest.spyOn(console, "log");

        const testMessage = "Hello everyone!";
        user1.send(testMessage);

        // Ensure the date format matches expectations
        const expectedLogPrefix = expect.stringMatching(
            /^\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2}:\d{2} \[Alice\]: Hello everyone!$/
        );
        expect(consoleSpy).toHaveBeenCalledWith(expectedLogPrefix);

        consoleSpy.mockRestore(); // Restore the original console.log
    });

    it("should correctly identify the sender", () => {
        const consoleSpy = jest.spyOn(console, "log");

        user2.send("Hi Alice!");
        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining(" [Bob]: Hi Alice!")
        );

        consoleSpy.mockRestore();
    });

    it("should handle multiple users and messages", () => {
        const consoleSpy = jest.spyOn(console, "log");

        user1.send("Good morning!");
        user2.send("How's it going?");
        user1.send("Not bad, thanks!");

        expect(consoleSpy).toHaveBeenCalledTimes(3);

        consoleSpy.mockRestore();
    });
});
