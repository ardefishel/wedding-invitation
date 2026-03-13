// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { EnvelopeRouteComponent } from './envelope'

function mockReducedMotionPreference(matches: boolean) {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation((query: string) => ({
            matches,
            media: query,
            onchange: null,
            addListener: vi.fn(),
            removeListener: vi.fn(),
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        })),
    })
}

afterEach(() => {
    cleanup()
    vi.restoreAllMocks()
})

describe('EnvelopeRouteComponent', () => {
    it('renders closed by default and toggles open then closed', () => {
        mockReducedMotionPreference(false)

        render(<EnvelopeRouteComponent />)

        const toggle = screen.getByRole('button', { name: 'Open invitation envelope' })

        expect(toggle.getAttribute('data-envelope-state')).toBe('envelope-close')
        expect(toggle.getAttribute('aria-expanded')).toBe('false')
        expect(toggle.getAttribute('data-reduced-motion')).toBe('false')

        fireEvent.click(toggle)

        expect(toggle.getAttribute('data-envelope-state')).toBe('envelope-open')
        expect(toggle.getAttribute('aria-expanded')).toBe('true')
        expect(toggle.getAttribute('aria-label')).toBe('Close invitation envelope')

        fireEvent.click(toggle)

        expect(toggle.getAttribute('data-envelope-state')).toBe('envelope-close')
        expect(toggle.getAttribute('aria-expanded')).toBe('false')
        expect(toggle.getAttribute('aria-label')).toBe('Open invitation envelope')
    })

    it('uses the reduced-motion fallback path and still toggles correctly', () => {
        mockReducedMotionPreference(true)

        render(<EnvelopeRouteComponent />)

        const toggle = screen.getByRole('button', { name: 'Open invitation envelope' })

        expect(toggle.getAttribute('data-reduced-motion')).toBe('true')

        fireEvent.click(toggle)

        expect(toggle.getAttribute('data-envelope-state')).toBe('envelope-open')
        expect(toggle.getAttribute('aria-expanded')).toBe('true')

        fireEvent.click(toggle)

        expect(toggle.getAttribute('data-envelope-state')).toBe('envelope-close')
        expect(toggle.getAttribute('aria-expanded')).toBe('false')
    })
})
