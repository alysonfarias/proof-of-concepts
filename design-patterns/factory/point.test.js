import Point from './point';
import PointFactory from './pointFactory';
describe("Point Class", () => {
    test("newCartesianPoint creates point with correct coordinates (static method)", () => {
        const p = Point.newCartesianPoint(4, -1);
        expect(p.x).toBe(4);
        expect(p.y).toBe(-1);
        expect(p).toBeInstanceOf(Point);
    });

    test("newPolarPoint creates point with correct coordinates (static method)", () => {
        const p = Point.newPolarPoint(5, Math.PI / 6);
        expect(p.x).toBeCloseTo(5 * Math.sqrt(3) / 2);
        expect(p.y).toBeCloseTo(2.5);
        expect(p).toBeInstanceOf(Point);
    });

    test("Point factory returns a PointFactory instance", () => {
        const factory = Point.factory;
        expect(factory).toBeInstanceOf(PointFactory);
    });

    test("Error handling: Invalid input for polar coordinates (negative rho)", () => {
        expect(() => Point.newPolarPoint(-5, Math.PI / 2)).toThrowError(RangeError);
    });

    test("Error handling: Invalid input for polar coordinates (negative rho)", () => {
        expect(() => Point.newPolarPoint(-5, Math.PI / 2)).toThrowError(RangeError);
    });

});
