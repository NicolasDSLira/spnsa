import { cn } from '@/lib/utils';
import * as React from 'react';

function Line({ className, ...props }: React.ComponentProps<'hr'>) {
    return <hr className={cn('mx-auto', className)} {...props} />;
}

export { Line };
