export default function SearchInput ({queryRef, setSearchTerm}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = queryRef.current.value
        setSearchTerm(query);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input className="my-input" type='search' placeholder = 'Ex: Batman, Avengers, etc.' ref={queryRef} />
            <button className="search-btn">🔍</button>
        </form>
        </>
    )
}