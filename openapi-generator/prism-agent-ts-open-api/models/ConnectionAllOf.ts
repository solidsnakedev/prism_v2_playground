/* tslint:disable */
/* eslint-disable */
/**
 * Prism Agent OpenAPI specification
 * OpenAPI specification for Decentralized Identifiers (DID) Operations
 *
 * The version of the OpenAPI document: 0.41.0
 * Contact: atala-coredid@iohk.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ConnectionInvitation } from './ConnectionInvitation';
import {
    ConnectionInvitationFromJSON,
    ConnectionInvitationFromJSONTyped,
    ConnectionInvitationToJSON,
} from './ConnectionInvitation';

/**
 * 
 * @export
 * @interface ConnectionAllOf
 */
export interface ConnectionAllOf {
    /**
     * The reference to the connection resource.
     * @type {string}
     * @memberof ConnectionAllOf
     */
    self: string;
    /**
     * The type of object returned. In this case a `Connection`.
     * @type {string}
     * @memberof ConnectionAllOf
     */
    kind: string;
    /**
     * The unique identifier of the connection.
     * @type {string}
     * @memberof ConnectionAllOf
     */
    connectionId: string;
    /**
     * The DID representing me as the inviter or invitee in this specific connection.
     * @type {string}
     * @memberof ConnectionAllOf
     */
    myDid?: string;
    /**
     * The DID representing the other peer as the an inviter or invitee in this specific connection.
     * @type {string}
     * @memberof ConnectionAllOf
     */
    theirDid?: string;
    /**
     * The current state of the connection protocol execution.
     * @type {string}
     * @memberof ConnectionAllOf
     */
    state: ConnectionAllOfStateEnum;
    /**
     * The date and time the connection record was created.
     * @type {Date}
     * @memberof ConnectionAllOf
     */
    createdAt: Date;
    /**
     * The date and time the connection record was last updated.
     * @type {Date}
     * @memberof ConnectionAllOf
     */
    updatedAt?: Date;
    /**
     * The role played by the Prism agent in the connection flow.
     * @type {string}
     * @memberof ConnectionAllOf
     */
    role: ConnectionAllOfRoleEnum;
    /**
     * 
     * @type {ConnectionInvitation}
     * @memberof ConnectionAllOf
     */
    invitation: ConnectionInvitation;
}


/**
 * @export
 */
export const ConnectionAllOfStateEnum = {
    InvitationGenerated: 'InvitationGenerated',
    InvitationReceived: 'InvitationReceived',
    ConnectionRequestPending: 'ConnectionRequestPending',
    ConnectionRequestSent: 'ConnectionRequestSent',
    ConnectionRequestReceived: 'ConnectionRequestReceived',
    ConnectionResponsePending: 'ConnectionResponsePending',
    ConnectionResponseSent: 'ConnectionResponseSent',
    ConnectionResponseReceived: 'ConnectionResponseReceived',
    ProblemReportPending: 'ProblemReportPending',
    ProblemReportSent: 'ProblemReportSent',
    ProblemReportReceived: 'ProblemReportReceived'
} as const;
export type ConnectionAllOfStateEnum = typeof ConnectionAllOfStateEnum[keyof typeof ConnectionAllOfStateEnum];

/**
 * @export
 */
export const ConnectionAllOfRoleEnum = {
    Inviter: 'Inviter',
    Invitee: 'Invitee'
} as const;
export type ConnectionAllOfRoleEnum = typeof ConnectionAllOfRoleEnum[keyof typeof ConnectionAllOfRoleEnum];


/**
 * Check if a given object implements the ConnectionAllOf interface.
 */
export function instanceOfConnectionAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "self" in value;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "connectionId" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "role" in value;
    isInstance = isInstance && "invitation" in value;

    return isInstance;
}

export function ConnectionAllOfFromJSON(json: any): ConnectionAllOf {
    return ConnectionAllOfFromJSONTyped(json, false);
}

export function ConnectionAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'self': json['self'],
        'kind': json['kind'],
        'connectionId': json['connectionId'],
        'myDid': !exists(json, 'myDid') ? undefined : json['myDid'],
        'theirDid': !exists(json, 'theirDid') ? undefined : json['theirDid'],
        'state': json['state'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'role': json['role'],
        'invitation': ConnectionInvitationFromJSON(json['invitation']),
    };
}

export function ConnectionAllOfToJSON(value?: ConnectionAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'self': value.self,
        'kind': value.kind,
        'connectionId': value.connectionId,
        'myDid': value.myDid,
        'theirDid': value.theirDid,
        'state': value.state,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'role': value.role,
        'invitation': ConnectionInvitationToJSON(value.invitation),
    };
}

