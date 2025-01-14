import { SplatData } from "./SplatData";
import { Object3D } from "../core/Object3D";
declare class Splat extends Object3D {
    selectedChanged: boolean;
    private _data;
    private _selected;
    constructor(splat?: SplatData | undefined);
    saveToFile(name?: string | null, format?: string | null): void;
    get data(): SplatData;
    get selected(): boolean;
    set selected(selected: boolean);
}
export { Splat };
