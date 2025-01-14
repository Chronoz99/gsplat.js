import { ShaderProgram } from "./ShaderProgram";
import { ShaderPass } from "../passes/ShaderPass";
import { RenderData } from "../utils/RenderData";
import { Color32 } from "../../../math/Color32";
import { WebGLRenderer } from "../../WebGLRenderer";
declare class RenderProgram extends ShaderProgram {
    private _outlineThickness;
    private _outlineColor;
    private _renderData;
    private _depthIndex;
    private _chunks;
    private _splatTexture;
    protected _initialize: () => void;
    protected _resize: () => void;
    protected _render: () => void;
    protected _dispose: () => void;
    private _setOutlineThickness;
    private _setOutlineColor;
    constructor(renderer: WebGLRenderer, passes: ShaderPass[]);
    get renderData(): RenderData | null;
    get depthIndex(): Uint32Array;
    get chunks(): Uint8Array | null;
    get splatTexture(): WebGLTexture | null;
    get outlineThickness(): number;
    set outlineThickness(value: number);
    get outlineColor(): Color32;
    set outlineColor(value: Color32);
    protected _getVertexSource(): string;
    protected _getFragmentSource(): string;
}
export { RenderProgram };
