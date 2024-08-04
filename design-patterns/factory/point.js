import PointFactory from './pointFactory'

export default class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static newCartesianPoint(x, y) {
        return new Point(x, y);
    }

    static newPolarPoint(rho, theta) {
        if (rho < 0) {
            throw new RangeError("Rho (radius) value must be non-negative.");
        }

        while (theta < 0) {
            theta += 2 * Math.PI;
        }
        while (theta >= 2 * Math.PI) {
            theta -= 2 * Math.PI;
        }

        const x = rho * Math.cos(theta);
        const y = rho * Math.sin(theta);

        return new Point(x, y); // Remove the xSign and ySign adjustments
    }


    static get factory() {
        return new PointFactory();
    }
}