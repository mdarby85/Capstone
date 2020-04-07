/**
 * @name programs.js
 * @author Isaiah Bullard (CSI 43C9 Spring 2020)
 * @overview page that lists all programs available to view
 * @TODO Do we want a static query? May need to use Apollo for dynamic data loading.
 */

import React from "react"
import MainLayout from "components/layouts/mainLayout"
import { useQuery } from "@apollo/react-hooks"
import SEO from "components/seo"
import PageTitle from "components/titles/pageTitle"
import { PROJECT_QUERY } from "data/queries"
import { GenerateProjectCards } from "utils/componentGeneration"

export default () => {
    const { loading, error, data } = useQuery(PROJECT_QUERY)

    return (
        <MainLayout>
            <SEO title="Projects" />
            <div className="page-container">
                <PageTitle title="Projects" />
                {loading && <p>Loading...</p>}
                {error && <p>Error: ${error.message}</p>}
                {data && data.projects && GenerateProjectCards(data.projects)}
            </div>
        </MainLayout>
    )
}
