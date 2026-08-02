# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 2.x.x   | :white_check_mark: |
| 1.x.x   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly:

1. **Email**: Send a detailed report to **aadigunjal0975@gmail.com**
2. **Do NOT** open a public GitHub issue for security vulnerabilities
3. Include steps to reproduce the vulnerability
4. Allow reasonable time for a fix before public disclosure

## Security Headers

This project implements the following security headers via `next.config.mjs`:

| Header | Value |
|---|---|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |

## Dependencies

All dependencies are regularly audited. Run `pnpm audit` to check for known vulnerabilities.
