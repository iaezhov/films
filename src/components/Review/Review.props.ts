import type { HTMLAttributes } from 'react';

export type FadeWrapperProps = {
    date: string;
    title: string;
    text: string;
    className?: HTMLAttributes<HTMLDivElement>['className']
};