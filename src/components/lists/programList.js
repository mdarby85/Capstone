/**
 * @author: Mario Arturo Lopez Martinez
 * @author: Chris Holle
 *
 * latest update:
 *  - delete functionality with modal
 *  - edit functionality
 *  - refactor modals out of file
 */

import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { GenerateTableHeaders } from "utils/componentGeneration"
import { StyledTable, TableData } from "components/styledComponents"
import { objectByString } from "utils/functions"
import { PROGRAM_QUERY } from "data/queries"
import ProgramRow from "components/programRow"

const SectionStyle = { paddingBottom: "3em" }

export default () => {
    const { loading, error, data } = useQuery(PROGRAM_QUERY, {
        pollInterval: 5000,
    })

    // Column field names
    const fields = ["name"]

    return (
        <div style={SectionStyle}>
            {loading && <p>Loading...</p>}
            {error && <p>Error: ${error.message}</p>}
            {data && (
                <StyledTable>
                    <thead>{GenerateTableHeaders(["Program Name"])}</thead>
                    {loading && <tr>Loading...</tr>}
                    {error && <tr>Error: ${error.message}</tr>}
                    {data && (
                        <tbody>
                            {data.programs.map(node => (
                                <tr key={node.id}>
                                    {fields.map((field, index) => {
                                        if (field.includes("."))
                                            return <TableData key={index}>{objectByString(node, field)}</TableData>
                                        else return <TableData key={index}>{node[field]}</TableData>
                                    })}
                                    <ProgramRow node={node} />
                                </tr>
                            ))}
                        </tbody>
                    )}
                </StyledTable>
            )}
        </div>
    )
}
