import clsx from "clsx"

export const MenuIcon = ({open}: any) => {
  return (
   <>
        <span 
            className={clsx(
                'absolute block h-1 rotate-0 transform rounded-full opacity-100 transition-all duration-300 ease-out',
                open
                    ? 'left-1/2 top-2 w-0 bg-purple-50 group-hover:bg-white'
                    : 'left-0 top-0 w-full bg-purple-900 group-hover:bg-purple-600'
            )}
        />
        <span 
             className={clsx(
                'absolute left-0 top-2 block h-1 w-full transform rounded-full opacity-100 transition-all duration-300 ease-in-out group-hover:bg-purple-600',
                open
                  ? 'rotate-45 bg-purple-50 group-hover:bg-white'
                  : 'rotate-0 bg-roze group-hover:bg-purple-600',
              )}
        />
         <span 
            className={clsx(
                'absolute left-0 top-2 block h-1 w-full transform rounded-full opacity-100 transition-all duration-300 ease-in-out group-hover:bg-purple-600',
                open
                  ? '-rotate-45 bg-purple-50 group-hover:bg-white'
                  : 'rotate-0 bg-purple-900 group-hover:bg-purple-600',
              )}
        />
        <span
          className={clsx(
            'absolute block h-1 rotate-0 transform rounded-full opacity-100 transition-all duration-300 ease-in-out group-hover:bg-purple-600',
            open
              ? 'left-1/2 top-2 w-0 bg-purple-50 group-hover:bg-white'
              : 'left-0 top-4 w-full bg-purple-900 group-hover:bg-purple-600',
          )}
        />
   </>
  )
}
