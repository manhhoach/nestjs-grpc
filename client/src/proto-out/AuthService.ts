// Original file: proto/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { LoginDto as _LoginDto, LoginDto__Output as _LoginDto__Output } from './LoginDto';
import type { RegisterDto as _RegisterDto, RegisterDto__Output as _RegisterDto__Output } from './RegisterDto';
import type { User as _User, User__Output as _User__Output } from './User';

export interface AuthServiceClient extends grpc.Client {
  Login(argument: _LoginDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  Login(argument: _LoginDto, metadata: grpc.Metadata, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  Login(argument: _LoginDto, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  Login(argument: _LoginDto, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginDto, metadata: grpc.Metadata, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginDto, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginDto, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  
  Register(argument: _RegisterDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  Register(argument: _RegisterDto, metadata: grpc.Metadata, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  Register(argument: _RegisterDto, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  Register(argument: _RegisterDto, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterDto, metadata: grpc.Metadata, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterDto, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterDto, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<_LoginDto__Output, _User>;
  
  Register: grpc.handleUnaryCall<_RegisterDto__Output, _User>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  Login: MethodDefinition<_LoginDto, _User, _LoginDto__Output, _User__Output>
  Register: MethodDefinition<_RegisterDto, _User, _RegisterDto__Output, _User__Output>
}
