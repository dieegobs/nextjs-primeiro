import { useRouter } from "next/router";

export default function DetailsPost() {
    const { query } = useRouter()
    return <h1>Página: {query.slug}</h1>;
}