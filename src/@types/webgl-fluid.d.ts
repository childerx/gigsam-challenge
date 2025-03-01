// webgl-fluid.d.ts
declare module 'webgl-fluid' {
    export interface FluidConfig {
      SIM_RES?: number;
      DYE_RES?: number;
      DENSITY_DISSIPATION?: number;
      VELOCITY_DISSIPATION?: number;
      PRESSURE?: number;
      CURL?: number;
      SPLAT_RADIUS?: number;
      SPLAT_FORCE?: number;
      AUTO_COLOR?: boolean;
      RANDOM_BLOBS?: boolean;
    }
  
    export interface FluidSimulation {
      destroy: () => void;
      // You can add other methods like `resize` if supported by the library.
    }
  
    export function createFluidSimulation(
      canvas: HTMLCanvasElement,
      config?: FluidConfig
    ): FluidSimulation;
  
    const _default: {
      createFluidSimulation: typeof createFluidSimulation;
    };
  
    export default _default;
  }
  