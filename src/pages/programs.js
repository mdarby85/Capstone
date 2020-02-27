import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/page-title"
import Program from "../components/programs"
import testImg from "../assets/images/gatsby-icon.png"

export default () => (
  <Layout>
    <div className="page-container">
      <PageTitle title="Programs" />
      <Program
        ImgSrc={testImg}
        Title={"Baylor Bio-Informatics"}
        Link={"/about"}
        Description={
          "The field of Computer Science continues to drive the innovation and progress that shapes " +
          "every aspect of the digital age. There are few areas of modern life that are not touched by our ability " +
          "to rapidly create, consume, analyze or harness information."
        }
      />
      <Program
        ImgSrc={testImg}
        Title={"Baylor Computer Science"}
        Link={"/sponsors"}
        Description={
          "The field of Computer Science continues to drive the innovation and progress that shapes " +
          "every aspect of the digital age. There are few areas of modern life that are not touched by our ability " +
          "to rapidly create, consume, analyze or harness information."
        }
      />
      <Program
        ImgSrc={testImg}
        Title={"Baylor Game Development"}
        Link={"/home"}
        Description={
          "The field of Computer Science continues to drive the innovation and progress that shapes " +
          "every aspect of the digital age. There are few areas of modern life that are not touched by our ability " +
          "to rapidly create, consume, analyze or harness information."
        }
      />
      <Program
        ImgSrc={testImg}
        Title={"Baylor Engineering"}
        Link={"/contact"}
        Description={
          "The field of Computer Science continues to drive the innovation and progress that shapes " +
          "every aspect of the digital age. There are few areas of modern life that are not touched by our ability " +
          "to rapidly create, consume, analyze or harness information."
        }
      />
    </div>
  </Layout>
)
