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
import Program from "components/program"
import testImg from "assets/images/gatsby-icon.png"
import { API_URL } from "src/constants"
import { PROGRAM_QUERY } from "data/queries"

export default () => {
    const { loading, error, data } = useQuery(PROGRAM_QUERY)

    return (
        <MainLayout>
            <SEO title="Programs" />
            <div className="page-container">
                <PageTitle title="Programs" />
                {loading && <p>Loading...</p>}
                {error && <p>Error: ${error.message}</p>}
                {data &&
                    data.programs &&
                    data.programs.map(node => (
                        <Program
                            imgSrc={node.thumbnail ? `${API_URL}${node.thumbnail.url}` : testImg}
                            title={node.name}
                            link={node.link}
                            description={node.description}
                        />
                    ))}
            </div>
        </MainLayout>
    )
}
