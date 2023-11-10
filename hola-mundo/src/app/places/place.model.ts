
/**
 * Interface "place" se pone ? para decirle que puede ser una cadena o un valor indefinido.
 */

export interface place {
    id?: string 
    title?: string
    imageURL?: string
    comments?: string[]
}