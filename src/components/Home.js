export default function Home({ getTranslation}) {
    return (
        <h1>{getTranslation("hello")} {getTranslation("bye")}</h1>
    )
}