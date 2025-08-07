/**
 * 3D Vector class for encantar2
 * 
 * Represents a 3D vector with x, y, and z components.
 * Provides common vector operations used in 3D computer graphics and AR.
 */

export class Vec3 {
    public x: number;
    public y: number;
    public z: number;

    /**
     * Create a new 3D vector
     * @param x - X component (default: 0)
     * @param y - Y component (default: 0)
     * @param z - Z component (default: 0)
     */
    constructor(x: number = 0, y: number = 0, z: number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
     * Create a copy of this vector
     */
    clone(): Vec3 {
        return new Vec3(this.x, this.y, this.z);
    }

    /**
     * Set the components of this vector
     */
    set(x: number, y: number, z: number): Vec3 {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }

    /**
     * Copy values from another vector
     */
    copy(other: Vec3): Vec3 {
        this.x = other.x;
        this.y = other.y;
        this.z = other.z;
        return this;
    }

    /**
     * Add another vector to this vector
     */
    add(other: Vec3): Vec3 {
        this.x += other.x;
        this.y += other.y;
        this.z += other.z;
        return this;
    }

    /**
     * Subtract another vector from this vector
     */
    subtract(other: Vec3): Vec3 {
        this.x -= other.x;
        this.y -= other.y;
        this.z -= other.z;
        return this;
    }

    /**
     * Multiply this vector by a scalar
     */
    multiply(scalar: number): Vec3 {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }

    /**
     * Divide this vector by a scalar
     */
    divide(scalar: number): Vec3 {
        if (scalar === 0) {
            throw new Error('Cannot divide by zero');
        }
        this.x /= scalar;
        this.y /= scalar;
        this.z /= scalar;
        return this;
    }

    /**
     * Calculate the length (magnitude) of this vector
     */
    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    /**
     * Calculate the squared length of this vector (faster than length())
     */
    lengthSquared(): number {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }

    /**
     * Normalize this vector (make it unit length)
     */
    normalize(): Vec3 {
        const len = this.length();
        if (len === 0) {
            return this;
        }
        return this.divide(len);
    }

    /**
     * Calculate the dot product with another vector
     */
    dot(other: Vec3): number {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }

    /**
     * Calculate the cross product with another vector
     */
    cross(other: Vec3): Vec3 {
        const x = this.y * other.z - this.z * other.y;
        const y = this.z * other.x - this.x * other.z;
        const z = this.x * other.y - this.y * other.x;
        return new Vec3(x, y, z);
    }

    /**
     * Calculate the distance to another vector
     */
    distanceTo(other: Vec3): number {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const dz = this.z - other.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    /**
     * Check if this vector equals another vector (with optional tolerance)
     */
    equals(other: Vec3, tolerance: number = 0.000001): boolean {
        return Math.abs(this.x - other.x) < tolerance && 
               Math.abs(this.y - other.y) < tolerance &&
               Math.abs(this.z - other.z) < tolerance;
    }

    /**
     * Convert to string representation
     */
    toString(): string {
        return `Vec3(${this.x.toFixed(3)}, ${this.y.toFixed(3)}, ${this.z.toFixed(3)})`;
    }

    /**
     * Convert to array [x, y, z]
     */
    toArray(): [number, number, number] {
        return [this.x, this.y, this.z];
    }

    // Static utility methods

    /**
     * Create a zero vector
     */
    static zero(): Vec3 {
        return new Vec3(0, 0, 0);
    }

    /**
     * Create a unit vector pointing right (positive X)
     */
    static right(): Vec3 {
        return new Vec3(1, 0, 0);
    }

    /**
     * Create a unit vector pointing up (positive Y)
     */
    static up(): Vec3 {
        return new Vec3(0, 1, 0);
    }

    /**
     * Create a unit vector pointing forward (positive Z)
     */
    static forward(): Vec3 {
        return new Vec3(0, 0, 1);
    }

    /**
     * Add two vectors and return a new vector
     */
    static add(a: Vec3, b: Vec3): Vec3 {
        return new Vec3(a.x + b.x, a.y + b.y, a.z + b.z);
    }

    /**
     * Subtract two vectors and return a new vector
     */
    static subtract(a: Vec3, b: Vec3): Vec3 {
        return new Vec3(a.x - b.x, a.y - b.y, a.z - b.z);
    }

    /**
     * Calculate cross product of two vectors and return a new vector
     */
    static cross(a: Vec3, b: Vec3): Vec3 {
        return a.clone().cross(b);
    }

    /**
     * Create a vector from an array [x, y, z]
     */
    static fromArray(arr: [number, number, number]): Vec3 {
        return new Vec3(arr[0], arr[1], arr[2]);
    }
}
