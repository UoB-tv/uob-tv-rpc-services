/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var ChannelId_pb = require('./ChannelId_pb.js');
var UserId_pb = require('./UserId_pb.js');
goog.exportSymbol('proto.tv.uob.grpc.Boolean', null, global);
goog.exportSymbol('proto.tv.uob.grpc.Email', null, global);
goog.exportSymbol('proto.tv.uob.grpc.Profile', null, global);
goog.exportSymbol('proto.tv.uob.grpc.StreamId', null, global);
goog.exportSymbol('proto.tv.uob.grpc.User', null, global);
goog.exportSymbol('proto.tv.uob.grpc.UserInitialData', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tv.uob.grpc.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tv.uob.grpc.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tv.uob.grpc.User.displayName = 'proto.tv.uob.grpc.User';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tv.uob.grpc.User.prototype.toObject = function(opt_includeInstance) {
  return proto.tv.uob.grpc.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tv.uob.grpc.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tv.uob.grpc.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    profile: (f = msg.getProfile()) && proto.tv.uob.grpc.Profile.toObject(includeInstance, f),
    stream: (f = msg.getStream()) && proto.tv.uob.grpc.StreamId.toObject(includeInstance, f),
    channel: (f = msg.getChannel()) && ChannelId_pb.ChannelId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tv.uob.grpc.User}
 */
proto.tv.uob.grpc.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tv.uob.grpc.User;
  return proto.tv.uob.grpc.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tv.uob.grpc.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tv.uob.grpc.User}
 */
proto.tv.uob.grpc.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = new proto.tv.uob.grpc.Profile;
      reader.readMessage(value,proto.tv.uob.grpc.Profile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    case 5:
      var value = new proto.tv.uob.grpc.StreamId;
      reader.readMessage(value,proto.tv.uob.grpc.StreamId.deserializeBinaryFromReader);
      msg.setStream(value);
      break;
    case 6:
      var value = new ChannelId_pb.ChannelId;
      reader.readMessage(value,ChannelId_pb.ChannelId.deserializeBinaryFromReader);
      msg.setChannel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tv.uob.grpc.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tv.uob.grpc.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tv.uob.grpc.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tv.uob.grpc.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tv.uob.grpc.Profile.serializeBinaryToWriter
    );
  }
  f = message.getStream();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tv.uob.grpc.StreamId.serializeBinaryToWriter
    );
  }
  f = message.getChannel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      ChannelId_pb.ChannelId.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 userId = 1;
 * @return {number}
 */
proto.tv.uob.grpc.User.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.tv.uob.grpc.User.prototype.setUserid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.tv.uob.grpc.User.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tv.uob.grpc.User.prototype.setUsername = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.tv.uob.grpc.User.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.tv.uob.grpc.User.prototype.setEmail = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional Profile profile = 4;
 * @return {?proto.tv.uob.grpc.Profile}
 */
proto.tv.uob.grpc.User.prototype.getProfile = function() {
  return /** @type{?proto.tv.uob.grpc.Profile} */ (
    jspb.Message.getWrapperField(this, proto.tv.uob.grpc.Profile, 4));
};


/** @param {?proto.tv.uob.grpc.Profile|undefined} value */
proto.tv.uob.grpc.User.prototype.setProfile = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.tv.uob.grpc.User.prototype.clearProfile = function() {
  this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tv.uob.grpc.User.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional StreamId stream = 5;
 * @return {?proto.tv.uob.grpc.StreamId}
 */
proto.tv.uob.grpc.User.prototype.getStream = function() {
  return /** @type{?proto.tv.uob.grpc.StreamId} */ (
    jspb.Message.getWrapperField(this, proto.tv.uob.grpc.StreamId, 5));
};


/** @param {?proto.tv.uob.grpc.StreamId|undefined} value */
proto.tv.uob.grpc.User.prototype.setStream = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.tv.uob.grpc.User.prototype.clearStream = function() {
  this.setStream(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tv.uob.grpc.User.prototype.hasStream = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ChannelId channel = 6;
 * @return {?proto.tv.uob.grpc.ChannelId}
 */
proto.tv.uob.grpc.User.prototype.getChannel = function() {
  return /** @type{?proto.tv.uob.grpc.ChannelId} */ (
    jspb.Message.getWrapperField(this, ChannelId_pb.ChannelId, 6));
};


/** @param {?proto.tv.uob.grpc.ChannelId|undefined} value */
proto.tv.uob.grpc.User.prototype.setChannel = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.tv.uob.grpc.User.prototype.clearChannel = function() {
  this.setChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tv.uob.grpc.User.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tv.uob.grpc.StreamId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tv.uob.grpc.StreamId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tv.uob.grpc.StreamId.displayName = 'proto.tv.uob.grpc.StreamId';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tv.uob.grpc.StreamId.prototype.toObject = function(opt_includeInstance) {
  return proto.tv.uob.grpc.StreamId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tv.uob.grpc.StreamId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tv.uob.grpc.StreamId.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    streamkey: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tv.uob.grpc.StreamId}
 */
proto.tv.uob.grpc.StreamId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tv.uob.grpc.StreamId;
  return proto.tv.uob.grpc.StreamId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tv.uob.grpc.StreamId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tv.uob.grpc.StreamId}
 */
proto.tv.uob.grpc.StreamId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tv.uob.grpc.StreamId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tv.uob.grpc.StreamId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tv.uob.grpc.StreamId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tv.uob.grpc.StreamId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStreamkey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.tv.uob.grpc.StreamId.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.tv.uob.grpc.StreamId.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string streamKey = 2;
 * @return {string}
 */
proto.tv.uob.grpc.StreamId.prototype.getStreamkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tv.uob.grpc.StreamId.prototype.setStreamkey = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tv.uob.grpc.Profile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tv.uob.grpc.Profile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tv.uob.grpc.Profile.displayName = 'proto.tv.uob.grpc.Profile';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tv.uob.grpc.Profile.prototype.toObject = function(opt_includeInstance) {
  return proto.tv.uob.grpc.Profile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tv.uob.grpc.Profile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tv.uob.grpc.Profile.toObject = function(includeInstance, msg) {
  var f, obj = {
    avatarurl: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tv.uob.grpc.Profile}
 */
proto.tv.uob.grpc.Profile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tv.uob.grpc.Profile;
  return proto.tv.uob.grpc.Profile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tv.uob.grpc.Profile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tv.uob.grpc.Profile}
 */
proto.tv.uob.grpc.Profile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarurl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tv.uob.grpc.Profile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tv.uob.grpc.Profile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tv.uob.grpc.Profile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tv.uob.grpc.Profile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvatarurl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string avatarURL = 1;
 * @return {string}
 */
proto.tv.uob.grpc.Profile.prototype.getAvatarurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tv.uob.grpc.Profile.prototype.setAvatarurl = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tv.uob.grpc.UserInitialData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tv.uob.grpc.UserInitialData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tv.uob.grpc.UserInitialData.displayName = 'proto.tv.uob.grpc.UserInitialData';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tv.uob.grpc.UserInitialData.prototype.toObject = function(opt_includeInstance) {
  return proto.tv.uob.grpc.UserInitialData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tv.uob.grpc.UserInitialData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tv.uob.grpc.UserInitialData.toObject = function(includeInstance, msg) {
  var f, obj = {
    googleuseremail: jspb.Message.getFieldWithDefault(msg, 1, ""),
    googleuserid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tv.uob.grpc.UserInitialData}
 */
proto.tv.uob.grpc.UserInitialData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tv.uob.grpc.UserInitialData;
  return proto.tv.uob.grpc.UserInitialData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tv.uob.grpc.UserInitialData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tv.uob.grpc.UserInitialData}
 */
proto.tv.uob.grpc.UserInitialData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoogleuseremail(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGoogleuserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tv.uob.grpc.UserInitialData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tv.uob.grpc.UserInitialData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tv.uob.grpc.UserInitialData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tv.uob.grpc.UserInitialData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGoogleuseremail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGoogleuserid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string googleUserEmail = 1;
 * @return {string}
 */
proto.tv.uob.grpc.UserInitialData.prototype.getGoogleuseremail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tv.uob.grpc.UserInitialData.prototype.setGoogleuseremail = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 googleUserId = 2;
 * @return {number}
 */
proto.tv.uob.grpc.UserInitialData.prototype.getGoogleuserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tv.uob.grpc.UserInitialData.prototype.setGoogleuserid = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tv.uob.grpc.Email = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tv.uob.grpc.Email, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tv.uob.grpc.Email.displayName = 'proto.tv.uob.grpc.Email';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tv.uob.grpc.Email.prototype.toObject = function(opt_includeInstance) {
  return proto.tv.uob.grpc.Email.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tv.uob.grpc.Email} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tv.uob.grpc.Email.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tv.uob.grpc.Email}
 */
proto.tv.uob.grpc.Email.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tv.uob.grpc.Email;
  return proto.tv.uob.grpc.Email.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tv.uob.grpc.Email} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tv.uob.grpc.Email}
 */
proto.tv.uob.grpc.Email.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tv.uob.grpc.Email.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tv.uob.grpc.Email.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tv.uob.grpc.Email} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tv.uob.grpc.Email.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.tv.uob.grpc.Email.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tv.uob.grpc.Email.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tv.uob.grpc.Boolean = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tv.uob.grpc.Boolean, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tv.uob.grpc.Boolean.displayName = 'proto.tv.uob.grpc.Boolean';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tv.uob.grpc.Boolean.prototype.toObject = function(opt_includeInstance) {
  return proto.tv.uob.grpc.Boolean.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tv.uob.grpc.Boolean} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tv.uob.grpc.Boolean.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tv.uob.grpc.Boolean}
 */
proto.tv.uob.grpc.Boolean.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tv.uob.grpc.Boolean;
  return proto.tv.uob.grpc.Boolean.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tv.uob.grpc.Boolean} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tv.uob.grpc.Boolean}
 */
proto.tv.uob.grpc.Boolean.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tv.uob.grpc.Boolean.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tv.uob.grpc.Boolean.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tv.uob.grpc.Boolean} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tv.uob.grpc.Boolean.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.tv.uob.grpc.Boolean.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tv.uob.grpc.Boolean.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, proto.tv.uob.grpc);
