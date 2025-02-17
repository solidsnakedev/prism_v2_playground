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


import * as runtime from '../runtime';
import type {
  InternalServerError,
  NotFound,
  VerifiableCredentialSchema,
  VerifiableCredentialSchemaPage,
  VerificationCredentialSchemaInput,
} from '../models';
import {
    InternalServerErrorFromJSON,
    InternalServerErrorToJSON,
    NotFoundFromJSON,
    NotFoundToJSON,
    VerifiableCredentialSchemaFromJSON,
    VerifiableCredentialSchemaToJSON,
    VerifiableCredentialSchemaPageFromJSON,
    VerifiableCredentialSchemaPageToJSON,
    VerificationCredentialSchemaInputFromJSON,
    VerificationCredentialSchemaInputToJSON,
} from '../models';

export interface CreateSchemaRequest {
    verificationCredentialSchemaInput: VerificationCredentialSchemaInput;
}

export interface GetSchemaByIdRequest {
    id: string;
}

export interface LookupSchemasByQueryRequest {
    offset?: number;
    limit?: number;
    author?: string;
    name?: string;
    tags?: string;
    order?: string;
}

/**
 * 
 */
export class SchemaRegistryApi extends runtime.BaseAPI {

    /**
     * Publish the new schema with attributes to the schema registry on behalf of Cloud Agent. Schema will be signed by the keys of Cloud Agent and issued by the DID that corresponds to it
     * Publish new schema to the schema registry
     */
    async createSchemaRaw(requestParameters: CreateSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VerifiableCredentialSchema>> {
        if (requestParameters.verificationCredentialSchemaInput === null || requestParameters.verificationCredentialSchemaInput === undefined) {
            throw new runtime.RequiredError('verificationCredentialSchemaInput','Required parameter requestParameters.verificationCredentialSchemaInput was null or undefined when calling createSchema.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/schema-registry/schemas`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VerificationCredentialSchemaInputToJSON(requestParameters.verificationCredentialSchemaInput),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VerifiableCredentialSchemaFromJSON(jsonValue));
    }

    /**
     * Publish the new schema with attributes to the schema registry on behalf of Cloud Agent. Schema will be signed by the keys of Cloud Agent and issued by the DID that corresponds to it
     * Publish new schema to the schema registry
     */
    async createSchema(requestParameters: CreateSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VerifiableCredentialSchema> {
        const response = await this.createSchemaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch the schema by the unique identifier. Verifiable Credential Schema in json format is returned.
     * Fetch the schema from the registry by id
     */
    async getSchemaByIdRaw(requestParameters: GetSchemaByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VerifiableCredentialSchema>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSchemaById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/schema-registry/schemas/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VerifiableCredentialSchemaFromJSON(jsonValue));
    }

    /**
     * Fetch the schema by the unique identifier. Verifiable Credential Schema in json format is returned.
     * Fetch the schema from the registry by id
     */
    async getSchemaById(requestParameters: GetSchemaByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VerifiableCredentialSchema> {
        const response = await this.getSchemaByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lookup schemas by `author`, `name`, `tags` parameters and control the pagination by `offset` and `limit` parameters 
     * Lookup schemas by indexed fields
     */
    async lookupSchemasByQueryRaw(requestParameters: LookupSchemasByQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VerifiableCredentialSchemaPage>> {
        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.author !== undefined) {
            queryParameters['author'] = requestParameters.author;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.tags !== undefined) {
            queryParameters['tags'] = requestParameters.tags;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/schema-registry/schemas`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VerifiableCredentialSchemaPageFromJSON(jsonValue));
    }

    /**
     * Lookup schemas by `author`, `name`, `tags` parameters and control the pagination by `offset` and `limit` parameters 
     * Lookup schemas by indexed fields
     */
    async lookupSchemasByQuery(requestParameters: LookupSchemasByQueryRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VerifiableCredentialSchemaPage> {
        const response = await this.lookupSchemasByQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
