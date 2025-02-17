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
/**
 * A request to create a new "issue credential record".
 * @export
 * @interface CreateIssueCredentialRecordRequest
 */
export interface CreateIssueCredentialRecordRequest {
    /**
     * The unique identifier of the schema used for this credential offer.
     * @type {string}
     * @memberof CreateIssueCredentialRecordRequest
     */
    schemaId?: string;
    /**
     * The identifier (e.g DID) of the subject to which the verifiable credential will be issued.
     * @type {string}
     * @memberof CreateIssueCredentialRecordRequest
     */
    subjectId: string;
    /**
     * The validity period in seconds of the verifiable credential that will be issued.
     * @type {number}
     * @memberof CreateIssueCredentialRecordRequest
     */
    validityPeriod?: number;
    /**
     * The claims that will be associated with the issued verifiable credential.
     * @type {{ [key: string]: string; }}
     * @memberof CreateIssueCredentialRecordRequest
     */
    claims: { [key: string]: string; };
    /**
     * Specifies whether or not the credential should be automatically generated and issued when receiving the `CredentialRequest` from the holder.
     * If set to `false`, a manual approval by the issuer via API call will be required for the VC to be issued.
     * @type {boolean}
     * @memberof CreateIssueCredentialRecordRequest
     */
    automaticIssuance?: boolean;
    /**
     * The issuer DID of the verifiable credential object.
     * @type {string}
     * @memberof CreateIssueCredentialRecordRequest
     */
    issuingDID: string;
    /**
     * The unique identifier of a DIDComm connection that already exists between the issuer and the holder, and that will be used to execute the issue credential protocol.
     * @type {string}
     * @memberof CreateIssueCredentialRecordRequest
     */
    connectionId: string;
}

/**
 * Check if a given object implements the CreateIssueCredentialRecordRequest interface.
 */
export function instanceOfCreateIssueCredentialRecordRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "subjectId" in value;
    isInstance = isInstance && "claims" in value;
    isInstance = isInstance && "issuingDID" in value;
    isInstance = isInstance && "connectionId" in value;

    return isInstance;
}

export function CreateIssueCredentialRecordRequestFromJSON(json: any): CreateIssueCredentialRecordRequest {
    return CreateIssueCredentialRecordRequestFromJSONTyped(json, false);
}

export function CreateIssueCredentialRecordRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateIssueCredentialRecordRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schemaId': !exists(json, 'schemaId') ? undefined : json['schemaId'],
        'subjectId': json['subjectId'],
        'validityPeriod': !exists(json, 'validityPeriod') ? undefined : json['validityPeriod'],
        'claims': json['claims'],
        'automaticIssuance': !exists(json, 'automaticIssuance') ? undefined : json['automaticIssuance'],
        'issuingDID': json['issuingDID'],
        'connectionId': json['connectionId'],
    };
}

export function CreateIssueCredentialRecordRequestToJSON(value?: CreateIssueCredentialRecordRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schemaId': value.schemaId,
        'subjectId': value.subjectId,
        'validityPeriod': value.validityPeriod,
        'claims': value.claims,
        'automaticIssuance': value.automaticIssuance,
        'issuingDID': value.issuingDID,
        'connectionId': value.connectionId,
    };
}

