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
  CreateIssueCredentialRecordRequest,
  ErrorResponse,
  IssueCredentialRecord,
  IssueCredentialRecordCollection,
} from '../models';
import {
    CreateIssueCredentialRecordRequestFromJSON,
    CreateIssueCredentialRecordRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    IssueCredentialRecordFromJSON,
    IssueCredentialRecordToJSON,
    IssueCredentialRecordCollectionFromJSON,
    IssueCredentialRecordCollectionToJSON,
} from '../models';

export interface AcceptCredentialOfferRequest {
    recordId: string;
}

export interface CreateCredentialOfferRequest {
    createIssueCredentialRecordRequest: CreateIssueCredentialRecordRequest;
}

export interface GetCredentialRecordRequest {
    recordId: string;
}

export interface IssueCredentialRequest {
    recordId: string;
}

/**
 * 
 */
export class IssueCredentialsProtocolApi extends runtime.BaseAPI {

    /**
     * Accepts a credential offer received from a VC issuer and sends back a credential request.
     * As a holder, accepts a credential offer received from an issuer.
     */
    async acceptCredentialOfferRaw(requestParameters: AcceptCredentialOfferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IssueCredentialRecord>> {
        if (requestParameters.recordId === null || requestParameters.recordId === undefined) {
            throw new runtime.RequiredError('recordId','Required parameter requestParameters.recordId was null or undefined when calling acceptCredentialOffer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/issue-credentials/records/{recordId}/accept-offer`.replace(`{${"recordId"}}`, encodeURIComponent(String(requestParameters.recordId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IssueCredentialRecordFromJSON(jsonValue));
    }

    /**
     * Accepts a credential offer received from a VC issuer and sends back a credential request.
     * As a holder, accepts a credential offer received from an issuer.
     */
    async acceptCredentialOffer(requestParameters: AcceptCredentialOfferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IssueCredentialRecord> {
        const response = await this.acceptCredentialOfferRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * As a credential issuer, create a new credential offer to be sent to a holder.
     */
    async createCredentialOfferRaw(requestParameters: CreateCredentialOfferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IssueCredentialRecord>> {
        if (requestParameters.createIssueCredentialRecordRequest === null || requestParameters.createIssueCredentialRecordRequest === undefined) {
            throw new runtime.RequiredError('createIssueCredentialRecordRequest','Required parameter requestParameters.createIssueCredentialRecordRequest was null or undefined when calling createCredentialOffer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/issue-credentials/credential-offers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateIssueCredentialRecordRequestToJSON(requestParameters.createIssueCredentialRecordRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IssueCredentialRecordFromJSON(jsonValue));
    }

    /**
     * As a credential issuer, create a new credential offer to be sent to a holder.
     */
    async createCredentialOffer(requestParameters: CreateCredentialOfferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IssueCredentialRecord> {
        const response = await this.createCredentialOfferRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets an existing issue credential record by its unique identifier.
     */
    async getCredentialRecordRaw(requestParameters: GetCredentialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IssueCredentialRecord>> {
        if (requestParameters.recordId === null || requestParameters.recordId === undefined) {
            throw new runtime.RequiredError('recordId','Required parameter requestParameters.recordId was null or undefined when calling getCredentialRecord.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/issue-credentials/records/{recordId}`.replace(`{${"recordId"}}`, encodeURIComponent(String(requestParameters.recordId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IssueCredentialRecordFromJSON(jsonValue));
    }

    /**
     * Gets an existing issue credential record by its unique identifier.
     */
    async getCredentialRecord(requestParameters: GetCredentialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IssueCredentialRecord> {
        const response = await this.getCredentialRecordRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets the list of issue credential records.
     */
    async getCredentialRecordsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IssueCredentialRecordCollection>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/issue-credentials/records`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IssueCredentialRecordCollectionFromJSON(jsonValue));
    }

    /**
     * Gets the list of issue credential records.
     */
    async getCredentialRecords(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IssueCredentialRecordCollection> {
        const response = await this.getCredentialRecordsRaw(initOverrides);
        return await response.value();
    }

    /**
     * As an issuer, issues the verifiable credential related to the specified record.
     */
    async issueCredentialRaw(requestParameters: IssueCredentialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IssueCredentialRecord>> {
        if (requestParameters.recordId === null || requestParameters.recordId === undefined) {
            throw new runtime.RequiredError('recordId','Required parameter requestParameters.recordId was null or undefined when calling issueCredential.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/issue-credentials/records/{recordId}/issue-credential`.replace(`{${"recordId"}}`, encodeURIComponent(String(requestParameters.recordId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IssueCredentialRecordFromJSON(jsonValue));
    }

    /**
     * As an issuer, issues the verifiable credential related to the specified record.
     */
    async issueCredential(requestParameters: IssueCredentialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IssueCredentialRecord> {
        const response = await this.issueCredentialRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
