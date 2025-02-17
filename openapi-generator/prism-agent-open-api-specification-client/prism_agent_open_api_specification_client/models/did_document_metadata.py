from typing import Any, Dict, List, Type, TypeVar, Union

import attr

from ..types import UNSET, Unset

T = TypeVar("T", bound="DIDDocumentMetadata")


@attr.s(auto_attribs=True)
class DIDDocumentMetadata:
    """
    Example:
        {'canonicalId': 'canonicalId', 'deactivated': True}

    Attributes:
        deactivated (bool): If a DID has been deactivated, DID document metadata MUST include this property with the
            boolean value true. If a DID has not been deactivated, this property is OPTIONAL, but if included, MUST have the
            boolean value false.
        canonical_id (Union[Unset, str]): A DID in canonical form
    """

    deactivated: bool
    canonical_id: Union[Unset, str] = UNSET
    additional_properties: Dict[str, Any] = attr.ib(init=False, factory=dict)

    def to_dict(self) -> Dict[str, Any]:
        deactivated = self.deactivated
        canonical_id = self.canonical_id

        field_dict: Dict[str, Any] = {}
        field_dict.update(self.additional_properties)
        field_dict.update(
            {
                "deactivated": deactivated,
            }
        )
        if canonical_id is not UNSET:
            field_dict["canonicalId"] = canonical_id

        return field_dict

    @classmethod
    def from_dict(cls: Type[T], src_dict: Dict[str, Any]) -> T:
        d = src_dict.copy()
        deactivated = d.pop("deactivated")

        canonical_id = d.pop("canonicalId", UNSET)

        did_document_metadata = cls(
            deactivated=deactivated,
            canonical_id=canonical_id,
        )

        did_document_metadata.additional_properties = d
        return did_document_metadata

    @property
    def additional_keys(self) -> List[str]:
        return list(self.additional_properties.keys())

    def __getitem__(self, key: str) -> Any:
        return self.additional_properties[key]

    def __setitem__(self, key: str, value: Any) -> None:
        self.additional_properties[key] = value

    def __delitem__(self, key: str) -> None:
        del self.additional_properties[key]

    def __contains__(self, key: str) -> bool:
        return key in self.additional_properties
