/**
 * Combines all class names in the map to a single class string
 */
export function classes (map : {[key: string] : boolean}) : string
{
    let list = [];

    for (let key in map)
    {
        if (map.hasOwnProperty(key) && map[key])
        {
            list.push(key);
        }
    }

    return list.join(" ");
}