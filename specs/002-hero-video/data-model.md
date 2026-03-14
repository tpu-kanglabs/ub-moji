# Data Model: Hero Video Section

## Overview

This feature introduces no persistent data entities. It relies on static media assets only.

## Static Assets

- **demo.mp4**: Primary hero background video.
- **poster.jpg**: Fallback image displayed when the video cannot play.

## Validation Rules

- Asset names must match the spec (`demo.mp4`, `poster.jpg`).
- Text alternative for the video must be 10 words or fewer.
