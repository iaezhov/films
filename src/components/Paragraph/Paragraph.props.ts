import type { ReactNode } from 'react';

export interface ParagraphProps {
    size?: 'small' | 'default';
    children: ReactNode;
}