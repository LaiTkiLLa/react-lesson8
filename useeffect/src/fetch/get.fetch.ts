export const getFetch = async (address: string) => {
    const data = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${address}`, {method: "GET"})
    return data.json()
}