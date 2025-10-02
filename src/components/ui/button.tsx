import { TextClassContext } from '~/components/ui/text';
import { cn } from '~/utils/functions';
import { cva, type VariantProps } from 'class-variance-authority';
import { Platform, Pressable } from 'react-native';

const buttonVariants = cva(
  cn(
    'group shrink-0 flex-row items-center justify-center gap-2 rounded-md shadow-none',
    Platform.select({
      web: "focus-visible:border-zinc-950 focus-visible:ring-zinc-950/50 aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500 whitespace-nowrap outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 dark:focus-visible:border-zinc-300 dark:focus-visible:ring-zinc-300/50 dark:aria-invalid:ring-red-900/20 dark:dark:aria-invalid:ring-red-900/40 dark:aria-invalid:border-red-900",
    })
  ),
  {
    variants: {
      variant: {
        default: cn(
          'bg-zinc-900 active:bg-zinc-900/90 shadow-sm shadow-black/5 dark:bg-zinc-50 dark:active:bg-zinc-50/90',
          Platform.select({ web: 'hover:bg-zinc-900/90 dark:hover:bg-zinc-50/90' })
        ),
        destructive: cn(
          'bg-red-500 active:bg-red-500/90 dark:bg-red-500/60 shadow-sm shadow-black/5 dark:bg-red-900 dark:active:bg-red-900/90 dark:dark:bg-red-900/60',
          Platform.select({
            web: 'hover:bg-red-500/90 focus-visible:ring-red-500/20 dark:focus-visible:ring-red-500/40 dark:hover:bg-red-900/90 dark:focus-visible:ring-red-900/20 dark:dark:focus-visible:ring-red-900/40',
          })
        ),
        outline: cn(
          'border-zinc-200 bg-white active:bg-zinc-100 dark:bg-zinc-200/30 dark:border-zinc-200 dark:active:bg-zinc-200/50 border shadow-sm shadow-black/5 dark:border-zinc-800 dark:bg-zinc-950 dark:active:bg-zinc-800 dark:dark:bg-zinc-800/30 dark:dark:border-zinc-800 dark:dark:active:bg-zinc-800/50',
          Platform.select({
            web: 'hover:bg-zinc-100 dark:hover:bg-zinc-200/50 dark:hover:bg-zinc-800 dark:dark:hover:bg-zinc-800/50',
          })
        ),
        secondary: cn(
          'bg-zinc-100 active:bg-zinc-100/80 shadow-sm shadow-black/5 dark:bg-zinc-800 dark:active:bg-zinc-800/80',
          Platform.select({ web: 'hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80' })
        ),
        ghost: cn(
          'active:bg-zinc-100 dark:active:bg-zinc-100/50 dark:active:bg-zinc-800 dark:dark:active:bg-zinc-800/50',
          Platform.select({ web: 'hover:bg-zinc-100 dark:hover:bg-zinc-100/50 dark:hover:bg-zinc-800 dark:dark:hover:bg-zinc-800/50' })
        ),
        link: '',
      },
      size: {
        default: cn('h-10 px-4 py-2 sm:h-9', Platform.select({ web: 'has-[>svg]:px-3' })),
        sm: cn('h-9 gap-1.5 rounded-md px-3 sm:h-8', Platform.select({ web: 'has-[>svg]:px-2.5' })),
        lg: cn('h-11 rounded-md px-6 sm:h-10', Platform.select({ web: 'has-[>svg]:px-4' })),
        icon: 'h-10 w-10 sm:h-9 sm:w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const buttonTextVariants = cva(
  cn(
    'text-zinc-950 text-sm font-medium dark:text-zinc-50',
    Platform.select({ web: 'pointer-events-none transition-colors' })
  ),
  {
    variants: {
      variant: {
        default: 'text-zinc-50 dark:text-zinc-900',
        destructive: 'text-white',
        outline: cn(
          'group-active:text-zinc-900 dark:group-active:text-zinc-50',
          Platform.select({ web: 'group-hover:text-zinc-900 dark:group-hover:text-zinc-50' })
        ),
        secondary: 'text-zinc-900 dark:text-zinc-50',
        ghost: 'group-active:text-zinc-900 dark:group-active:text-zinc-50',
        link: cn(
          'text-zinc-900 group-active:underline dark:text-zinc-50',
          Platform.select({ web: 'underline-offset-4 hover:underline group-hover:underline' })
        ),
      },
      size: {
        default: '',
        sm: '',
        lg: '',
        icon: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = React.ComponentProps<typeof Pressable> &
  React.RefAttributes<typeof Pressable> &
  VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <TextClassContext.Provider value={buttonTextVariants({ variant, size })}>
      <Pressable
        className={cn(props.disabled && 'opacity-50', buttonVariants({ variant, size }), className)}
        role="button"
        {...props}
      />
    </TextClassContext.Provider>
  );
}

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
