// Manually created by @simonhenke
declare module "photoshop" {
  const enum LayerKind {
    any = 0,
    pixel = 1,
    adjustment = 2,
    text = 3,
    vector = 4,
    smartObject = 5,
    video = 6,
    group = 7,
    threeD = 8,
    gradient = 9,
    pattern = 10,
    solidColor = 11,
    background = 12,
    groupEnd = 13,
  }

  interface LayerDescriptor {
    name: string;
    color: ColorNameEnum;
    visible: boolean;
    mode: BlendModeEnum;
    opacity: number;
    layerID: number;
    itemIndex: number;
    count: number;
    preserveTransparency: boolean;
    layerFXVisible: boolean;
    layerEffects: LayerEffectsDescriptor;
    globalAngle: number;
    background: boolean;
    layerSection: LayerSectionTypeEnum;
    layerLocking: LayerLockingDescriptor;
    group: boolean;
    targetChannels: ChannelReference[];
    visibleChannels: ChannelReference[];
    channelRestrictions: ChannelEnum[];
    fillOpacity: number;
    hasUserMask: boolean;
    hasVectorMask: boolean;
    proportionalScaling: boolean;
    layerKind: number;
    hasFilterMask: boolean;
    userMaskDensity: number;
    userMaskFeather: number;
    vectorMaskDensity: number;
    vectorMaskFeather: number;
    bounds: UVRectangleDescriptor<PixelValue>;
    boundsNoEffects: UVRectangleDescriptor<PixelValue>;
    boundsNoMask: UVRectangleDescriptor<PixelValue>;
    useAlignedRendering: boolean;
    generatorSettings: GeneratorSettingsDescriptor;
    keyOriginType: KeyOriginType[];
    fillEnabled: boolean;
    animationProtection: AnimationProtectionDescriptor;
    artboard: ArtboardDescriptor;
    artboardEnabled: boolean;
    vectorMaskEnabled: boolean;
    vectorMaskEmpty: boolean;
    textWarningLevel: number;
    parentLayerID: number;

    // --- Smart Object Layer
    smartObject?: SmartObjectDescriptor;
    smartObjectMore?: SmartObjectMore;
    // TODO: SmartFilters

    // --- Pattern Layer
    userMaskEnabled?: boolean;
    userMaskLinked?: boolean;

    // --- Adjustment Layer
    adjustment: Adjustment[];
  }

  interface LayerSectionTypeEnum {
    _enum: "layerSectionType";
    _value: LayerSectionType;
  }

  const enum LayerSectionType {
    layerSectionContent = "layerSectionContent",
    layerSectionStart = "layerSectionStart",
    layerSectionEnd = "layerSectionEnd",
  }

  interface LayerLockingDescriptor {
    _obj: "layerLocking";
    protectNone: boolean;
    protectAll: boolean;
    protectTransparency: boolean;
    protectComposite: boolean;
    protectPosition: boolean;
    protectArtboardAutonest: boolean;
  }

  interface GeneratorSettingsDescriptor {
    _obj: "generatorSettings";
  }

  interface AnimationProtectionDescriptor {
    _obj: "animationProtection";
    animationUnifyPosition: boolean;
    animationUnifyEffects: boolean;
    animationUnifyVisibility: boolean;
    animationPropagate: boolean;
  }

  interface FloatRectDescriptor extends TopRightBottomleft {
    _obj: "classFloatRect";
  }

  interface ArtboardDescriptor {
    _obj: "artboard";
    artboardRect: FloatRectDescriptor;
    guideIDs: number[];
    artboardPresetName: string;
    color: PsColor;
    artboardBackgroundType: number;
  }

  interface RadiiDescriptor {
    _obj: "radii";
    unitValueQuadVersion: number;
    topRight: PixelValue;
    topLeft: PixelValue;
    bottomLeft: PixelValue;
    bottomRight: PixelValue;
  }

  interface UnitRectDescriptor extends UVTopRightBottomLeft<PixelValue> {
    _obj: "unitRect";
    unitValueQuadVersion: number;
  }

  interface OriginBoxCorners {
    rectangleCornerA: PointDescriptor;
    rectangleCornerB: PointDescriptor;
    rectangleCornerC: PointDescriptor;
    rectangleCornerD: PointDescriptor;
  }

  interface KeyOriginType {
    keyOriginType: number;
    keyOriginRRectRadii: RadiiDescriptor;
    keyOriginResolution: number;
    keyOriginShapeBBox: UnitRectDescriptor;
    keyOriginBoxCorners: OriginBoxCorners;
    transform: TransformMatrixDescriptor;
    keyActionMode: number;
  }

  type Adjustment =
    | SolidColorLayerDescriptor
    | PatternDescriptor
    | GradientLayerDescriptor
    | BrightnessAndContrastDescriptor
    | LevelsDescriptor
    | CurvesDescriptor
    | ExposureDescriptor
    | VibranceDescriptor
    | HueSaturationDescriptor
    | ColorBalanceDescriptor
    | BlackAndWhiteDescriptor
    | PhotoFilterDescriptor
    | ChannelMixerDescriptor
    | ColorLookupDescriptor
    | InvertDescriptor
    | PosterizationDescriptor
    | ThresholdDescriptor
    | GradientMapDescriptor
    | SelectiveColorDescriptor;

  interface SolidColorLayerDescriptor {
    _obj: "solidColorLayer";
    color: PsColor;
  }

  interface PatternLayerDescriptor {
    _obj: "patternLayer";
    pattern: PatternDescriptor;
  }

  interface LegacyContentData {
    legacyContentData: ArrayBuffer;
  }

  interface BrightnessAndContrastDescriptor extends LegacyContentData {
    _obj: "brightnessEvent";
  }

  interface LevelsDescriptor extends LegacyContentData {
    _obj: "levels";
  }

  interface CurvesDescriptor extends LegacyContentData {
    _obj: "curves";
  }

  interface ExposureDescriptor extends LegacyContentData {
    _obj: "exposure";
  }

  interface VibranceDescriptor extends LegacyContentData {
    _obj: "vibrance";
  }

  interface HueSaturationDescriptor extends LegacyContentData {
    _obj: "hueSaturation";
  }

  interface ColorBalanceDescriptor extends LegacyContentData {
    _obj: "colorBalance";
  }

  interface BlackAndWhiteDescriptor extends LegacyContentData {
    _obj: "blackAndWhite";
  }

  interface PhotoFilterDescriptor extends LegacyContentData {
    _obj: "photoFilter";
  }

  interface ChannelMixerDescriptor extends LegacyContentData {
    _obj: "channelMixer";
  }

  interface ColorLookupDescriptor extends LegacyContentData {
    _obj: "colorLookup";
  }

  interface InvertDescriptor {
    _obj: "invert";
  }

  interface PosterizationDescriptor extends LegacyContentData {
    _obj: "posterization";
  }

  interface ThresholdDescriptor extends LegacyContentData {
    _obj: "thresholdClassEvent";
  }

  interface GradientMapDescriptor extends LegacyContentData {
    _obj: "gradientMapClass";
  }

  interface SelectiveColorDescriptor extends LegacyContentData {
    _obj: "selectiveColor";
  }

  interface GradientLayerDescriptor {
    _obj: "gradientLayer";
    angle: AngleValue;
    type: GradientType;
    gradient: GradientDescriptor;
  }
}
