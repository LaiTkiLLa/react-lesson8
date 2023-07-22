export const getFetch = async (address: string, opts: { method: string }) => {
    const data = await fetch(`http://localhost:7070/${address}`, opts)
    return data.json()
}