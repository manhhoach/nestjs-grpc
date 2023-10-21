// Original file: proto/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _Empty, Empty__Output as _Empty__Output } from './Empty';
import type { LoginDto as _LoginDto, LoginDto__Output as _LoginDto__Output } from './LoginDto';
import type { RegisterDto as _RegisterDto, RegisterDto__Output as _RegisterDto__Output } from './RegisterDto';
import type { User as _User, User__Output as _User__Output } from './User';
import type { Users as _Users, Users__Output as _Users__Output } from './Users';

export interface AuthServiceClient extends grpc.Client {
  getAll(argument: _Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Users__Output>): grpc.ClientUnaryCall;
  getAll(argument: _Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_Users__Output>): grpc.ClientUnaryCall;
  getAll(argument: _Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_Users__Output>): grpc.ClientUnaryCall;
  getAll(argument: _Empty, callback: grpc.requestCallback<_Users__Output>): grpc.ClientUnaryCall;
  getAll(argument: _Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Users__Output>): grpc.ClientUnaryCall;
  getAll(argument: _Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_Users__Output>): grpc.ClientUnaryCall;
  getAll(argument: _Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_Users__Output>): grpc.ClientUnaryCall;
  getAll(argument: _Empty, callback: grpc.requestCallback<_Users__Output>): grpc.ClientUnaryCall;
  
  login(argument: _LoginDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginDto, metadata: grpc.Metadata, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginDto, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginDto, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginDto, metadata: grpc.Metadata, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginDto, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginDto, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  
  register(argument: _RegisterDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterDto, metadata: grpc.Metadata, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterDto, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterDto, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterDto, metadata: grpc.Metadata, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterDto, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterDto, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  getAll: grpc.handleUnaryCall<_Empty__Output, _Users>;
  
  login: grpc.handleUnaryCall<_LoginDto__Output, _User>;
  
  register: grpc.handleUnaryCall<_RegisterDto__Output, _User>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  getAll: MethodDefinition<_Empty, _Users, _Empty__Output, _Users__Output>
  login: MethodDefinition<_LoginDto, _User, _LoginDto__Output, _User__Output>
  register: MethodDefinition<_RegisterDto, _User, _RegisterDto__Output, _User__Output>
}
