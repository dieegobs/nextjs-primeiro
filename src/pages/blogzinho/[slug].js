import { useRouter } from "next/router";

export default function DetailsPost() {
    const { query } = useRouter()
    return <h1>Página: {JSON.stringify(query)}</h1>;
}