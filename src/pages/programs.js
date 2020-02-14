import React from "react"
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import Program from "../components/programs";
import tempImg from "../assets/images/gatsby-icon.png";

export default () => (
    <Layout>
        <PageTitle title="Programs"/>
        <Program Title="Computer Science" ImgSrc={tempImg} Description="This is a test." Link="/about" />
    </Layout>
)