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
 * key-pair template to add to DID document.
 * @export
 * @interface ManagedDIDKeyTemplate
 */
export interface ManagedDIDKeyTemplate {
    /**
     * Identifier of a verification material in the DID Document
     * @type {string}
     * @memberof ManagedDIDKeyTemplate
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ManagedDIDKeyTemplate
     */
    purpose: ManagedDIDKeyTemplatePurposeEnum;
}


/**
 * @export
 */
export const ManagedDIDKeyTemplatePurposeEnum = {
    Authentication: 'authentication',
    AssertionMethod: 'assertionMethod',
    KeyAgreement: 'keyAgreement',
    CapabilityInvocation: 'capabilityInvocation',
    CapabilityDelegation: 'capabilityDelegation'
} as const;
export type ManagedDIDKeyTemplatePurposeEnum = typeof ManagedDIDKeyTemplatePurposeEnum[keyof typeof ManagedDIDKeyTemplatePurposeEnum];


/**
 * Check if a given object implements the ManagedDIDKeyTemplate interface.
 */
export function instanceOfManagedDIDKeyTemplate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "purpose" in value;

    return isInstance;
}

export function ManagedDIDKeyTemplateFromJSON(json: any): ManagedDIDKeyTemplate {
    return ManagedDIDKeyTemplateFromJSONTyped(json, false);
}

export function ManagedDIDKeyTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManagedDIDKeyTemplate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'purpose': json['purpose'],
    };
}

export function ManagedDIDKeyTemplateToJSON(value?: ManagedDIDKeyTemplate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'purpose': value.purpose,
    };
}

