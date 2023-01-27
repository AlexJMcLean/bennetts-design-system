import Head from "next/head";
import React from "react";
import Container from "../Container";
import Icon from "../Icon";
import Longform from "../Longform";
import { Error404PageStyles } from "./Error404Page.styles";
import { ExclamationIcon } from "../../assets/icons/Exclamation";

function Error404Page() {
  return (
    <Error404PageStyles>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <Container>
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Longform>
            <Icon source={ExclamationIcon} width={100} height={100} />
            <h1>There's no page at this address</h1>
            <p>Check the URL and try again</p>
          </Longform>
        </div>
      </Container>
    </Error404PageStyles>
  );
}

export default Error404Page;
