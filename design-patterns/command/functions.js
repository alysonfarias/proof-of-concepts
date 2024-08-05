import Command from "./command";

export function PlaceOrderCommand(order, id) {
    return new Command((orders) => {
        orders.push(id);
        return `You have successfully ordered ${order} (${id})`;
    });
}

export function CancelOrderCommand(id) {
    return new Command((orders) => {
        orders = orders.filter((order) => order.id !== id);
        return `You have canceled your order ${id}`;
    });
}

export function TrackOrderCommand(id) {
    return new Command(() => `Your order ${id} will arrive in 20 minutes.`);
}