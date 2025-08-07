/**
 * encantar2 - Next-generation GPU-accelerated Augmented Reality framework
 *
 * Main entry point for the encantar2 library
 */

// Import math utilities
import { MathModule, Vec2, Vec3 } from './math/index.js';

export class Encantar2 {
    private initialized: boolean = false;
    public readonly math = MathModule;

    constructor() {
        console.log('encantar2 initialized');
        console.log('Math module loaded:', this.math.description);
    }

    /**
     * Initialize the AR framework
     */
    async init(): Promise<void> {
        if (this.initialized) {
            console.warn('encantar2 already initialized');
            return;
        }

        // TODO: Implement initialization logic
        this.initialized = true;
        console.log('encantar2 ready');
    }

    /**
     * Check if the framework is initialized
     */
    isInitialized(): boolean {
        return this.initialized;
    }
}

// Export math utilities
export { Vec2, Vec3 };

// Default export
export default Encantar2;
