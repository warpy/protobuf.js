import * as $protobuf from "../..";

export namespace jspb {

    namespace test {

        type Empty$Properties = Object;

        class Empty implements jspb.test.Empty$Properties {
            constructor(properties?: jspb.test.Empty$Properties);
            public static create(properties?: jspb.test.Empty$Properties): jspb.test.Empty;
            public static encode(message: jspb.test.Empty$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.Empty|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Empty;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Empty;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.Empty;
            public static from(object: { [k: string]: any }): jspb.test.Empty;
            public static toObject(message: jspb.test.Empty, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        enum OuterEnum {
            FOO = 1,
            BAR = 2
        }

        interface EnumContainer$Properties {
            outerEnum?: number;
        }

        class EnumContainer implements jspb.test.EnumContainer$Properties {
            constructor(properties?: jspb.test.EnumContainer$Properties);
            public static create(properties?: jspb.test.EnumContainer$Properties): jspb.test.EnumContainer;
            public static encode(message: jspb.test.EnumContainer$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.EnumContainer|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.EnumContainer;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.EnumContainer;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.EnumContainer;
            public static from(object: { [k: string]: any }): jspb.test.EnumContainer;
            public static toObject(message: jspb.test.EnumContainer, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface Simple1$Properties {
            aString: string;
            aRepeatedString?: string[];
            aBoolean?: boolean;
        }

        class Simple1 implements jspb.test.Simple1$Properties {
            constructor(properties?: jspb.test.Simple1$Properties);
            public static create(properties?: jspb.test.Simple1$Properties): jspb.test.Simple1;
            public static encode(message: jspb.test.Simple1$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.Simple1|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Simple1;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Simple1;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.Simple1;
            public static from(object: { [k: string]: any }): jspb.test.Simple1;
            public static toObject(message: jspb.test.Simple1, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface Simple2$Properties {
            aString: string;
            aRepeatedString?: string[];
        }

        class Simple2 implements jspb.test.Simple2$Properties {
            constructor(properties?: jspb.test.Simple2$Properties);
            public static create(properties?: jspb.test.Simple2$Properties): jspb.test.Simple2;
            public static encode(message: jspb.test.Simple2$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.Simple2|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Simple2;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Simple2;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.Simple2;
            public static from(object: { [k: string]: any }): jspb.test.Simple2;
            public static toObject(message: jspb.test.Simple2, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface SpecialCases$Properties {
            normal: string;
            default: string;
            function: string;
            var: string;
        }

        class SpecialCases implements jspb.test.SpecialCases$Properties {
            constructor(properties?: jspb.test.SpecialCases$Properties);
            public static create(properties?: jspb.test.SpecialCases$Properties): jspb.test.SpecialCases;
            public static encode(message: jspb.test.SpecialCases$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.SpecialCases|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.SpecialCases;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.SpecialCases;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.SpecialCases;
            public static from(object: { [k: string]: any }): jspb.test.SpecialCases;
            public static toObject(message: jspb.test.SpecialCases, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface OptionalFields$Properties {
            aString?: string;
            aBool: boolean;
            aNestedMessage?: jspb.test.OptionalFields.Nested;
            aRepeatedMessage?: jspb.test.OptionalFields.Nested[];
            aRepeatedString?: string[];
        }

        class OptionalFields implements jspb.test.OptionalFields$Properties {
            constructor(properties?: jspb.test.OptionalFields$Properties);
            public static create(properties?: jspb.test.OptionalFields$Properties): jspb.test.OptionalFields;
            public static encode(message: jspb.test.OptionalFields$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.OptionalFields|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.OptionalFields;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.OptionalFields;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.OptionalFields;
            public static from(object: { [k: string]: any }): jspb.test.OptionalFields;
            public static toObject(message: jspb.test.OptionalFields, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace OptionalFields {

            class Nested implements jspb.test.OptionalFields.Nested$Properties {
                constructor(properties?: jspb.test.OptionalFields.Nested$Properties);
                public static create(properties?: jspb.test.OptionalFields.Nested$Properties): jspb.test.OptionalFields.Nested;
                public static encode(message: jspb.test.OptionalFields.Nested$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (jspb.test.OptionalFields.Nested|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.OptionalFields.Nested;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.OptionalFields.Nested;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): jspb.test.OptionalFields.Nested;
                public static from(object: { [k: string]: any }): jspb.test.OptionalFields.Nested;
                public static toObject(message: jspb.test.OptionalFields.Nested, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface HasExtensions$Properties {
            str1?: string;
            str2?: string;
            str3?: string;
            .jspb.test.IsExtension.extField?: jspb.test.IsExtension;
            .jspb.test.IndirectExtension.simple?: jspb.test.Simple1;
            .jspb.test.IndirectExtension.str?: string;
            .jspb.test.IndirectExtension.repeatedStr?: string[];
            .jspb.test.IndirectExtension.repeatedSimple?: jspb.test.Simple1[];
            .jspb.test.simple1?: jspb.test.Simple1;
        }

        class HasExtensions implements jspb.test.HasExtensions$Properties {
            constructor(properties?: jspb.test.HasExtensions$Properties);
            public static create(properties?: jspb.test.HasExtensions$Properties): jspb.test.HasExtensions;
            public static encode(message: jspb.test.HasExtensions$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.HasExtensions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.HasExtensions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.HasExtensions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.HasExtensions;
            public static from(object: { [k: string]: any }): jspb.test.HasExtensions;
            public static toObject(message: jspb.test.HasExtensions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface Complex$Properties {
            aString: string;
            anOutOfOrderBool: boolean;
            aNestedMessage?: jspb.test.Complex.Nested;
            aRepeatedMessage?: jspb.test.Complex.Nested[];
            aRepeatedString?: string[];
        }

        class Complex implements jspb.test.Complex$Properties {
            constructor(properties?: jspb.test.Complex$Properties);
            public static create(properties?: jspb.test.Complex$Properties): jspb.test.Complex;
            public static encode(message: jspb.test.Complex$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.Complex|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Complex;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Complex;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.Complex;
            public static from(object: { [k: string]: any }): jspb.test.Complex;
            public static toObject(message: jspb.test.Complex, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace Complex {

            class Nested implements jspb.test.Complex.Nested$Properties {
                constructor(properties?: jspb.test.Complex.Nested$Properties);
                public static create(properties?: jspb.test.Complex.Nested$Properties): jspb.test.Complex.Nested;
                public static encode(message: jspb.test.Complex.Nested$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (jspb.test.Complex.Nested|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Complex.Nested;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Complex.Nested;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): jspb.test.Complex.Nested;
                public static from(object: { [k: string]: any }): jspb.test.Complex.Nested;
                public static toObject(message: jspb.test.Complex.Nested, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        type OuterMessage$Properties = Object;

        class OuterMessage implements jspb.test.OuterMessage$Properties {
            constructor(properties?: jspb.test.OuterMessage$Properties);
            public static create(properties?: jspb.test.OuterMessage$Properties): jspb.test.OuterMessage;
            public static encode(message: jspb.test.OuterMessage$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.OuterMessage|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.OuterMessage;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.OuterMessage;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.OuterMessage;
            public static from(object: { [k: string]: any }): jspb.test.OuterMessage;
            public static toObject(message: jspb.test.OuterMessage, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace OuterMessage {

            class Complex implements jspb.test.OuterMessage.Complex$Properties {
                constructor(properties?: jspb.test.OuterMessage.Complex$Properties);
                public static create(properties?: jspb.test.OuterMessage.Complex$Properties): jspb.test.OuterMessage.Complex;
                public static encode(message: jspb.test.OuterMessage.Complex$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (jspb.test.OuterMessage.Complex|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.OuterMessage.Complex;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.OuterMessage.Complex;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): jspb.test.OuterMessage.Complex;
                public static from(object: { [k: string]: any }): jspb.test.OuterMessage.Complex;
                public static toObject(message: jspb.test.OuterMessage.Complex, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface IsExtension$Properties {
            ext1?: string;
        }

        class IsExtension implements jspb.test.IsExtension$Properties {
            constructor(properties?: jspb.test.IsExtension$Properties);
            public static create(properties?: jspb.test.IsExtension$Properties): jspb.test.IsExtension;
            public static encode(message: jspb.test.IsExtension$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.IsExtension|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.IsExtension;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.IsExtension;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.IsExtension;
            public static from(object: { [k: string]: any }): jspb.test.IsExtension;
            public static toObject(message: jspb.test.IsExtension, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        type IndirectExtension$Properties = Object;

        class IndirectExtension implements jspb.test.IndirectExtension$Properties {
            constructor(properties?: jspb.test.IndirectExtension$Properties);
            public static create(properties?: jspb.test.IndirectExtension$Properties): jspb.test.IndirectExtension;
            public static encode(message: jspb.test.IndirectExtension$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.IndirectExtension|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.IndirectExtension;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.IndirectExtension;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.IndirectExtension;
            public static from(object: { [k: string]: any }): jspb.test.IndirectExtension;
            public static toObject(message: jspb.test.IndirectExtension, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface DefaultValues$Properties {
            stringField?: string;
            boolField?: boolean;
            intField?: (number|$protobuf.Long);
            enumField?: number;
            emptyField?: string;
            bytesField?: Uint8Array;
        }

        class DefaultValues implements jspb.test.DefaultValues$Properties {
            constructor(properties?: jspb.test.DefaultValues$Properties);
            public static create(properties?: jspb.test.DefaultValues$Properties): jspb.test.DefaultValues;
            public static encode(message: jspb.test.DefaultValues$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.DefaultValues|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.DefaultValues;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.DefaultValues;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.DefaultValues;
            public static from(object: { [k: string]: any }): jspb.test.DefaultValues;
            public static toObject(message: jspb.test.DefaultValues, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace DefaultValues {

            enum Enum {
                E1 = 13,
                E2 = 77
            }
        }

        interface FloatingPointFields$Properties {
            optionalFloatField?: number;
            requiredFloatField: number;
            repeatedFloatField?: number[];
            defaultFloatField?: number;
            optionalDoubleField?: number;
            requiredDoubleField: number;
            repeatedDoubleField?: number[];
            defaultDoubleField?: number;
        }

        class FloatingPointFields implements jspb.test.FloatingPointFields$Properties {
            constructor(properties?: jspb.test.FloatingPointFields$Properties);
            public static create(properties?: jspb.test.FloatingPointFields$Properties): jspb.test.FloatingPointFields;
            public static encode(message: jspb.test.FloatingPointFields$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.FloatingPointFields|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.FloatingPointFields;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.FloatingPointFields;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.FloatingPointFields;
            public static from(object: { [k: string]: any }): jspb.test.FloatingPointFields;
            public static toObject(message: jspb.test.FloatingPointFields, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface TestClone$Properties {
            str?: string;
            simple1?: jspb.test.Simple1;
            simple2?: jspb.test.Simple1[];
            bytesField?: Uint8Array;
            unused?: string;
            .jspb.test.CloneExtension.extField?: jspb.test.CloneExtension;
        }

        class TestClone implements jspb.test.TestClone$Properties {
            constructor(properties?: jspb.test.TestClone$Properties);
            public static create(properties?: jspb.test.TestClone$Properties): jspb.test.TestClone;
            public static encode(message: jspb.test.TestClone$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.TestClone|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestClone;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestClone;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.TestClone;
            public static from(object: { [k: string]: any }): jspb.test.TestClone;
            public static toObject(message: jspb.test.TestClone, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface CloneExtension$Properties {
            ext?: string;
        }

        class CloneExtension implements jspb.test.CloneExtension$Properties {
            constructor(properties?: jspb.test.CloneExtension$Properties);
            public static create(properties?: jspb.test.CloneExtension$Properties): jspb.test.CloneExtension;
            public static encode(message: jspb.test.CloneExtension$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.CloneExtension|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.CloneExtension;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.CloneExtension;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.CloneExtension;
            public static from(object: { [k: string]: any }): jspb.test.CloneExtension;
            public static toObject(message: jspb.test.CloneExtension, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface TestGroup$Properties {
            repeatedGroup?: jspb.test.TestGroup.RepeatedGroup[];
            requiredGroup: jspb.test.TestGroup.RequiredGroup;
            optionalGroup?: jspb.test.TestGroup.OptionalGroup;
            id?: string;
            requiredSimple: jspb.test.Simple2;
            optionalSimple?: jspb.test.Simple2;
        }

        class TestGroup implements jspb.test.TestGroup$Properties {
            constructor(properties?: jspb.test.TestGroup$Properties);
            public static create(properties?: jspb.test.TestGroup$Properties): jspb.test.TestGroup;
            public static encode(message: jspb.test.TestGroup$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.TestGroup|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestGroup;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestGroup;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.TestGroup;
            public static from(object: { [k: string]: any }): jspb.test.TestGroup;
            public static toObject(message: jspb.test.TestGroup, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace TestGroup {

            class RepeatedGroup implements jspb.test.TestGroup.RepeatedGroup$Properties {
                constructor(properties?: jspb.test.TestGroup.RepeatedGroup$Properties);
                public static create(properties?: jspb.test.TestGroup.RepeatedGroup$Properties): jspb.test.TestGroup.RepeatedGroup;
                public static encode(message: jspb.test.TestGroup.RepeatedGroup$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (jspb.test.TestGroup.RepeatedGroup|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestGroup.RepeatedGroup;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestGroup.RepeatedGroup;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): jspb.test.TestGroup.RepeatedGroup;
                public static from(object: { [k: string]: any }): jspb.test.TestGroup.RepeatedGroup;
                public static toObject(message: jspb.test.TestGroup.RepeatedGroup, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            class RequiredGroup implements jspb.test.TestGroup.RequiredGroup$Properties {
                constructor(properties?: jspb.test.TestGroup.RequiredGroup$Properties);
                public static create(properties?: jspb.test.TestGroup.RequiredGroup$Properties): jspb.test.TestGroup.RequiredGroup;
                public static encode(message: jspb.test.TestGroup.RequiredGroup$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (jspb.test.TestGroup.RequiredGroup|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestGroup.RequiredGroup;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestGroup.RequiredGroup;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): jspb.test.TestGroup.RequiredGroup;
                public static from(object: { [k: string]: any }): jspb.test.TestGroup.RequiredGroup;
                public static toObject(message: jspb.test.TestGroup.RequiredGroup, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            class OptionalGroup implements jspb.test.TestGroup.OptionalGroup$Properties {
                constructor(properties?: jspb.test.TestGroup.OptionalGroup$Properties);
                public static create(properties?: jspb.test.TestGroup.OptionalGroup$Properties): jspb.test.TestGroup.OptionalGroup;
                public static encode(message: jspb.test.TestGroup.OptionalGroup$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (jspb.test.TestGroup.OptionalGroup|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestGroup.OptionalGroup;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestGroup.OptionalGroup;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): jspb.test.TestGroup.OptionalGroup;
                public static from(object: { [k: string]: any }): jspb.test.TestGroup.OptionalGroup;
                public static toObject(message: jspb.test.TestGroup.OptionalGroup, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface TestGroup1$Properties {
            group?: jspb.test.TestGroup.RepeatedGroup;
        }

        class TestGroup1 implements jspb.test.TestGroup1$Properties {
            constructor(properties?: jspb.test.TestGroup1$Properties);
            public static create(properties?: jspb.test.TestGroup1$Properties): jspb.test.TestGroup1;
            public static encode(message: jspb.test.TestGroup1$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.TestGroup1|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestGroup1;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestGroup1;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.TestGroup1;
            public static from(object: { [k: string]: any }): jspb.test.TestGroup1;
            public static toObject(message: jspb.test.TestGroup1, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface TestReservedNames$Properties {
            extension?: number;
            .jspb.test.TestReservedNamesExtension.foo?: number;
        }

        class TestReservedNames implements jspb.test.TestReservedNames$Properties {
            constructor(properties?: jspb.test.TestReservedNames$Properties);
            public static create(properties?: jspb.test.TestReservedNames$Properties): jspb.test.TestReservedNames;
            public static encode(message: jspb.test.TestReservedNames$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.TestReservedNames|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestReservedNames;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestReservedNames;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.TestReservedNames;
            public static from(object: { [k: string]: any }): jspb.test.TestReservedNames;
            public static toObject(message: jspb.test.TestReservedNames, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        type TestReservedNamesExtension$Properties = Object;

        class TestReservedNamesExtension implements jspb.test.TestReservedNamesExtension$Properties {
            constructor(properties?: jspb.test.TestReservedNamesExtension$Properties);
            public static create(properties?: jspb.test.TestReservedNamesExtension$Properties): jspb.test.TestReservedNamesExtension;
            public static encode(message: jspb.test.TestReservedNamesExtension$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.TestReservedNamesExtension|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestReservedNamesExtension;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestReservedNamesExtension;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.TestReservedNamesExtension;
            public static from(object: { [k: string]: any }): jspb.test.TestReservedNamesExtension;
            public static toObject(message: jspb.test.TestReservedNamesExtension, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface TestMessageWithOneof$Properties {
            pone?: string;
            pthree?: string;
            rone?: jspb.test.TestMessageWithOneof;
            rtwo?: string;
            normalField?: boolean;
            repeatedField?: string[];
            aone?: number;
            atwo?: number;
            bone?: number;
            btwo?: number;
        }

        class TestMessageWithOneof implements jspb.test.TestMessageWithOneof$Properties {
            constructor(properties?: jspb.test.TestMessageWithOneof$Properties);
            public partialOneof?: string;
            public recursiveOneof?: string;
            public defaultOneofA?: string;
            public defaultOneofB?: string;
            public static create(properties?: jspb.test.TestMessageWithOneof$Properties): jspb.test.TestMessageWithOneof;
            public static encode(message: jspb.test.TestMessageWithOneof$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.TestMessageWithOneof|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestMessageWithOneof;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestMessageWithOneof;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.TestMessageWithOneof;
            public static from(object: { [k: string]: any }): jspb.test.TestMessageWithOneof;
            public static toObject(message: jspb.test.TestMessageWithOneof, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface TestEndsWithBytes$Properties {
            value?: number;
            data?: Uint8Array;
        }

        class TestEndsWithBytes implements jspb.test.TestEndsWithBytes$Properties {
            constructor(properties?: jspb.test.TestEndsWithBytes$Properties);
            public static create(properties?: jspb.test.TestEndsWithBytes$Properties): jspb.test.TestEndsWithBytes;
            public static encode(message: jspb.test.TestEndsWithBytes$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.TestEndsWithBytes|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestEndsWithBytes;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestEndsWithBytes;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.TestEndsWithBytes;
            public static from(object: { [k: string]: any }): jspb.test.TestEndsWithBytes;
            public static toObject(message: jspb.test.TestEndsWithBytes, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface TestMapFieldsNoBinary$Properties {
            mapStringString?: { [k: string]: string };
            mapStringInt32?: { [k: string]: number };
            mapStringInt64?: { [k: string]: (number|$protobuf.Long) };
            mapStringBool?: { [k: string]: boolean };
            mapStringDouble?: { [k: string]: number };
            mapStringEnum?: { [k: string]: number };
            mapStringMsg?: { [k: string]: jspb.test.MapValueMessageNoBinary };
            mapInt32String?: { [k: string]: string };
            mapInt64String?: { [k: string]: string };
            mapBoolString?: { [k: string]: string };
            testMapFields?: jspb.test.TestMapFieldsNoBinary;
            mapStringTestmapfields?: { [k: string]: jspb.test.TestMapFieldsNoBinary };
        }

        class TestMapFieldsNoBinary implements jspb.test.TestMapFieldsNoBinary$Properties {
            constructor(properties?: jspb.test.TestMapFieldsNoBinary$Properties);
            public static create(properties?: jspb.test.TestMapFieldsNoBinary$Properties): jspb.test.TestMapFieldsNoBinary;
            public static encode(message: jspb.test.TestMapFieldsNoBinary$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.TestMapFieldsNoBinary|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestMapFieldsNoBinary;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestMapFieldsNoBinary;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.TestMapFieldsNoBinary;
            public static from(object: { [k: string]: any }): jspb.test.TestMapFieldsNoBinary;
            public static toObject(message: jspb.test.TestMapFieldsNoBinary, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        enum MapValueEnumNoBinary {
            MAP_VALUE_FOO_NOBINARY = 0,
            MAP_VALUE_BAR_NOBINARY = 1,
            MAP_VALUE_BAZ_NOBINARY = 2
        }

        interface MapValueMessageNoBinary$Properties {
            foo?: number;
        }

        class MapValueMessageNoBinary implements jspb.test.MapValueMessageNoBinary$Properties {
            constructor(properties?: jspb.test.MapValueMessageNoBinary$Properties);
            public static create(properties?: jspb.test.MapValueMessageNoBinary$Properties): jspb.test.MapValueMessageNoBinary;
            public static encode(message: jspb.test.MapValueMessageNoBinary$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.MapValueMessageNoBinary|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.MapValueMessageNoBinary;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.MapValueMessageNoBinary;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.MapValueMessageNoBinary;
            public static from(object: { [k: string]: any }): jspb.test.MapValueMessageNoBinary;
            public static toObject(message: jspb.test.MapValueMessageNoBinary, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        type Deeply$Properties = Object;

        class Deeply implements jspb.test.Deeply$Properties {
            constructor(properties?: jspb.test.Deeply$Properties);
            public static create(properties?: jspb.test.Deeply$Properties): jspb.test.Deeply;
            public static encode(message: jspb.test.Deeply$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.Deeply|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Deeply;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Deeply;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.Deeply;
            public static from(object: { [k: string]: any }): jspb.test.Deeply;
            public static toObject(message: jspb.test.Deeply, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace Deeply {

            type Nested$Properties = Object;

            class Nested implements jspb.test.Deeply.Nested$Properties {
                constructor(properties?: jspb.test.Deeply.Nested$Properties);
                public static create(properties?: jspb.test.Deeply.Nested$Properties): jspb.test.Deeply.Nested;
                public static encode(message: jspb.test.Deeply.Nested$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (jspb.test.Deeply.Nested|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Deeply.Nested;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Deeply.Nested;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): jspb.test.Deeply.Nested;
                public static from(object: { [k: string]: any }): jspb.test.Deeply.Nested;
                public static toObject(message: jspb.test.Deeply.Nested, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace Nested {

                class Message implements jspb.test.Deeply.Nested.Message$Properties {
                    constructor(properties?: jspb.test.Deeply.Nested.Message$Properties);
                    public static create(properties?: jspb.test.Deeply.Nested.Message$Properties): jspb.test.Deeply.Nested.Message;
                    public static encode(message: jspb.test.Deeply.Nested.Message$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: (jspb.test.Deeply.Nested.Message|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Deeply.Nested.Message;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Deeply.Nested.Message;
                    public static verify(message: { [k: string]: any }): string;
                    public static fromObject(object: { [k: string]: any }): jspb.test.Deeply.Nested.Message;
                    public static from(object: { [k: string]: any }): jspb.test.Deeply.Nested.Message;
                    public static toObject(message: jspb.test.Deeply.Nested.Message, options?: $protobuf.ConversionOptions): { [k: string]: any };
                    public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}

export namespace google {

    namespace protobuf {

        interface FileDescriptorSet$Properties {
            file?: google.protobuf.FileDescriptorProto[];
        }

        class FileDescriptorSet implements google.protobuf.FileDescriptorSet$Properties {
            constructor(properties?: google.protobuf.FileDescriptorSet$Properties);
            public static create(properties?: google.protobuf.FileDescriptorSet$Properties): google.protobuf.FileDescriptorSet;
            public static encode(message: google.protobuf.FileDescriptorSet$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.FileDescriptorSet|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;
            public static from(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface FileDescriptorProto$Properties {
            name?: string;
            package?: string;
            dependency?: string[];
            publicDependency?: number[];
            weakDependency?: number[];
            messageType?: google.protobuf.DescriptorProto[];
            enumType?: google.protobuf.EnumDescriptorProto[];
            service?: google.protobuf.ServiceDescriptorProto[];
            extension?: google.protobuf.FieldDescriptorProto[];
            options?: google.protobuf.FileOptions;
            sourceCodeInfo?: google.protobuf.SourceCodeInfo;
            syntax?: string;
        }

        class FileDescriptorProto implements google.protobuf.FileDescriptorProto$Properties {
            constructor(properties?: google.protobuf.FileDescriptorProto$Properties);
            public static create(properties?: google.protobuf.FileDescriptorProto$Properties): google.protobuf.FileDescriptorProto;
            public static encode(message: google.protobuf.FileDescriptorProto$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.FileDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;
            public static from(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface DescriptorProto$Properties {
            name?: string;
            field?: google.protobuf.FieldDescriptorProto[];
            extension?: google.protobuf.FieldDescriptorProto[];
            nestedType?: google.protobuf.DescriptorProto[];
            enumType?: google.protobuf.EnumDescriptorProto[];
            extensionRange?: google.protobuf.DescriptorProto.ExtensionRange[];
            oneofDecl?: google.protobuf.OneofDescriptorProto[];
            options?: google.protobuf.MessageOptions;
            reservedRange?: google.protobuf.DescriptorProto.ReservedRange[];
            reservedName?: string[];
        }

        class DescriptorProto implements google.protobuf.DescriptorProto$Properties {
            constructor(properties?: google.protobuf.DescriptorProto$Properties);
            public static create(properties?: google.protobuf.DescriptorProto$Properties): google.protobuf.DescriptorProto;
            public static encode(message: google.protobuf.DescriptorProto$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.DescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;
            public static from(object: { [k: string]: any }): google.protobuf.DescriptorProto;
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            class ExtensionRange implements google.protobuf.DescriptorProto.ExtensionRange$Properties {
                constructor(properties?: google.protobuf.DescriptorProto.ExtensionRange$Properties);
                public static create(properties?: google.protobuf.DescriptorProto.ExtensionRange$Properties): google.protobuf.DescriptorProto.ExtensionRange;
                public static encode(message: google.protobuf.DescriptorProto.ExtensionRange$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (google.protobuf.DescriptorProto.ExtensionRange|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;
                public static from(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            class ReservedRange implements google.protobuf.DescriptorProto.ReservedRange$Properties {
                constructor(properties?: google.protobuf.DescriptorProto.ReservedRange$Properties);
                public static create(properties?: google.protobuf.DescriptorProto.ReservedRange$Properties): google.protobuf.DescriptorProto.ReservedRange;
                public static encode(message: google.protobuf.DescriptorProto.ReservedRange$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (google.protobuf.DescriptorProto.ReservedRange|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;
                public static from(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface FieldDescriptorProto$Properties {
            name?: string;
            number?: number;
            label?: number;
            type?: number;
            typeName?: string;
            extendee?: string;
            defaultValue?: string;
            oneofIndex?: number;
            jsonName?: string;
            options?: google.protobuf.FieldOptions;
        }

        class FieldDescriptorProto implements google.protobuf.FieldDescriptorProto$Properties {
            constructor(properties?: google.protobuf.FieldDescriptorProto$Properties);
            public static create(properties?: google.protobuf.FieldDescriptorProto$Properties): google.protobuf.FieldDescriptorProto;
            public static encode(message: google.protobuf.FieldDescriptorProto$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.FieldDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;
            public static from(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        interface OneofDescriptorProto$Properties {
            name?: string;
            options?: google.protobuf.OneofOptions;
        }

        class OneofDescriptorProto implements google.protobuf.OneofDescriptorProto$Properties {
            constructor(properties?: google.protobuf.OneofDescriptorProto$Properties);
            public static create(properties?: google.protobuf.OneofDescriptorProto$Properties): google.protobuf.OneofDescriptorProto;
            public static encode(message: google.protobuf.OneofDescriptorProto$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.OneofDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;
            public static from(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface EnumDescriptorProto$Properties {
            name?: string;
            value?: google.protobuf.EnumValueDescriptorProto[];
            options?: google.protobuf.EnumOptions;
        }

        class EnumDescriptorProto implements google.protobuf.EnumDescriptorProto$Properties {
            constructor(properties?: google.protobuf.EnumDescriptorProto$Properties);
            public static create(properties?: google.protobuf.EnumDescriptorProto$Properties): google.protobuf.EnumDescriptorProto;
            public static encode(message: google.protobuf.EnumDescriptorProto$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.EnumDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;
            public static from(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface EnumValueDescriptorProto$Properties {
            name?: string;
            number?: number;
            options?: google.protobuf.EnumValueOptions;
        }

        class EnumValueDescriptorProto implements google.protobuf.EnumValueDescriptorProto$Properties {
            constructor(properties?: google.protobuf.EnumValueDescriptorProto$Properties);
            public static create(properties?: google.protobuf.EnumValueDescriptorProto$Properties): google.protobuf.EnumValueDescriptorProto;
            public static encode(message: google.protobuf.EnumValueDescriptorProto$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.EnumValueDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;
            public static from(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ServiceDescriptorProto$Properties {
            name?: string;
            method?: google.protobuf.MethodDescriptorProto[];
            options?: google.protobuf.ServiceOptions;
        }

        class ServiceDescriptorProto implements google.protobuf.ServiceDescriptorProto$Properties {
            constructor(properties?: google.protobuf.ServiceDescriptorProto$Properties);
            public static create(properties?: google.protobuf.ServiceDescriptorProto$Properties): google.protobuf.ServiceDescriptorProto;
            public static encode(message: google.protobuf.ServiceDescriptorProto$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.ServiceDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;
            public static from(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface MethodDescriptorProto$Properties {
            name?: string;
            inputType?: string;
            outputType?: string;
            options?: google.protobuf.MethodOptions;
            clientStreaming?: boolean;
            serverStreaming?: boolean;
        }

        class MethodDescriptorProto implements google.protobuf.MethodDescriptorProto$Properties {
            constructor(properties?: google.protobuf.MethodDescriptorProto$Properties);
            public static create(properties?: google.protobuf.MethodDescriptorProto$Properties): google.protobuf.MethodDescriptorProto;
            public static encode(message: google.protobuf.MethodDescriptorProto$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.MethodDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;
            public static from(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface FileOptions$Properties {
            javaPackage?: string;
            javaOuterClassname?: string;
            javaMultipleFiles?: boolean;
            javaGenerateEqualsAndHash?: boolean;
            javaStringCheckUtf8?: boolean;
            optimizeFor?: number;
            goPackage?: string;
            ccGenericServices?: boolean;
            javaGenericServices?: boolean;
            pyGenericServices?: boolean;
            deprecated?: boolean;
            ccEnableArenas?: boolean;
            objcClassPrefix?: string;
            csharpNamespace?: string;
            uninterpretedOption?: google.protobuf.UninterpretedOption[];
        }

        class FileOptions implements google.protobuf.FileOptions$Properties {
            constructor(properties?: google.protobuf.FileOptions$Properties);
            public static create(properties?: google.protobuf.FileOptions$Properties): google.protobuf.FileOptions;
            public static encode(message: google.protobuf.FileOptions$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.FileOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;
            public static from(object: { [k: string]: any }): google.protobuf.FileOptions;
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        interface MessageOptions$Properties {
            messageSetWireFormat?: boolean;
            noStandardDescriptorAccessor?: boolean;
            deprecated?: boolean;
            mapEntry?: boolean;
            uninterpretedOption?: google.protobuf.UninterpretedOption[];
        }

        class MessageOptions implements google.protobuf.MessageOptions$Properties {
            constructor(properties?: google.protobuf.MessageOptions$Properties);
            public static create(properties?: google.protobuf.MessageOptions$Properties): google.protobuf.MessageOptions;
            public static encode(message: google.protobuf.MessageOptions$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.MessageOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;
            public static from(object: { [k: string]: any }): google.protobuf.MessageOptions;
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface FieldOptions$Properties {
            ctype?: number;
            packed?: boolean;
            jstype?: number;
            lazy?: boolean;
            deprecated?: boolean;
            weak?: boolean;
            uninterpretedOption?: google.protobuf.UninterpretedOption[];
        }

        class FieldOptions implements google.protobuf.FieldOptions$Properties {
            constructor(properties?: google.protobuf.FieldOptions$Properties);
            public static create(properties?: google.protobuf.FieldOptions$Properties): google.protobuf.FieldOptions;
            public static encode(message: google.protobuf.FieldOptions$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.FieldOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;
            public static from(object: { [k: string]: any }): google.protobuf.FieldOptions;
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        interface OneofOptions$Properties {
            uninterpretedOption?: google.protobuf.UninterpretedOption[];
        }

        class OneofOptions implements google.protobuf.OneofOptions$Properties {
            constructor(properties?: google.protobuf.OneofOptions$Properties);
            public static create(properties?: google.protobuf.OneofOptions$Properties): google.protobuf.OneofOptions;
            public static encode(message: google.protobuf.OneofOptions$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.OneofOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;
            public static from(object: { [k: string]: any }): google.protobuf.OneofOptions;
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface EnumOptions$Properties {
            allowAlias?: boolean;
            deprecated?: boolean;
            uninterpretedOption?: google.protobuf.UninterpretedOption[];
            .jspb.test.IsExtension.simpleOption?: string;
        }

        class EnumOptions implements google.protobuf.EnumOptions$Properties {
            constructor(properties?: google.protobuf.EnumOptions$Properties);
            public static create(properties?: google.protobuf.EnumOptions$Properties): google.protobuf.EnumOptions;
            public static encode(message: google.protobuf.EnumOptions$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.EnumOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;
            public static from(object: { [k: string]: any }): google.protobuf.EnumOptions;
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface EnumValueOptions$Properties {
            deprecated?: boolean;
            uninterpretedOption?: google.protobuf.UninterpretedOption[];
        }

        class EnumValueOptions implements google.protobuf.EnumValueOptions$Properties {
            constructor(properties?: google.protobuf.EnumValueOptions$Properties);
            public static create(properties?: google.protobuf.EnumValueOptions$Properties): google.protobuf.EnumValueOptions;
            public static encode(message: google.protobuf.EnumValueOptions$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.EnumValueOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;
            public static from(object: { [k: string]: any }): google.protobuf.EnumValueOptions;
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ServiceOptions$Properties {
            deprecated?: boolean;
            uninterpretedOption?: google.protobuf.UninterpretedOption[];
        }

        class ServiceOptions implements google.protobuf.ServiceOptions$Properties {
            constructor(properties?: google.protobuf.ServiceOptions$Properties);
            public static create(properties?: google.protobuf.ServiceOptions$Properties): google.protobuf.ServiceOptions;
            public static encode(message: google.protobuf.ServiceOptions$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.ServiceOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;
            public static from(object: { [k: string]: any }): google.protobuf.ServiceOptions;
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface MethodOptions$Properties {
            deprecated?: boolean;
            idempotencyLevel?: number;
            uninterpretedOption?: google.protobuf.UninterpretedOption[];
        }

        class MethodOptions implements google.protobuf.MethodOptions$Properties {
            constructor(properties?: google.protobuf.MethodOptions$Properties);
            public static create(properties?: google.protobuf.MethodOptions$Properties): google.protobuf.MethodOptions;
            public static encode(message: google.protobuf.MethodOptions$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.MethodOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;
            public static from(object: { [k: string]: any }): google.protobuf.MethodOptions;
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        interface UninterpretedOption$Properties {
            name?: google.protobuf.UninterpretedOption.NamePart[];
            identifierValue?: string;
            positiveIntValue?: (number|$protobuf.Long);
            negativeIntValue?: (number|$protobuf.Long);
            doubleValue?: number;
            stringValue?: Uint8Array;
            aggregateValue?: string;
        }

        class UninterpretedOption implements google.protobuf.UninterpretedOption$Properties {
            constructor(properties?: google.protobuf.UninterpretedOption$Properties);
            public static create(properties?: google.protobuf.UninterpretedOption$Properties): google.protobuf.UninterpretedOption;
            public static encode(message: google.protobuf.UninterpretedOption$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.UninterpretedOption|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;
            public static from(object: { [k: string]: any }): google.protobuf.UninterpretedOption;
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            class NamePart implements google.protobuf.UninterpretedOption.NamePart$Properties {
                constructor(properties?: google.protobuf.UninterpretedOption.NamePart$Properties);
                public static create(properties?: google.protobuf.UninterpretedOption.NamePart$Properties): google.protobuf.UninterpretedOption.NamePart;
                public static encode(message: google.protobuf.UninterpretedOption.NamePart$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (google.protobuf.UninterpretedOption.NamePart|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;
                public static from(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface SourceCodeInfo$Properties {
            location?: google.protobuf.SourceCodeInfo.Location[];
        }

        class SourceCodeInfo implements google.protobuf.SourceCodeInfo$Properties {
            constructor(properties?: google.protobuf.SourceCodeInfo$Properties);
            public static create(properties?: google.protobuf.SourceCodeInfo$Properties): google.protobuf.SourceCodeInfo;
            public static encode(message: google.protobuf.SourceCodeInfo$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.SourceCodeInfo|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;
            public static from(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            class Location implements google.protobuf.SourceCodeInfo.Location$Properties {
                constructor(properties?: google.protobuf.SourceCodeInfo.Location$Properties);
                public static create(properties?: google.protobuf.SourceCodeInfo.Location$Properties): google.protobuf.SourceCodeInfo.Location;
                public static encode(message: google.protobuf.SourceCodeInfo.Location$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (google.protobuf.SourceCodeInfo.Location|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;
                public static from(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface GeneratedCodeInfo$Properties {
            annotation?: google.protobuf.GeneratedCodeInfo.Annotation[];
        }

        class GeneratedCodeInfo implements google.protobuf.GeneratedCodeInfo$Properties {
            constructor(properties?: google.protobuf.GeneratedCodeInfo$Properties);
            public static create(properties?: google.protobuf.GeneratedCodeInfo$Properties): google.protobuf.GeneratedCodeInfo;
            public static encode(message: google.protobuf.GeneratedCodeInfo$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.GeneratedCodeInfo|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;
            public static from(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            class Annotation implements google.protobuf.GeneratedCodeInfo.Annotation$Properties {
                constructor(properties?: google.protobuf.GeneratedCodeInfo.Annotation$Properties);
                public static create(properties?: google.protobuf.GeneratedCodeInfo.Annotation$Properties): google.protobuf.GeneratedCodeInfo.Annotation;
                public static encode(message: google.protobuf.GeneratedCodeInfo.Annotation$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (google.protobuf.GeneratedCodeInfo.Annotation|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;
                public static from(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

interface Nested$Properties {
    anInt?: number;
}
;

interface Nested$Properties {
    anInt: number;
}
;

interface Complex$Properties {
    innerComplexField?: number;
}
;

interface RepeatedGroup$Properties {
    id: string;
    someBool?: boolean[];
}
;

interface RequiredGroup$Properties {
    id: string;
}
;

interface OptionalGroup$Properties {
    id: string;
}
;

interface Message$Properties {
    count?: number;
}
;

interface ExtensionRange$Properties {
    start?: number;
    end?: number;
}
;

interface ReservedRange$Properties {
    start?: number;
    end?: number;
}
;

interface NamePart$Properties {
    namePart: string;
    isExtension: boolean;
}
;

interface Location$Properties {
    path?: number[];
    span?: number[];
    leadingComments?: string;
    trailingComments?: string;
    leadingDetachedComments?: string[];
}
;

interface Annotation$Properties {
    path?: number[];
    sourceFile?: string;
    begin?: number;
    end?: number;
}
;
