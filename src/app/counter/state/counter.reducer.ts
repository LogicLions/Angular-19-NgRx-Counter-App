// counter
// isLoading
// error - if count is fetched from API and we get error

export interface CounterState 
{
    count : number,
    isLoading : boolean,
    error : string | null
}

export const initialState : CounterState = 
{
    count : 0,
    isLoading : false,
    error : null
}