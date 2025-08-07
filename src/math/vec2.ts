/**
 * 2D Vector class for encantar2
 * 
 * Represents a 2D vector with x and y components.
 * Provides common vector operations used in computer graphics.
 */

export class Vec2 {
    public x: number;
    public y: number;

    /**
     * Create a new 2D vector
     * @param x - X component (default: 0)
     * @param y - Y component (default: 0)
     */
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    /**
     * Create a copy of this vector
     */
    clone(): Vec2 {
        return new Vec2(this.x, this.y);
    }

    /**
     * Set the components of this vector
     */
    set(x: number, y: number): Vec2 {
        this.x = x;
        this.y = y;
        return this;
    }

    /**
     * Copy values from another vector
     */
    copy(other: Vec2): Vec2 {
        this.x = other.x;
        this.y = other.y;
        return this;
    }

    /**
     * Add another vector to this vector
     */
    add(other: Vec2): Vec2 {
        this.x += other.x;
        this.y += other.y;
        return this;
    }

    /**
     * Subtract another vector from this vector
     */
    subtract(other: Vec2): Vec2 {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    }

    /**
     * Multiply this vector by a scalar
     */
    multiply(scalar: number): Vec2 {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    /**
     * Divide this vector by a scalar
     */
    divide(scalar: number): Vec2 {
        if (scalar === 0) {
            throw new Error('Cannot divide by zero');
        }
        this.x /= scalar;
        this.y /= scalar;
        return this;
    }

    /**
     * Calculate the length (magnitude) of this vector
     */
    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * Calculate the squared length of this vector (faster than length())
     */
    lengthSquared(): number {
        return this.x * this.x + this.y * this.y;
    }

    /**
     * Normalize this vector (make it unit length)
     */
    normalize(): Vec2 {
        const len = this.length();
        if (len === 0) {
            return this;
        }
        return this.divide(len);
    }

    /**
     * Calculate the dot product with another vector
     */
    dot(other: Vec2): number {
        return this.x * other.x + this.y * other.y;
    }

    /**
     * Calculate the distance to another vector
     */
    distanceTo(other: Vec2): number {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * Check if this vector equals another vector (with optional tolerance)
     */
    equals(other: Vec2, tolerance: number = 0.000001): boolean {
        return Math.abs(this.x - other.x) < tolerance && 
               Math.abs(this.y - other.y) < tolerance;
    }

    /**
     * Convert to string representation
     */
    toString(): string {
        return `Vec2(${this.x.toFixed(3)}, ${this.y.toFixed(3)})`;
    }

    /**
     * Convert to array [x, y]
     */
    toArray(): [number, number] {
        return [this.x, this.y];
    }

    // Static utility methods

    /**
     * Create a zero vector
     */
    static zero(): Vec2 {
        return new Vec2(0, 0);
    }

    /**
     * Create a unit vector pointing right
     */
    static right(): Vec2 {
        return new Vec2(1, 0);
    }

    /**
     * Create a unit vector pointing up
     */
    static up(): Vec2 {
        return new Vec2(0, 1);
    }

    /**
     * Add two vectors and return a new vector
     */
    static add(a: Vec2, b: Vec2): Vec2 {
        return new Vec2(a.x + b.x, a.y + b.y);
    }

    /**
     * Subtract two vectors and return a new vector
     */
    static subtract(a: Vec2, b: Vec2): Vec2 {
        return new Vec2(a.x - b.x, a.y - b.y);
    }

    /**
     * Create a vector from an array [x, y]
     */
    static fromArray(arr: [number, number]): Vec2 {
        return new Vec2(arr[0], arr[1]);
    }
}
