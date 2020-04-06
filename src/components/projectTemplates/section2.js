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
      <Section2TitlePrimary>Intro to Cappy</Section2TitlePrimary>
      <Section2HrPrimary />
      <Section2pPrimary>
        The intuitive new way to showcase College Universities' Capstone
        Experience. Developed by students for institutions everywhere. The
        intuitive new way to showcase College Universities' Capstone Experience.
        Developed by students for institutions everywhere.
      </Section2pPrimary>
    </Section2ContainerPrimary>
    <Section2ContainerSecondary>
      <Section2TitleSecondary>Background</Section2TitleSecondary>
      <Section2HrSecondary />
      <Section2pSecondary>
        The intuitive new way to showcase College Universities' Capstone
        Experience. Developed by students for institutions everywhere. The
        intuitive new way to showcase College Universities' Capstone Experience.
        Developed by students for institutions everywhere.
      </Section2pSecondary>
    </Section2ContainerSecondary>
    <Section2ContainerPrimary>
      <Section2TitlePrimary>Development</Section2TitlePrimary>
      <Section2HrPrimary />
      <Section2pPrimary>
        The intuitive new way to showcase College Universities' Capstone
        Experience. Developed by students for institutions everywhere. The
        intuitive new way to showcase College Universities' Capstone Experience.
        Developed by students for institutions everywhere.
      </Section2pPrimary>
    </Section2ContainerPrimary>
  </>
)
