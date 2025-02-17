from http import HTTPStatus
from typing import Any, Dict, Optional, Union

import httpx

from ... import errors
from ...client import Client
from ...models.did_operation_response import DIDOperationResponse
from ...models.error_response import ErrorResponse
from ...types import Response


def _get_kwargs(
    did_ref: str,
    *,
    client: Client,
) -> Dict[str, Any]:
    url = "{}/did-registrar/dids/{didRef}/deactivations".format(client.base_url, didRef=did_ref)

    headers: Dict[str, str] = client.get_headers()
    cookies: Dict[str, Any] = client.get_cookies()

    return {
        "method": "post",
        "url": url,
        "headers": headers,
        "cookies": cookies,
        "timeout": client.get_timeout(),
    }


def _parse_response(
    *, client: Client, response: httpx.Response
) -> Optional[Union[DIDOperationResponse, ErrorResponse]]:
    if response.status_code == HTTPStatus.ACCEPTED:
        response_202 = DIDOperationResponse.from_dict(response.json())

        return response_202
    if response.status_code == HTTPStatus.UNPROCESSABLE_ENTITY:
        response_422 = ErrorResponse.from_dict(response.json())

        return response_422
    if client.raise_on_unexpected_status:
        raise errors.UnexpectedStatus(f"Unexpected status code: {response.status_code}")
    else:
        return None


def _build_response(
    *, client: Client, response: httpx.Response
) -> Response[Union[DIDOperationResponse, ErrorResponse]]:
    return Response(
        status_code=HTTPStatus(response.status_code),
        content=response.content,
        headers=response.headers,
        parsed=_parse_response(client=client, response=response),
    )


def sync_detailed(
    did_ref: str,
    *,
    client: Client,
) -> Response[Union[DIDOperationResponse, ErrorResponse]]:
    """Deactivate DID in Prism Agent's wallet and post deactivate operation to the VDR

     Deactivate DID in Prism Agent's wallet and post deactivate operation to the VDR.

    Args:
        did_ref (str):

    Raises:
        errors.UnexpectedStatus: If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
        httpx.TimeoutException: If the request takes longer than Client.timeout.

    Returns:
        Response[Union[DIDOperationResponse, ErrorResponse]]
    """

    kwargs = _get_kwargs(
        did_ref=did_ref,
        client=client,
    )

    response = httpx.request(
        verify=client.verify_ssl,
        **kwargs,
    )

    return _build_response(client=client, response=response)


def sync(
    did_ref: str,
    *,
    client: Client,
) -> Optional[Union[DIDOperationResponse, ErrorResponse]]:
    """Deactivate DID in Prism Agent's wallet and post deactivate operation to the VDR

     Deactivate DID in Prism Agent's wallet and post deactivate operation to the VDR.

    Args:
        did_ref (str):

    Raises:
        errors.UnexpectedStatus: If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
        httpx.TimeoutException: If the request takes longer than Client.timeout.

    Returns:
        Response[Union[DIDOperationResponse, ErrorResponse]]
    """

    return sync_detailed(
        did_ref=did_ref,
        client=client,
    ).parsed


async def asyncio_detailed(
    did_ref: str,
    *,
    client: Client,
) -> Response[Union[DIDOperationResponse, ErrorResponse]]:
    """Deactivate DID in Prism Agent's wallet and post deactivate operation to the VDR

     Deactivate DID in Prism Agent's wallet and post deactivate operation to the VDR.

    Args:
        did_ref (str):

    Raises:
        errors.UnexpectedStatus: If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
        httpx.TimeoutException: If the request takes longer than Client.timeout.

    Returns:
        Response[Union[DIDOperationResponse, ErrorResponse]]
    """

    kwargs = _get_kwargs(
        did_ref=did_ref,
        client=client,
    )

    async with httpx.AsyncClient(verify=client.verify_ssl) as _client:
        response = await _client.request(**kwargs)

    return _build_response(client=client, response=response)


async def asyncio(
    did_ref: str,
    *,
    client: Client,
) -> Optional[Union[DIDOperationResponse, ErrorResponse]]:
    """Deactivate DID in Prism Agent's wallet and post deactivate operation to the VDR

     Deactivate DID in Prism Agent's wallet and post deactivate operation to the VDR.

    Args:
        did_ref (str):

    Raises:
        errors.UnexpectedStatus: If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
        httpx.TimeoutException: If the request takes longer than Client.timeout.

    Returns:
        Response[Union[DIDOperationResponse, ErrorResponse]]
    """

    return (
        await asyncio_detailed(
            did_ref=did_ref,
            client=client,
        )
    ).parsed
