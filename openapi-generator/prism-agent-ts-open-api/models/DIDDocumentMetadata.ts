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
 * @interface DIDDocumentMetadata
 */
export interface DIDDocumentMetadata {
    /**
     * If a DID has been deactivated, DID document metadata MUST include this property with the boolean value true. If a DID has not been deactivated, this property is OPTIONAL, but if included, MUST have the boolean value false.
     * @type {boolean}
     * @memberof DIDDocumentMetadata
     */
    deactivated: boolean;
    /**
     * A DID in canonical form
     * @type {string}
     * @memberof DIDDocumentMetadata
     */
    canonicalId?: string;
}

/**
 * Check if a given object implements the DIDDocumentMetadata interface.
 */
export function instanceOfDIDDocumentMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "deactivated" in value;

    return isInstance;
}

export function DIDDocumentMetadataFromJSON(json: any): DIDDocumentMetadata {
    return DIDDocumentMetadataFromJSONTyped(json, false);
}

export function DIDDocumentMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DIDDocumentMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deactivated': json['deactivated'],
        'canonicalId': !exists(json, 'canonicalId') ? undefined : json['canonicalId'],
    };
}

export function DIDDocumentMetadataToJSON(value?: DIDDocumentMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deactivated': value.deactivated,
        'canonicalId': value.canonicalId,
    };
}

