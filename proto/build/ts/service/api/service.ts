/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twirp.example.haberdasher";

/** Size of a Hat, in inches. */
export interface Size {
  /** must be > 0 */
  inches: number;
}

/** A Hat is a piece of headwear made by a Haberdasher. */
export interface Hat {
  inches: number;
  /** anything but "invisible" */
  color: string;
  /** i.e. "bowler" */
  name: string;
}

function createBaseSize(): Size {
  return { inches: 0 };
}

export const Size = {
  encode(message: Size, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inches !== 0) {
      writer.uint32(8).int32(message.inches);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Size {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.inches = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Size {
    return { inches: isSet(object.inches) ? globalThis.Number(object.inches) : 0 };
  },

  toJSON(message: Size): unknown {
    const obj: any = {};
    if (message.inches !== 0) {
      obj.inches = Math.round(message.inches);
    }
    return obj;
  },

  create(base?: DeepPartial<Size>): Size {
    return Size.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Size>): Size {
    const message = createBaseSize();
    message.inches = object.inches ?? 0;
    return message;
  },
};

function createBaseHat(): Hat {
  return { inches: 0, color: "", name: "" };
}

export const Hat = {
  encode(message: Hat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inches !== 0) {
      writer.uint32(8).int32(message.inches);
    }
    if (message.color !== "") {
      writer.uint32(18).string(message.color);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Hat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.inches = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.color = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Hat {
    return {
      inches: isSet(object.inches) ? globalThis.Number(object.inches) : 0,
      color: isSet(object.color) ? globalThis.String(object.color) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: Hat): unknown {
    const obj: any = {};
    if (message.inches !== 0) {
      obj.inches = Math.round(message.inches);
    }
    if (message.color !== "") {
      obj.color = message.color;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<Hat>): Hat {
    return Hat.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Hat>): Hat {
    const message = createBaseHat();
    message.inches = object.inches ?? 0;
    message.color = object.color ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

/** Haberdasher service makes hats for clients. */
export type HaberdasherDefinition = typeof HaberdasherDefinition;
export const HaberdasherDefinition = {
  name: "Haberdasher",
  fullName: "twirp.example.haberdasher.Haberdasher",
  methods: {
    /** MakeHat produces a hat of mysterious, randomly-selected color! */
    makeHat: {
      name: "MakeHat",
      requestType: Size,
      requestStream: false,
      responseType: Hat,
      responseStream: false,
      options: {
        _unknownFields: { 578365826: [new Uint8Array([13, 58, 1, 42, 34, 8, 47, 118, 49, 47, 104, 97, 116, 115])] },
      },
    },
  },
} as const;

export interface HaberdasherServiceImplementation<CallContextExt = {}> {
  /** MakeHat produces a hat of mysterious, randomly-selected color! */
  makeHat(request: Size, context: CallContext & CallContextExt): Promise<DeepPartial<Hat>>;
}

export interface HaberdasherClient<CallOptionsExt = {}> {
  /** MakeHat produces a hat of mysterious, randomly-selected color! */
  makeHat(request: DeepPartial<Size>, options?: CallOptions & CallOptionsExt): Promise<Hat>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
