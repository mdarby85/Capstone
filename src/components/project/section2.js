/**
 * @name project/example.js
 * @author Chris Holle
 * @overview Program example page to show projects from within a particular program.
 */

import React from "react"
import {
    Section2ContainerPrimary,
    Section2ContainerSecondary,
    Section2TitlePrimary,
    Section2HrPrimary,
    Section2HrSecondary,
    Section2TitleSecondary,
    Section2pPrimary,
    Section2pSecondary,
} from "./styledComponents"

/*
 * Section2
 * - Intro paragraph with title (green background)
 * - Background paragraph on the project (Gold)
 * - Development paragraph (Green)
 */

export default () => (
    <>
        {/* Section 2 */}
        {/* Contains Introduction, Background, and Development (Process?) information. */}
        <Section2ContainerPrimary>
            <Section2TitlePrimary>Background</Section2TitlePrimary>
            <Section2HrPrimary />
            <Section2pPrimary>Talk about the project background.</Section2pPrimary>
        </Section2ContainerPrimary>
        <Section2ContainerSecondary>
            <Section2TitleSecondary>Introduction</Section2TitleSecondary>
            <Section2HrSecondary />
            <Section2pSecondary>A brief introduction about your project.</Section2pSecondary>
        </Section2ContainerSecondary>
        <Section2ContainerPrimary>
            <Section2TitlePrimary>Process</Section2TitlePrimary>
            <Section2HrPrimary />
            <Section2pPrimary>Talk about the process.</Section2pPrimary>
        </Section2ContainerPrimary>
        <Section2ContainerSecondary>
            <Section2TitleSecondary>Deliverables</Section2TitleSecondary>
            <Section2HrSecondary />
            <Section2pSecondary>List of deliverables here.</Section2pSecondary>
        </Section2ContainerSecondary>
    </>
)
