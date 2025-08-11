import type { HTMLAttributes } from 'react';

export interface MovieCardButtonProps extends HTMLAttributes<HTMLButtonElement> {
    marked?: boolean;
}