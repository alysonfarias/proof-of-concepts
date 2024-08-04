import Point from './point';
import PointFactory from './pointFactory';
describe("PointFactory Class", () => {
    test("newCartesianPoint creates point with correct coordinates", () => {
        const factory = new PointFactory();
        const p = factory.newCartesianPoint(-2, 8);
        expect(p.x).toBe(-2);
        expect(p.y).toBe(8);
        expect(p).toBeInstanceOf(Point);
    });

    test("newPolarPoint creates point with correct coordinates", () => {
        const p = PointFactory.newPolarPoint(10, Math.PI);
        expect(p.x).toBeCloseTo(-10);
        expect(p.y).toBeCloseTo(0);
        expect(p).toBeInstanceOf(Point);
    });
});
