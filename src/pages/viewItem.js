import React from "react"
import { Location } from '@reach/router'
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props) => (
  <Layout>
    <Location>

      {({ location }) => {
        if (!location || !location.href) return <></>
        var url = location.href.split("?id=")[1]
        if (url.includes(":/") && !url.includes("://")) {
          /* Something in Gatsby or React sometimes deforms the URL so we need to fix it here. */
          url = url.replace(":/", "://")
        }
        console.log(url)
        return (
          <>
            <SEO title="Second Page" />
            <center>
              <br/><br/>
              <img
                src={url}
                alt="Larger version"
                title="Image from Unsplash"
              />
            </center>
          </>
        )
      }}
    </Location>
  </Layout>
)

export default SecondPage
