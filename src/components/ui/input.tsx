import { cn } from '~/utils/functions';
import { Platform, TextInput, type TextInputProps } from 'react-native';

function Input({
  className,
  placeholderClassName,
  ...props
}: TextInputProps & React.RefAttributes<TextInput>) {
  return (
    <TextInput
      className={cn(
        'dark:bg-zinc-200/30 border-zinc-200 bg-white text-zinc-950 flex h-10 w-full min-w-0 flex-row items-center rounded-md border px-3 py-1 text-base leading-5 shadow-sm shadow-black/5 sm:h-9 dark:dark:bg-zinc-800/30 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50',
        props.editable === false &&
        cn(
          'opacity-50',
          Platform.select({ web: 'disabled:pointer-events-none disabled:cursor-not-allowed' })
        ),
        Platform.select({
          web: cn(
            'placeholder:text-zinc-500 selection:bg-zinc-900 selection:text-zinc-50 outline-none transition-[color,box-shadow] md:text-sm dark:placeholder:text-zinc-400 dark:selection:bg-zinc-50 dark:selection:text-zinc-900',
            'focus-visible:border-zinc-950 focus-visible:ring-zinc-950/50 focus-visible:ring-[3px] dark:focus-visible:border-zinc-300 dark:focus-visible:ring-zinc-300/50',
            'aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500 dark:aria-invalid:ring-red-900/20 dark:dark:aria-invalid:ring-red-900/40 dark:aria-invalid:border-red-900'
          ),
          native: 'placeholder:text-zinc-500/50 dark:placeholder:text-zinc-400/50',
        }),
        className
      )}
      {...props}
    />
  );
}

export { Input };
