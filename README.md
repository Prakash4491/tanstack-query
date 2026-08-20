# TanStack Query Employee Management

This project was created to practice React, TypeScript, TanStack Query and Tailwind CSS.

19/08/26

## What I performed

- Configured Tailwind CSS for UI styling.
- Created an Employee TypeScript interface and multiple employee records.
- Configured QueryClient and QueryClientProvider.
- Used useQuery, queryKey and a separate query function.
- Implemented loading, error and success states.
- Displayed employee data in a responsive Tailwind table.
- Used staleTime and manual refetching.
- Used Tailwind utility classes instead of a custom styles.css file.

## Concepts Practiced

QueryClient, QueryClientProvider, useQuery, queryKey, queryFn, caching, staleTime, loading/error states and refetching.

20/08/26

## What I performed

- gcTime controls how long inactive/unused cached data can remain before it can be garbage-collected.
- Learned different ways a query can be fetched again.Window Focus Refetch and Refetch on Mount.
- Installed and used React Query Devtools.
- Learned that useMutation() is used when we want to change server-side data.
- Created an AddEmployee form to add new employees.
- Learned how to refresh related query data after a mutation using invalidateQueries().
- Clearing the data in Form After Successful mutation.

## Concepts Practiced

gcTime,isPending,isFetching,isError,Manual refetch,Refetch on window focus,Refetch on mount,React Query Devtools,useMutation,mutationFn,mutation.mutate(),Mutation states,onSuccess,onError,onSettled,useQueryClient,invalidateQueries
