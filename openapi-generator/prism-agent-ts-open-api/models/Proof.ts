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
 * 
 * @export
 * @interface Proof
 */
export interface Proof {
    /**
     * 
     * @type {string}
     * @memberof Proof
     */
    type: string;
    /**
     * 
     * @type {Date}
     * @memberof Proof
     */
    created: Date;
    /**
     * 
     * @type {string}
     * @memberof Proof
     */
    verificationMethod: string;
    /**
     * 
     * @type {string}
     * @memberof Proof
     */
    proofPurpose: string;
    /**
     * 
     * @type {string}
     * @memberof Proof
     */
    proofValue: string;
    /**
     * 
     * @type {string}
     * @memberof Proof
     */
    domain?: string;
}

/**
 * Check if a given object implements the Proof interface.
 */
export function instanceOfProof(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "verificationMethod" in value;
    isInstance = isInstance && "proofPurpose" in value;
    isInstance = isInstance && "proofValue" in value;

    return isInstance;
}

export function ProofFromJSON(json: any): Proof {
    return ProofFromJSONTyped(json, false);
}

export function ProofFromJSONTyped(json: any, ignoreDiscriminator: boolean): Proof {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'created': (new Date(json['created'])),
        'verificationMethod': json['verificationMethod'],
        'proofPurpose': json['proofPurpose'],
        'proofValue': json['proofValue'],
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
    };
}

export function ProofToJSON(value?: Proof | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'created': (value.created.toISOString()),
        'verificationMethod': value.verificationMethod,
        'proofPurpose': value.proofPurpose,
        'proofValue': value.proofValue,
        'domain': value.domain,
    };
}

