/*eslint-env node*/

const globalObjects = [
  'Array',
  'ArrayBuffer',
  'BigInt64Array',
  'BigUint64Array',
  'DataView',
  'Float32Array',
  'Float64Array',
  'Int16Array',
  'Int32Array',
  'Int8Array',
  'Uint16Array',
  'Uint32Array',
  'Uint8Array',
  'Map',
  'Set',
  'TypedArray',
];

const gpuDict = [
  'GPUBindGroupDescriptor',
  'GPUBindGroupEntry',
  'GPUBindGroupLayoutDescriptor',
  'GPUBindGroupLayoutEntry',
  'GPUBlendComponent',
  'GPUBlendState',
  'GPUBufferBinding',
  'GPUBufferBindingLayout',
  'GPUBufferDescriptor',
  'GPUCanvasConfiguration',
  'GPUColorDict',
  'GPUColorTargetState',
  'GPUCommandBufferDescriptor',
  'GPUCommandEncoderDescriptor',
  'GPUComputePassDescriptor',
  'GPUComputePassTimestampWrite',
  'GPUComputePipelineDescriptor',
  'GPUDepthStencilState',
  'GPUExternalTextureBindingLayout',
  'GPUExternalTextureDescriptor',
  'GPUFragmentState',
  'GPUMultisampleState',
  'GPUObjectDescriptorBase',
  'GPUOrigin2DDict',
  'GPUOrigin3DDict',
  'GPUPipelineDescriptorBase',
  'GPUPipelineErrorInit',
  'GPUPipelineLayoutDescriptor',
  'GPUPrimitiveState',
  'GPUQuerySetDescriptor',
  'GPURenderBundleDescriptor',
  'GPURenderBundleEncoderDescriptor',
  'GPURenderPassColorAttachment',
  'GPURenderPassDepthStencilAttachment',
  'GPURenderPassDescriptor',
  'GPURenderPassLayout',
  'GPURenderPassTimestampWrite',
  'GPURenderPipelineDescriptor',
  'GPUSamplerBindingLayout',
  'GPUSamplerDescriptor',
  'GPUShaderModuleCompilationHint',
  'GPUShaderModuleDescriptor',
  'GPUStencilFaceState',
  'GPUStorageTextureBindingLayout',
  'GPUTextureBindingLayout',
  'GPUTextureDescriptor',
  'GPUTextureViewDescriptor',
  'GPUUncapturedErrorEventInit',
  'GPUVertexAttribute',
  'GPUVertexBufferLayout',
  'GPUVertexState',
];

const apis = [
  'Blob',
  'createImageBitmap',
  'fetch',

  'GPUAdapter',
  'GPUAdapterInfo',
  'GPUBindGroup',
  'GPUBindGroupLayout',
  'GPUBuffer',
  'GPUCanvasContext',
  'GPUCommandBuffer',
  'GPUCommandEncoder',
  'GPUCompilationInfo',
  'GPUCompilationMessage',
  'GPUComputePassEncoder',
  'GPUComputePipeline',
  'GPUDevice',
  'GPUDeviceLostInfo',
  'GPUError',
  'GPUExternalTexture',
  'GPUInternalError',
  'GPUOutOfMemoryError',
  'GPUPipelineError',
  'GPUPipelineLayout',
  'GPUQuerySet',
  'GPUQueue',
  'GPURenderBundle',
  'GPURenderBundleEncoder',
  'GPURenderPassEncoder',
  'GPURenderPipeline',
  'GPUSampler',
  'GPUShaderModule',
  'GPUSupportedFeatures',
  'GPUSupportedLimits',
  'GPUTexture',
  'GPUTextureView',
  'GPUUncapturedErrorEvent',
  'GPUValidationError',

  'HTMLCanvasElement',
  'HTMLVideoElement',
  'Image',
  'ImageBitmap',
  'ImageData',
  'IntersectionObserver',
  'ResizeObserver',
  'Response',
];

const others = {
  'devicePixelRatio': 'https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio',
  'getBoundingClientRect': 'https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect',
  'GPUBufferUsage': 'https://developer.mozilla.org/en-US/docs/Web/API/GPUBuffer/usage',
  'GPUMapMode': 'https://developer.mozilla.org/en-US/docs/Web/API/GPUBuffer/mapAsync#mode',
  'GPUShaderStage': 'https://developer.mozilla.org/en-US/docs/Web/API/GPUDevice/createBindGroupLayout#visibility',
  'GPUTextureUsage': 'https://developer.mozilla.org/en-US/docs/Web/API/GPUTexture/usage',
  'GPUColorWrite': 'https://developer.mozilla.org/en-US/docs/Web/API/GPUDevice/createRenderPipeline#writemask',
  'Video': 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement',
};

// check with removing the last 's'?
const refs = {
  ...others,
  ...Object.fromEntries(globalObjects.map(k => [k, `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/${k}`])),
  ...Object.fromEntries(gpuDict.map(k => [k, `https://www.w3.org/TR/webgpu/#dictdef-${k.toLowerCase()}`])),
  ...Object.fromEntries(apis.map(k => [k, `https://developer.mozilla.org/en-US/docs/Web/API/${k}`])),
};

module.exports = refs;
