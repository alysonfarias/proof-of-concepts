import Point from './point'

export default class PointFactory {
    newCartesianPoint(x, y) {
        return new Point(x, y);
    }

    static newPolarPoint(rho, theta) {
        return Point.newPolarPoint(rho, theta);
    }
}