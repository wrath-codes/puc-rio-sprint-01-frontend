import './index.css'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
function App() {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            <Recipes />
        </QueryClientProvider>
    )
}

export default App


type RecipeBasic = {
    id: number
    title: string,
    description: string
}

function Recipes() {
    // Access the client
    const queryClient = useQueryClient()

    // Queries
    const query = useQuery({
        queryKey: ['recipes'],
        queryFn: () => fetch('/api/recipes').then((res) => res.json()),
    })

    return (
        <div className="text-center align-middle">
            <h1 className="text-3xl">Recipes</h1>
            {query.isLoading ? (
                'Loading...'
            ) : (

                <ul>
                    {query.data?.map((recipe: RecipeBasic) => (
                        <li key={recipe.id}>
                            {recipe.title}{' '}
                            {recipe.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}