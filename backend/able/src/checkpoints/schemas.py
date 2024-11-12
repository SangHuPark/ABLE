from typing import Optional
from src.response.schemas import ImmutableBaseModel

class CheckpointListResponse(ImmutableBaseModel):
    checkpoints: list[str]

class CheckpointsPaginatedResponse(ImmutableBaseModel):
    checkpoints : Optional[list[str]]
    has_next: bool