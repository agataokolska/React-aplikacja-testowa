import React from "react"
import { TextField } from "material-ui";

const Search = (props) => (
    <div>
        <TextField
            placeholder={'Search'}
            fullWidth={true}
            onChange={props.toBePassedByProps}
            value={props.searchPhraseToBeAsProps}
        />
    </div>

)

export default Search