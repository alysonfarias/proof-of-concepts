import OrderManager from './orderManager'
import Command from './command'
import { PlaceOrderCommand, CancelOrderCommand, TrackOrderCommand } from './functions';
describe("OrderManager", () => {
    let manager;

    beforeEach(() => {
        manager = new OrderManager();
    });

    it("should place an order successfully", () => {
        const command = PlaceOrderCommand("Pizza", 123);
        const result = manager.execute(command);

        expect(result).toBe("You have successfully ordered Pizza (123)");
        expect(manager.orders).toEqual([123]);
    });

    it("should cancel an order successfully", () => {
        manager.orders = [123, 456]; // Simulate existing orders
        const command = CancelOrderCommand(123);
        const result = manager.execute(command);

        expect(result).toBe("You have canceled your order 123");
        expect(manager.orders).toEqual([456]);
    });

    it("should provide tracking information", () => {
        const command = TrackOrderCommand(789);
        const result = manager.execute(command);

        expect(result).toBe("Your order 789 will arrive in 20 minutes.");
        expect(manager.orders).toEqual([]); // Tracking doesn't modify orders
    });
});

describe("Command", () => {
    it("should construct a command object with the correct execute function", () => {
        const mockExecute = () => { };
        const command = new Command(mockExecute);

        expect(command.execute).toBe(mockExecute);
    });
});

describe("PlaceOrderCommand", () => {
    it("should return a Command object with the correct execute function", () => {
        const command = PlaceOrderCommand("Salad", 555);
        const mockOrders = [];
        const result = command.execute(mockOrders);

        expect(mockOrders).toEqual([555]); // Check that the order was added
        expect(result).toBe("You have successfully ordered Salad (555)");
    });
});

describe("CancelOrderCommand", () => {
    it("should return a Command object with the correct execute function", () => {
        const command = CancelOrderCommand(123);
        const mockOrders = [123, 456];
        const result = command.execute(mockOrders);

        expect(mockOrders).toEqual([456]); // Check that the order was removed
        expect(result).toBe("You have canceled your order 123");
    });
});
