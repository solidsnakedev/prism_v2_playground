from http import HTTPStatus
from typing import Any, Dict, Optional, Union

import httpx

from ... import errors
from ...client import Client
from ...models.connection import Connection
from ...models.create_connection_request import CreateConnectionRequest
from ...models.error_response import ErrorResponse
from ...types import Response


def _get_kwargs(
    *,
    client: Client,
    json_body: CreateConnectionRequest,
) -> Dict[str, Any]:
    url = "{}/connections".format(client.base_url)

    headers: Dict[str, str] = client.get_headers()
    cookies: Dict[str, Any] = client.get_cookies()

    json_json_body = json_body.to_dict()

    return {
        "method": "post",
        "url": url,
        "headers": headers,
        "cookies": cookies,
        "timeout": client.get_timeout(),
        "json": json_json_body,
    }


def _parse_response(*, client: Client, response: httpx.Response) -> Optional[Union[Connection, ErrorResponse]]:
    if response.status_code == HTTPStatus.CREATED:
        response_201 = Connection.from_dict(response.json())

        return response_201
    if response.status_code == HTTPStatus.UNPROCESSABLE_ENTITY:
        response_422 = ErrorResponse.from_dict(response.json())

        return response_422
    if client.raise_on_unexpected_status:
        raise errors.UnexpectedStatus(f"Unexpected status code: {response.status_code}")
    else:
        return None


def _build_response(*, client: Client, response: httpx.Response) -> Response[Union[Connection, ErrorResponse]]:
    return Response(
        status_code=HTTPStatus(response.status_code),
        content=response.content,
        headers=response.headers,
        parsed=_parse_response(client=client, response=response),
    )


def sync_detailed(
    *,
    client: Client,
    json_body: CreateConnectionRequest,
) -> Response[Union[Connection, ErrorResponse]]:
    """Creates a new connection record and returns an Out of Band invitation.

     Generates a new Peer DID and creates an [Out of Band 2.0](https://identity.foundation/didcomm-
    messaging/spec/v2.0/#out-of-band-messages) invitation.
    It returns a new connection record in `InvitationGenerated` state.
    The request body may contain a `label` that can be used as a human readable alias for the
    connection, for example `{'label': \"Bob\"}`

    Args:
        json_body (CreateConnectionRequest):  Example: {'label': 'Peter'}.

    Raises:
        errors.UnexpectedStatus: If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
        httpx.TimeoutException: If the request takes longer than Client.timeout.

    Returns:
        Response[Union[Connection, ErrorResponse]]
    """

    kwargs = _get_kwargs(
        client=client,
        json_body=json_body,
    )

    response = httpx.request(
        verify=client.verify_ssl,
        **kwargs,
    )

    return _build_response(client=client, response=response)


def sync(
    *,
    client: Client,
    json_body: CreateConnectionRequest,
) -> Optional[Union[Connection, ErrorResponse]]:
    """Creates a new connection record and returns an Out of Band invitation.

     Generates a new Peer DID and creates an [Out of Band 2.0](https://identity.foundation/didcomm-
    messaging/spec/v2.0/#out-of-band-messages) invitation.
    It returns a new connection record in `InvitationGenerated` state.
    The request body may contain a `label` that can be used as a human readable alias for the
    connection, for example `{'label': \"Bob\"}`

    Args:
        json_body (CreateConnectionRequest):  Example: {'label': 'Peter'}.

    Raises:
        errors.UnexpectedStatus: If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
        httpx.TimeoutException: If the request takes longer than Client.timeout.

    Returns:
        Response[Union[Connection, ErrorResponse]]
    """

    return sync_detailed(
        client=client,
        json_body=json_body,
    ).parsed


async def asyncio_detailed(
    *,
    client: Client,
    json_body: CreateConnectionRequest,
) -> Response[Union[Connection, ErrorResponse]]:
    """Creates a new connection record and returns an Out of Band invitation.

     Generates a new Peer DID and creates an [Out of Band 2.0](https://identity.foundation/didcomm-
    messaging/spec/v2.0/#out-of-band-messages) invitation.
    It returns a new connection record in `InvitationGenerated` state.
    The request body may contain a `label` that can be used as a human readable alias for the
    connection, for example `{'label': \"Bob\"}`

    Args:
        json_body (CreateConnectionRequest):  Example: {'label': 'Peter'}.

    Raises:
        errors.UnexpectedStatus: If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
        httpx.TimeoutException: If the request takes longer than Client.timeout.

    Returns:
        Response[Union[Connection, ErrorResponse]]
    """

    kwargs = _get_kwargs(
        client=client,
        json_body=json_body,
    )

    async with httpx.AsyncClient(verify=client.verify_ssl) as _client:
        response = await _client.request(**kwargs)

    return _build_response(client=client, response=response)


async def asyncio(
    *,
    client: Client,
    json_body: CreateConnectionRequest,
) -> Optional[Union[Connection, ErrorResponse]]:
    """Creates a new connection record and returns an Out of Band invitation.

     Generates a new Peer DID and creates an [Out of Band 2.0](https://identity.foundation/didcomm-
    messaging/spec/v2.0/#out-of-band-messages) invitation.
    It returns a new connection record in `InvitationGenerated` state.
    The request body may contain a `label` that can be used as a human readable alias for the
    connection, for example `{'label': \"Bob\"}`

    Args:
        json_body (CreateConnectionRequest):  Example: {'label': 'Peter'}.

    Raises:
        errors.UnexpectedStatus: If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
        httpx.TimeoutException: If the request takes longer than Client.timeout.

    Returns:
        Response[Union[Connection, ErrorResponse]]
    """

    return (
        await asyncio_detailed(
            client=client,
            json_body=json_body,
        )
    ).parsed
